import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";



const ContactForm = () => {

    return (
        <div className="mx-20 lg:mx-48">
            <p className="my-4 text-2xl font-bold lg:px-48">Contact Me</p>

            <p className="text-lg lg:px-48">Fields marked with an <span className="text-red-600"> &#42; </span> are required</p>

            <form className="lg:px-48">
            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    Name <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2 shadow" />
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    Phone
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2 shadow" />
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    Email <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2 shadow" />
            </div>

            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    Message <span className="text-red-600"> &#42; </span>
                </label>

                <textarea type="text" rows="8" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2 shadow" />
            </div>

            <p className="text-lg font-bold py-4">
                Recaptcha
            </p>

            <ReCAPTCHA
                sitekey="process.env.RECAPTCHA_SITE_KEY"
            // onChange={onChange}
            />

            <button 
            className="mb-24 mt-6 text-lg text-white bg-black px-3 py-3 rounded"
            onClick={handleClick}>
                Submit
            </button>

            </form>


        </div>
    )
}

export default ContactForm