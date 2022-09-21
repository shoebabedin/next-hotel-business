
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import BannerTab from "./BannerTab";

const Banner = (props) => {
  const asPath = useRouter();
  const event = asPath.route === "/events";

  const {img, desc, title, btn, bg, children, className} = props;
  
  
  return (
    <section style={{backgroundImage: `url(${bg})`}} className={`${event && className} banner bg-cover bg-center bg-no-repeat pt-24 pb-5`} >
      <div className="container mx-auto px-2 pb-2">
        <div className="pb-4 text-center lg:text-left">
          <div className="slider_item mx-auto text-center">
          {!event && 
           <Image
           className="rounded-full mx-auto mt-20"
           alt="Next.js logo" width="160px" height="160px"
           src={img}
         />
          }
            <h2 className="text-white text-3xl lg:text-5xl font-extrabold capitalize mb-5 mt-5 lobster">
              {title}<span className="text-red-600">.</span>
            </h2>
           {
            desc &&  <p className="text-white text-sm font-light lg:text-3xl">
            {desc}
          </p>
           }
            {
              btn && <a
              className="text-white text-sm leading-[15px] lg:leading-[19px] font-normal capitalize mt-8 inline-block border-solid border-2 py-4 px-10 border-white rounded lg:text-base"
              href="room"
            >
              View Rooms
            </a>
            }
          </div>
        </div>
       {!event && <BannerTab event={children}/>
      }
      </div>
    </section>
  );
};

export default Banner;
