import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import heroPicture from "../public/SandDune.jpg";

export default function Home() {
  const router = useRouter();
  //let imgURL = "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  return (
    <div className="">

      {/* Background image section */} 


      {/* <Image
        className="w-96"
        src={heroPicture}
        //loader function generates the URL for the image by appending a root domain to the provided source
        //for locally stored images apparently we don't need the loader function
        // loader={() => heroPicture}
        alt=""
        //objectFit="cover"
        layout="responsive"
        // width={1250} height={340}
      /> */}


      {/* when using "img" tag, locally stored image is not  being loaded */}
      {/* images from url loads but has the same problem in terms of responsiveness */}
      <img
        className = "w-full"
        src = {heroPicture}
        alt = "White Sands"                
      />


      {/* Grid Section */}

      <div className="block">
        
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
                  router.push(
                    "https://www.jppc.net/onlinebulletins/511template.pdf"
                  )
                }
              >
                Bulletin
              </p>
          
      </div>

      <div class="px-40 pt-5">
        <div class="flex -mx-20">
          <div class="w-1/3 px-20">
            <div class="h-40">Mass Times</div>
          </div>
          <div class="w-1/3 px-20">
            <div class="h-40">Register</div>
          </div>
          <div class="w-1/3 px-20">
            <div class="h-40">Catholic Charities??</div>
          </div>
        </div>
      </div>
    </div>
  );
}
