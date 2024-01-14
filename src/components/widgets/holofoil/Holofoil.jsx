"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Holofoil.module.css";
import { IoMedical } from "react-icons/io5";

export default function Holofoil(props) {

    const {
        width = '520px',
        height = '364px',
        perspective = 600,
        radius = 28,
        foregroundImage = '/holofoil/foreground-28.png',
        opacity = 0,
        rotateX = 12,
        rotateY = 12,
        shimmerRate = 30,
        children,
    } = props

    const [ holoCoordinates, setHoloCoordinates ] = useState({ mx: 30, my: 30, bx: 45, by: 45, rx: 0, ry: 0, opacity })

    let bounds;
    const inputRef = useRef();

    const rotateToMouse = (e) => {
        bounds = inputRef.current.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2,
        };

        setHoloCoordinates({
            mx: (leftX/bounds.width)*100, // 0 -> 100%; (leftX / card width) * 100
            my: (topY/bounds.height)*100, // 0 -> 100%; (topY / card height) * 100
            bx: (leftX+bounds.width)/(bounds.width/shimmerRate), // 30 -> 60%
            by: (topY+bounds.height)/(bounds.height/shimmerRate), // 30 -> 60%
            rx: (center.x)/((bounds.right-bounds.left) / (2*rotateX)), // -rotateX -> +rotateXdeg
            ry: (center.y)/((bounds.bottom-bounds.top) / (2*rotateY)), // -rotateY -> +rotateYdeg
            opacity: 1,
        })
    };

    const removeListener = (e) => {
        setHoloCoordinates({mx: 50, my: 50, bx: 50, by: 50, rx: 0, ry: 0, opacity})
    };

    return (
        <div 
            className={styles.container} 
            style={{ 
                "--width": `${width}`, 
                "--height": `${height}`, 
            }}
        >
            <div 
                className={styles.variables}
                style={{
                    "--m-x": `${holoCoordinates.mx}%`, 
                    "--m-y": `${holoCoordinates.my}%`, 
                    "--bg-x": `${holoCoordinates.bx}%`, 
                    "--bg-y": `${holoCoordinates.by}%`, 
                    "--r-x": `${holoCoordinates.rx}deg`, 
                    "--r-y": `${holoCoordinates.ry}deg`, 
                    "--radius": `${radius}px`, 
                    "--opacity": `${holoCoordinates.opacity}`,
                    "--perspective": `${perspective}px`, 
                }}
                ref={inputRef}
                onMouseLeave={removeListener}
                onMouseMove={rotateToMouse}
            >
                <div className={styles.card}>

                    <div className={styles.imageContainer}>
                        <Image 
                            alt="Doctor ID badge" 
                            fill
                            priority={true}
                            className={styles.image}
                            quality={100}
                            style={{ color:"transparent" }} 
                            src={foregroundImage}
                        /> 
                        { children }
                    </div>

                    <div className={styles.cursourHighlight}></div>
                    <div className={styles.foil}></div>

                    <div className="absolute top-0 left-0 shadow-inner shadow-gray-600/10 rounded-[28px]">
                        <div className="h-4 w-full mx-auto">
                            {/* cut-out */}
                            <div className="mt-4 mx-auto h-4 w-14 rounded-full bg-gray-900 shadow-inner shadow-gray-600/10"></div>
                        </div>
                        <div className="flex flex-col justify-between items-start pl-11 my-4 text-gray-200">
                            {/* body */}
                            <div className="flex justify-start items-center gap-14 mb-1">
                                <div className="flex justify-center items-center">
                                    <Image alt="picture of a doctor on an ID badge" src={"/holofoil/doctor-image.png"} width={152} height={219} quality={100} priority />
                                </div>
                                <div className="">
                                    <h4 className="text-xl font-bold">Doogie Howser, MD</h4>
                                    <h5 className="mt-1 text-sm font-light">Attending Physician</h5>
                                    <div className="mt-8 flex gap-10">
                                        <div className="flex flex-col justify-center items-between gap-6 text-sm">
                                            <div>
                                                <p className="font-bold">ID No</p>
                                                <p className="mt-1">0100100101</p>
                                            </div>
                                            <div>
                                                <p className="font-bold">Phone</p>
                                                <p className="mt-1">555-5555</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-between gap-6 text-sm">
                                            <div>
                                                <p className="font-bold">New Patients</p>
                                                <p className="mt-1">Accepting</p>
                                            </div>
                                            <div>
                                                <p className="font-bold">Extension</p>
                                                <p className="mt-1">x110</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* footer */}
                            <div className="-ml-2 flex items-center gap-2">
                                <IoMedical className="text-xl opacity-80" />
                                <p className="font-light">Eastman Medical Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}