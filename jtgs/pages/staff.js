import Card from "../components/Card.js";
import { staffData } from "../components/staff-data.js";



const Staff = () => {


    return ( 

        <div className="flex flex-col  justify-around my-6 w-80 mx-auto font-Alice font-semibold lg:flex-row lg:w-full">

            <div className="mt-6">
                <ul className="leading-8 text-lg text-gray-500 cursor-pointer">
                    <li>Directions</li>
                    <li>Current Bulletin</li>
                    <li>Archived Bulletins</li>
                    <li>Staff</li>
                    <li>Parish History</li>
                    <li>St Peters Cemetery</li>
                </ul>
            </div>


            <div>

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
        </div> 
    );
}

export default Staff;