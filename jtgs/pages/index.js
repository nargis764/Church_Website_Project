import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import heroPicture from "../public/SandDune.jpg";



export default function Home() {
  const router = useRouter();
  let imgURL =
    "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";


  return (
    <div className="w-screen">
      
      
      {/* Background image section */}
    <div className="">
      <Image
        className = ""
        src = {imgURL}
        //loader function generates the URL for the image by appending a root domain to the provided source
        //for locally stored images apparently we don't need the loader function
        loader = {() => imgURL}
        alt = ""
        // layout = "fill" 
        layout="responsive"
        //objectFit="cover"
        width={1500}
        height={340}
      />
      </div>



      {/* Grid Section */}

      <div className="grid grid-cols-1 text-center lg:grid-cols-3 gap-4">
        <p
          class="cursor-pointer"
          onClick={() =>
            router.push("https://www.usccb.org/resources/2022cal.pdf")
          }
        >
          Liturgical Calendar
        </p>

        <p
          class="cursor-pointer"
          onClick={() =>
            router.push("https://www.jppc.net/onlinebulletins/511template.pdf")
          }
        >
          Current Bulletin
        </p>

        <p
          class="cursor-pointer"
          onClick={() =>
            router.push(
              "https://drive.google.com/drive/folders/1kCpyRMakRBDVJFjr_v5fTY6-C5t4ALhK"
            )
          }
        >
          Archived Bulletins
        </p>

        <p
          class="cursor-pointer"
          onClick={() =>
            router.push("https://www.usccb.org/resources/2022cal.pdf")
          }
        >
          Mass Times
        </p>

        <p
          class="cursor-pointer"
          onClick={() =>
            router.push("https://www.jppc.net/onlinebulletins/511template.pdf")
          }
        >
          Register
        </p>

        <p
          class="cursor-pointer"
          onClick={() =>
            router.push(
              "https://drive.google.com/drive/folders/1kCpyRMakRBDVJFjr_v5fTY6-C5t4ALhK"
            )
          }
        >
          Catholic Charities
        </p>
      </div>
    </div>
  );
}
