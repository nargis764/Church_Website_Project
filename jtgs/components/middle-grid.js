import { useRouter } from "next/router"



const MiddleGrid = () => {
    const router = useRouter();


    return (
        
        <div className = "grid grid-cols-1 place-items-center bg-slate-200 py-10 lg:py-32 mx-16 lg:mx-36 mt-10 tracking-wider lg:grid-cols-3 gap-5">
    
            <p className = "cursor-pointer text-sm text-gray-500 font-semibold hover:text-blue-500 hover:scale-125 transition-all lg:text-2xl"
                onClick = {() =>
                    router.push("https://www.usccb.org/resources/2022cal.pdf")
                }
            >
                Liturgical Calendar
            </p>

            


            <p className = "cursor-pointer text-sm text-gray-500 font-semibold hover:text-blue-500 hover:scale-125 transition-all lg:text-2xl"
                onClick = {() =>
                    router.push("https://www.jppc.net/onlinebulletins/511template.pdf")
                }
            >
                Current Bulletin
            </p>



            <p className = "cursor-pointer text-sm text-gray-500 font-semibold hover:text-blue-500 hover:scale-125 transition-all lg:text-2xl"
                onClick = {() =>
                    router.push(
                        "https://drive.google.com/drive/folders/1kCpyRMakRBDVJFjr_v5fTY6-C5t4ALhK"
                    )
                }
            >
                Archived Bulletins
            </p>



            <p className = "cursor-pointer text-sm text-gray-500 font-semibold hover:text-blue-500 hover:scale-125 transition-all lg:text-2xl lg:mt-20"
                onClick = {() =>
                    router.push("/mass-times")
                }
            >
                Mass Times
            </p>



            <p
                className = "cursor-pointer text-sm text-gray-500 font-semibold hover:text-blue-500 hover:scale-125 transition-all lg:text-2xl lg:mt-20"
                onClick = {() =>
                    router.push("https://docs.google.com/document/d/1htsneE3xglAvJETB6jCG9QwJOxKEWz1hkosQ8cx4LOY/edit")
                }
            >
                Baptism
            </p>

            

            <p
                className = "cursor-pointer text-sm text-gray-500 font-semibold hover:text-blue-500 hover:scale-125 transition-all lg:text-2xl lg:mt-20"
                onClick = {() =>
                    router.push("/catholic-charities")
                }
            >
                Catholic Charities
            </p>
        </div>

        
    )
}

export default MiddleGrid