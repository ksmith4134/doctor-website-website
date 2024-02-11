import ContactForm from "../forms/ContactForm";

export default function Contact() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-hind text-6xl leading-tight text-gray-300/90'>
                Contact us
            </h1>
            <ContactForm />
        </div>
    );
}
