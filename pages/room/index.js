import React, { useEffect, useState } from "react";
import Banner from "/components/Common/Banner/Banner";
import Destination from "/components/Common/Destination/Destination";
import MultiRangeSlider from "/components/Common/MultiRangeSlider/MultiRangeSlider";


const Room = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/json/DestinationData.json')
    .then(response => response.json())
    .then(data => setData(data));
  
  }, [])


  return (
    <>
      <Banner bg={"/assets/images/hotel_location/banner.webp"} img={"/assets/images/banner/bannerLogo.webp"} title={"Hotel Grand Prince"}>
        <div className="m-auto w-full mb-2 lg:mb-0 lg:mx-2 relative">
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-normal text-slate-900"
          >
            PRICE RANGE
          </label>

          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
      </Banner>

      <Destination
        addClass={"popular_part"}
        heading={"aVAILABLE rOOMS"}
        headingText={"!text-left"}
        desc={
          "We Choose this rooms only for you.This rooms are popular by our clint’s choice."
        }
        data={data}
      ></Destination>
    </>
  );
};

export default Room;
