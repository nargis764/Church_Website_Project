import React from 'react'
import Image from "next/image"
import Link from "next/link"




const ReligiousEducation = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


    return (
        <div>

            <Image
                className=""
                src={imgURL}
                //loader function generates the URL for the image by appending a root domain to the provided source
                //apparently we don't need the loader function for locally stored images
                loader={() => imgURL}
                alt=""
                // layout = "fill" 
                layout="responsive"
                objectFit="cover"
                width={1250}
                height={380}
            />


            <div className="px-20 lg:px-44">
                <p className="text-3xl my-8 text-sky-600 text-center tracking-wider">
                    Religious Education
                </p>

                <p className="text-lg mt-2">
                    We come together to share the message of Jesus to work to foster Christian Community, to lead children to worship and prayer and to motivate them to serve others. We acknowledge that parents are the first and foremost teachers of their children's faith. We welcome the opportunity to work in partnership with parents to fulfill our mission.
                </p>

                <p className="text-lg mt-2">
                    Located at St. Joseph's School building classes are held weekly. On Monday's we welcome Grades 5-8 from 7:00 pm - 8:15 pm. On Tuesday’s we welcome our little lambs Grades 1-4 from 4:15 pm – 5:30 pm.
                </p>


                {/* <div className="flex flex-col lg:flex-row mt-10 justify-between">
                <div className=""> */}
                <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 gap-x-10">
                    <div className="lg:col-span-3">


                        <p className="text-2xl mt-5 text-sky-600">
                            Sacrament of Reconciliation and First Holy Communion
                        </p>


                        <p className="text-lg mt-2">
                            Our little lambs prepare for the Sacrament of Reconciliation and to receive Holy Communion for the first time.
                        </p>


                        {/* <p className="text-lg mt-2">
                        Please call the Parish Office for Baptismal Preparation sessions and to schedule the celebration of the sacrament.
                    </p> */}


                    </div>

                    <div className="lg:col-span-1">
                        <Image className="rounded shadow"
                            src={"https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            //loader function generates the URL for the image by appending a root domain to the provided source
                            loader={() => "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            alt=""
                            width={320} height={240}
                        />
                    </div>
                </div>



                {/* <div className="flex flex-col lg:flex-row-reverse mt-10 lg:justify-between"> */}
                <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 gap-x-10">
                    <div className="lg:col-span-3">

                        {/* <div className="lg:ml-10"> */}


                        <p className="text-2xl mt-5 text-sky-600">
                            Sacrament of Confirmation
                        </p>

                        <p className="text-lg mt-2">
                            In 8th Grade our children are deepened in their faith and prepare for the Sacrament of Confirmation. Our students are required to complete 15 hours of community service as part of the preparation of their confirmation.
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



                {/* <div className="flex flex-col mt-10 lg:flex-row justify-between"> */}
                <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 gap-x-10">
                    <div className="lg:col-span-3">


                        <p className="text-2xl mt-5 text-sky-600">
                            Our Promise to Protect - Pledge to Heal
                        </p>

                        <p className="text-lg mt-2">
                            The Diocese of Trenton is committed to the initiatives outlined in the U.S. Bishop's Charter for the Protection of Children and
                            Young People in regard to the reporting and investigation of sexual abuse allegations involving minors. If you have been sexually
                            abused as a minor by a member of the clergy or anyone representing the Catholic Church, or if you know of someone who was, you can report that abuse through the diocesan
                            Abuse Hotline: 1-888-296-2965 or via email at
                            <Link href={`mailto: ${"j.bedoya@jesusthegoodshepherd.org"}`}>
                                <a class="text-gray-600 text-lg underline"> abuseline@dioceseoftrenton.org</a>
                            </Link> . The Diocese of Trenton reports any allegations of sexual abuse to the appropriate law enforcement agencies. Anyone with an allegation is also encourage to provide that information to local law enforcement authorities.
                        </p>


                    </div>

                    <div className="lg:mt-5 lg:col-span-1">
                        <Image className="mt-6 rounded shadow"
                            src={"https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            //loader function generates the URL for the image by appending a root domain to the provided source
                            loader={() => "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            alt=""
                            width={320} height={240}
                        />
                    </div>
                </div>



                <p className="text-xl mt-8 text-sky-600">Contact:</p>

                <p className=" mt-8">
                    Name: "Maria Gimello - Director of Religious Education"
                </p>

                <p className=" mt-2">
                    Contact: "856.461.0100 ext. 209"
                </p>

                <p className="mt-2">
                    Email:<Link href={`mailto: ${"m.gimello@jesusthegoodshepherd.org"}`}>
                        <a class="text-gray-600 text-lg underline"> m.gimello@jesusthegoodshepherd.org</a>
                    </Link>
                </p>

                <p className=" mt-8">
                    Name: "Eneida Perez - Secretary of Religious Education"
                </p>

                <p className=" mt-2">
                    Contact: "856.461.0100 Ext. 210"
                </p>

                <p className="mt-2">
                    Email:<Link href={`mailto: ${"e.perez@jesusthegoodshepherd.org"}`}>
                        <a class="text-gray-600 text-lg underline"> e.perez@jesusthegoodshepherd.org</a>
                    </Link>
                </p>




            </div>





        </div>
    )
}

export default ReligiousEducation