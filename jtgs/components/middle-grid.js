import { useRouter } from "next/router"



const MiddleGrid = () => {
    const router = useRouter();


    return (
        
        <div className = "grid grid-cols-1 place-items-center mt-10 bg-blue-100 py-20 lg:grid-cols-3 gap-5">
            
            <p className = "cursor-pointer font-mono text-sm text-gray-500 font-semibold lg:text-2xl"
                onClick = {() =>
                    router.push("https://www.usccb.org/resources/2022cal.pdf")
                }
            >
                Liturgical Calendar
            </p>

            


            <p className = "cursor-pointer font-mono text-sm text-gray-500 font-semibold lg:text-2xl"
                onClick = {() =>
                    router.push("https://www.jppc.net/onlinebulletins/511template.pdf")
                }
            >
                Current Bulletin
            </p>



            <p className = "cursor-pointer font-mono  text-sm text-gray-500 font-semibold lg:text-2xl"
                onClick = {() =>
                    router.push(
                        "https://drive.google.com/drive/folders/1kCpyRMakRBDVJFjr_v5fTY6-C5t4ALhK"
                    )
                }
            >
                Archived Bulletins
            </p>



            <p className = "cursor-pointer font-mono  text-sm text-gray-500 font-semibold lg:text-2xl lg:mt-10"
                onClick = {() =>
                    router.push("/mass-times")
                }
            >
                Mass Times
            </p>



            <p
                className = "cursor-pointer font-mono  text-sm text-gray-500 font-semibold lg:text-2xl lg:mt-10"
                onClick = {() =>
                    router.push("https://www.jppc.net/onlinebulletins/511template.pdf")
                }
            >
                Baptism
            </p>

            

            <p
                className = "cursor-pointer font-mono  text-sm text-gray-500 font-semibold lg:text-2xl lg:mt-10"
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