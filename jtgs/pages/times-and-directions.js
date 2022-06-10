import React from 'react'



const Directions = () => {
    

    return (
        <div className="px-10 my-20 grid gap-x-32 lg:px-32 lg:grid-cols-2">
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.504241280067!2d-74.92703908467888!3d40.06416317940775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c14c8bc39ef5b9%3A0x6e26d12b00db095c!2s805%20Warren%20St%2C%20Beverly%2C%20NJ%2008010!5e0!3m2!1sen!2sus!4v1654193569369!5m2!1sen!2sus" width="600" height="450" className="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <p className="text-lg font-bold mt-5">
                    Our Location
                </p>

                <p className="text-lg">
                    Jesus, The Good Shepherd Parish at St. Joseph's Church
                </p>

                <p className="text-lg">
                    805 Warren St, Beverly, NJ 08010
                </p>
            </div>

            <div>
                <p className="text-xl font-bold">
                    Mass Schedule  /  Horario De Las Misas  /  Horario De Missa
                </p>

                <p className="text-lg font-semibold mt-5">
                    Saturday Evening / Sabado
                </p>
                <p className="text-lg">
                    5:00 pm
                </p>
                <p className="text-lg">
                    7:30 pm in Portugues
                </p>

                <p className="text-lg font-semibold mt-5">
                    Sunday / Domingo
                </p>
                <p className="text-lg">
                    8:00 am
                </p>
                <p className="text-lg">
                    10:00 am
                </p>
                <p className="text-lg">
                    12:00 pm  en Espanol
                </p>

                <p className="text-lg font-semibold mt-5">
                    Weekday Mass  /  Misa diaria  /  Missa diaria
                </p>
                <p>
                    Weekday Mass is in Church 9:00 am.
                </p>

                <p className="text-lg font-semibold mt-5">
                    Holy Hour
                </p>
                <p className="text-lg">
                    Tuesday, 7 pm Holy Hour in English
                </p>
                <p className="text-lg">
                    Miércoles, 7 pm Hora Santa en Español
                </p>
                <p className="text-lg">
                    Quinta-feria, 8 pm Grupo de oração em Português
                </p>

                <p className="text-lg font-semibold mt-5">
                    Holy Days Mass Schedule
                </p>
                <p className="text-lg">
                    7:00 pm Vigil Mass
                </p>
                <p className="text-lg">
                    Holy Days 9:00 am and 7:00 pm
                </p>

            </div>
        </div>
    )
}

export default Directions