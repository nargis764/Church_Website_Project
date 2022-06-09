import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";


const ParishRegistrationForm = () => {
    
    const handleClick = () => {

    }

return (
    <div className="mx-20 lg:mx-48">
        <p className="text-3xl mt-8 mb-4 text-sky-600 lg:px-48">
            Parish Online Registration Form (Complete One Form For Each Person)
        </p>

        <p className="text-lg lg:px-48">Fields marked with an <span className="text-red-600"> &#42; </span> are required</p>


        <form className="lg:px-48">
            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    Last Name <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2 shadow" />
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    First Name <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    Address <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    City <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    US States <span className="text-red-600"> &#42; </span>
                </label>

                <select className="border border-stone-400 bg-gray-100 text-lg px-4 py-2">
                    <option value="">- Select State -</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    Zip <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    Date <span className="text-red-600"> &#42; </span>
                </label>

                <input type="date" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2 shadow" placeholder="" />
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    Email
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    2nd Email
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
                    2nd Telephone
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    Birth Date <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    Religion <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
            </div>


            <div className="flex flex-col py-4">
                <label className="text-lg font-bold pb-2">
                    Marital Status <span className="text-red-600"> &#42; </span>
                </label>

                <select className="border border-stone-400 bg-gray-100 text-lg px-4 py-2">
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="seperated">Seperated</option>
                    <option value="divorced">Divorced</option>
                    <option value="widow(er)">Widow (er)</option>
                </select>
            </div>


            <div className="flex flex-col py-4 text-lg">
                <label className="font-bold pb-2">
                    Sacraments
                </label>

                <div className="">
                    <input type="checkbox" name="sacraments1" value="None" className="mr-2" />
                    <label>None</label>
                </div>

                <div>
                    <input type="checkbox" name="sacraments2" value="Baptized" className="mr-2" />
                    <label>Baptized</label>
                </div>

                <div>
                    <input type="checkbox" name="sacraments3" value="Communion" className="mr-2" />
                    <label>Communion</label>
                </div>

                <div>
                    <input type="checkbox" name="sacraments4" value="Confirmation" className="mr-2" />
                    <label>Confirmtion</label>
                </div>

                <div>
                    <input type="checkbox" name="sacraments5" value="Marriage" className="mr-2" />
                    <label>Marriage</label>
                </div>

            </div>


            <div className="flex flex-col justify-between lg:flex-row ">
                <div className="flex flex-col space-y-2">
                <label className="text-lg font-bold ">
                    Office Use Only (Received)
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>

                <div className="flex flex-col space-y-2">
                <label className="text-lg font-bold ">
                    Parish SOFT
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>

                <div className="flex flex-col space-y-2">
                <label className="text-lg font-bold ">
                    OSV
                </label>

                <input type="text" className="border border-stone-400 bg-gray-100 text-lg px-4 py-2" />
                </div>
                
                
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
                Register
            </button>
        </form>
    </div>
)
}

export default ParishRegistrationForm