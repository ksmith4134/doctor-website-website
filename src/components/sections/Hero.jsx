import ContactForm from "../forms/ContactForm";

export default function Hero() {
    return (
        <div className='relative -mt-10 flex flex-col justify-center items-center gap-6'>
            <h1 className='font-hind text-5xl sm:text-6xl leading-tight text-gray-300/90 text-balance text-center'>
                Building better websites for{" "}
                <span className='font-semibold'>doctors & their patients</span>
            </h1>
            <h2 className='text-center text-xl text-gray-300/90'>
                From small private practices to large hospitals
            </h2>
            <ContactForm />
        </div>
    );
}
