import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";



const FacilitySchedulingForm = () => {

    const handleClick = () => {

    }

    return (
        <div className="mx-20 lg:mx-48">       

            <p className="text-3xl mt-8 mb-4 text-sky-600 lg:px-48">
                Facility Scheduling Form
            </p>

            <p className="text-lg lg:px-48">Fields marked with an <span className="text-red-600"> &#42; </span> are required</p>

            <form className="lg:px-48">
                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Date
                    </label>

                    <input type="date" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2 shadow" placeholder="" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Contact Name <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2 shadow" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Sponsor Name (Organization) <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Telephone <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Email <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Start Date and Start Time of Event <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="datetime-local" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        End Date and End Time of Event <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="datetime-local" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Type of Event (Describe)<span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Room Being Used (ex. Cafeteria)<span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Date Requested <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Expected Number of Attendees <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Set Up Before Event (Time) <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Clean Up After Event (Time) <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Special Instructions
                    </label>

                    <textarea type="text" rows="8" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Paragraph Text
                    </label>

                    <textarea type="text"
                        rows="8"
                        placeholder="**NOTE** NO alcoholic beverages permitted when children and minors  (21 years of age and younger) are present on the property during event."
                        className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>


                <div className="flex flex-col py-4">
                    <label className="text-lg font-bold pb-2">
                        Paragraph Text
                    </label>

                    <textarea
                        type="text"
                        rows="8"
                        className="border border-stone-400 bg-gray-100 text-lg px-4 py-2 whitespace-pre">FOR OFFICE USE ONLY
                        Date Received:____________________
                        Facility Scheduled? _________Yes    __________No

                        Extra Parochial Insurance Received? ______Yes ______No ______N/A

                        Processed By: _______________________________________________________
                    </textarea>
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
                    onClick={ handleClick }>
                    Submit
                </button>
            </form>

        </div>
    )
}

export default FacilitySchedulingForm