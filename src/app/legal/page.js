import MaxWidth from "@/components/utils/MaxWidth";

export default function Legal() {
    return (
        <MaxWidth>
            <div className="dark">
                <article id='privacy-policy' className='prose dark:prose-invert mt-16'>
                    <h1>Privacy Policy</h1>
                </article>
                <article id='terms-and-conditions' className='prose dark:prose-invert mt-16'>
                    <h1>Terms & Conditions </h1>
                </article>
            </div>
        </MaxWidth>
    );
}
