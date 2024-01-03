"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from './Holofoil.module.css'

export default function Holofoil(props) {

    const {
        width = '360px',
        height = '480px',
        perspective = 600,
        radius = 32,
        foregroundImage = '/holofoil/foreground.png',
        opacity = 0,
        rotateX = 12,
        rotateY = 12,
        shimmerRate = 30,
        children,
    } = props

    const [ holoCoordinates, setHoloCoordinates ] = useState({ mx: 30, my: 50, bx: 30, by: 30, rx: 0, ry: 0, opacity })

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
                            className={styles.image}
                            quality={100}
                            style={{ color:"transparent" }} 
                            src={foregroundImage}
                        /> 
                        { children }
                    </div>

                    <div className={styles.cursourHighlight}></div>
                    <div className={styles.foil}></div>

                    <div className="absolute top-0 left-0">
                        <div className="flex flex-col justify-between items-center my-4">
                            <div className="h-4 w-14 rounded-full bg-gray-950 shadow-inner shadow-black"></div>
                            <div className="flex flex-col items-center">
                                <Image src={'/holofoil/id-profile.png'} width={128} height={128} alt="id badge profile photo" className="shadow-xl shadow-gray-950/40 overflow-hidden rounded-full" />
                                <p className="mt-4 font-bold">Doogie Howser, MD</p>
                                <p className="mt-1 text-xs font-light text-gray-300">Attending Physician</p>
                            </div>
                            <div>
                                <div className="text-xs text-gray-300 font-light flex flex-col gap-1">
                                    <div className="flex justify-between">
                                        <p>ID #</p>
                                        <p>000 001</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Boards</p>
                                        <p>01/01/2024</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Phone</p>
                                        <p>(555) 555-5555</p>
                                    </div>
                                </div>
                                <Image src={'/holofoil/barcode.png'} width={220} height={28} alt="barcode" className="mt-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}