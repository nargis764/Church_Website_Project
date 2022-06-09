import Image from "next/image"
import { useRouter } from "next/router"



const Sacraments = () => {
    const router = useRouter();

    return (
        <div className="px-20 lg:px-32">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="">
                    <p className="text-3xl mt-8 text-sky-600">
                        Sacraments
                    </p>

                    <p className="text-2xl mt-5 text-sky-600">
                        Sacrament of Baptism
                    </p>

                    <p className="text-lg mt-2">
                        English: 2:00 pm on the 1st Sunday at St. Joseph's Church
                        2:00 pm on the 3rd Sunday at St. Joseph's Church
                    </p>

                    <p className="text-lg mt-2">
                        Spanish: 2:00 pm on the 2nd Sunday at St. Joseph's Church
                    </p>

                    <p className="text-lg mt-2">
                        Portuguese: 2:00 pm on the 4th Sunday at St. Joseph's Church
                    </p>


                    {/* <p className="text-lg mt-2">
                        Please call the Parish Office for Baptismal Preparation sessions and to schedule the celebration of the sacrament.
                    </p> */}


                </div>

                <div className="mt-6 lg:mt-14">
                    <Image className="rounded shadow"
                        src={"https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                        //loader function generates the URL for the image by appending a root domain to the provided source
                        loader={() => "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                        alt=""
                        width={320} height={240}
                    />
                </div>
            </div>

            <p className="text-lg mt-2">
                Please call the Parish Office for Baptismal Preparation sessions and to schedule the celebration of the sacrament.
            </p>



            <div className="flex flex-col lg:flex-row-reverse lg:justify-between">
                <div className="lg:ml-10">


                    <p className="text-2xl mt-5 text-sky-600">
                        Sacrament of Reconciliation (Confession)
                    </p>

                    <p className="text-lg mt-2 ">
                        Been a while since you've gone to Confession? 
                        <span className="underline text-sky-600 hover:cursor-pointer"
                        onClick={() => router.push("https://jesusthegoodshepherd.org/wp-content/uploads/Sacrament-of-Penance.pdf")}>
                        Click here for a reference guide</span>, including a pray for the Act of Contrition.
                    </p>


                </div>

                <div className="mt-6 mb-6 lg:mt-5">
                    <Image className="rounded shadow"
                        src={"https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                        //loader function generates the URL for the image by appending a root domain to the provided source
                        loader={() => "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                        alt=""
                        width={320} height={240}
                    />
                </div>
            </div>



            <div className="flex flex-col lg:flex-row justify-between">
                <div className="">


                    <p className="text-2xl mt-5 text-sky-600">
                        Anointing of the Sick
                    </p>

                    <p className="text-lg mt-2">
                        Urgent sick calls at any time. Holy Communion will be brought to the sick and the confined regularly upon request.
                    </p>

                    <p className="text-lg mt-2">
                        Call the Parish Office for further information.
                    </p>

                    <p className="text-lg mt-2">
                        Questions about the sacrament of Anointing of the Sick?
                    </p>

                    <p className="text-lg mt-2 mb-5 cursor-pointer text-sky-600"
                        onClick={() => router.push("https://jesusthegoodshepherd.org/wp-content/uploads/Sacrament-of-Anointing-of-the-Sick.pdf")}>
                        Click here for answers.
                    </p>



                </div>

                <div className="lg:mt-5">
                    <Image className="mt-6 rounded shadow"
                        src={"https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                        //loader function generates the URL for the image by appending a root domain to the provided source
                        loader={() => "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                        alt=""
                        width={320} height={240}
                    />
                </div>
            </div>



            <div className="flex flex-col lg:flex-row-reverse justify-between">
                <div className="">


                    <p className="text-2xl mt-5 text-sky-600">
                        Sacrament of Marriage (Matrimony)
                    </p>

                    <p className="text-lg mt-2">
                        Please call the Parish Office for arrangements at least nine (9) months in advance of the requested wedding date.
                    </p>


                </div>

                <div className="mt-6 mb-6 lg:mt-5">
                    <Image className="rounded shadow"
                        src={"https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                        //loader function generates the URL for the image by appending a root domain to the provided source
                        loader={() => "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                        alt=""
                        width={320} height={240}
                    />
                </div>
            </div>


        </div>
    )
}

export default Sacraments