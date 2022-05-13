import Card from "../components/Card.js";
//import StaffData from "../components/StaffData.js";

const staffData = [
{
Id:1,    
Image: "https://www.jesusthegoodshepherd.org/wp-content/uploads/Staff/DSC_3521-1-scaled-300x214.jpg",
Name: "Rev. Jorge Antonio Bedoya - Pastor",
Contact: "856.461.0100 Ext. 212",
Email: "j.bedoya@jesusthegoodshepherd.org"
},

{
Id:2,    
Image: "https://www.jesusthegoodshepherd.org/wp-content/uploads/Staff/DSC_3429-1-scaled-300x227.jpg",
Name: "Rev. Rafael Esquen - Parochial Vicar",
Contact: "856.461.0100 ext. 211",
Email: "r.esquen@jesusthegoodshepherd.org"
},

{
Id:3,      
Image: "https://www.jesusthegoodshepherd.org/wp-content/uploads/Staff/Gary-Schmitt-150x150.png",
Name: "Mr. Gary Schmitt - Deacon",
Contact: "856.461.0100 ext. 202",
Email: "g.schmitt@jesusthegoodshepherd.org"
},

{
Id:4,     
Image: "https://jesusthegoodshepherd.org/wp-content/uploads/nophoto-male-150x150.png",
Name: "Mr. Richard Benner - Deacon",
Contact: "856.461.0100 Ext. 202",
Email: "r.benner@jesusthegoodshepherd.org"
},


{
Id:5, 
Image: "https://jesusthegoodshepherd.org/wp-content/uploads/nophoto-female-150x150.png",
Name: "Rowell Reyes - Bookkeeper",
Contact: "856.461.0100 ext. 207",
Email: ".reyes@jesusthegoodshepherd.org"
},

{
Id:6, 
Image: "https://www.jesusthegoodshepherd.org/wp-content/uploads/Staff/DSC_3114-scaled-300x205.jpg",
Name: "Sheryl Zoppina - Parish Secretary",
Contact: "856.461.0100 ext. 201",
Email: "s.zoppina@jesusthegoodshepherd.org"
},

{
Id:7, 
Image: "https://www.jesusthegoodshepherd.org/wp-content/uploads/Staff/DSC_3195-1-scaled-300x225.jpg",
Name: "Maria Gimello - Director of Religious Education",
Contact: "856.461.0100 ext. 209",
Email: "m.gimello@jesusthegoodshepherd.org"
},

{
Id:8, 
Image: "https://www.jesusthegoodshepherd.org/wp-content/uploads/Staff/DSC_3120-1-scaled-300x230.jpg",
Name: "Eneida Perez - Secretary of Religious Education",
Contact: "856.461.0100 Ext. 210",
Email: "e.perez@jesusthegoodshepherd.org"
},

{
Id:9, 
Image: "https://www.jesusthegoodshepherd.org/wp-content/uploads/Staff/DSC_3278-scaled-300x239.jpg",
Name: "Joel Malabuyoc - Maintenance/Cemetery",
}
]

const Staff = () => {
    return ( 
    <div class="p-4 max-w-5xl mx-auto grid gap-5 xs:grid-cols-2 md:grid-cols-4 ">

        {
            staffData.map((staff,index) => {
                return (
                    <Card 
                    key={staff.Id}
                    source = {staff.Image}
                    title = {staff.Name}
                    telephone = {staff.Contact}
                    email= {staff.Email}/>

                )                

            })
        }


    </div> 
    );
}

export default Staff;