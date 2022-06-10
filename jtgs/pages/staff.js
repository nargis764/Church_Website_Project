import Card from "../components/Card.js";
import { staffData } from "../components/staff-data.js";



const Staff = () => {


    return (

        // <div className="flex flex-col justify-around my-4 px-20 mx-auto font-Alice font-semibold  lg:w-full">
        <>

        <p className="text-3xl mt-8 px-20 text-sky-600 lg:px-56">
                        Staff
                    </p>

            <div className="grid grid-cols-1 px-20 md:grid-cols-2 gap-x-20 lg:px-56">

                {/* <div className="mt-6">
                <ul className="leading-8 text-lg text-gray-500 cursor-pointer">
                    <li className="hover:text-teal-500">Directions</li>
                    <li className="hover:text-teal-500">Archived Bulletins</li>
                    <li className="hover:text-teal-500">Current Bulletin</li>
                    <li className="hover:text-teal-500">Staff</li>
                    <li className="hover:text-teal-500">Parish History</li>
                    <li className="hover:text-teal-500">St Peters Cemetery</li>
                </ul>
            </div> */}



                {
                    staffData.map((staff, index) => {
                        return (
                            <Card
                                key={staff.Id}
                                source={staff.Image}
                                title={staff.Name}
                                telephone={staff.Contact}
                                email={staff.Email} />

                        )

                    })
                }


            </div>
        </>
    );
}

export default Staff;