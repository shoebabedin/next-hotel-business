import { useEffect, useState } from "react";
import Banner from "./Common/Banner/Banner";
import Destination from "./Common/Destination/Destination";
import Subscription from "./Common/Subscription/Subscription";
import Additional from "./Home/Additional";
import Clients from "./Home/Clients";
import Facilities from "./Home/Facilities";
import PhotoGellary from "./Home/PhotoGellary";




export default function Home() {
  const [person, setPerson] = useState(0);
  const [data, setData] = useState({});

useEffect(() => {
  fetch('/json/DestinationData.json')
  .then(response => response.json())
  .then(data => setData(data));

}, [])

  
  // increment & decrement
  const decrement = () => {
    if (person > 0) {
      setPerson(person - 1);
    }
  };
  const increment = () => {
    setPerson(person + 1);
  };

  return (
    <>
      <Banner
        bg="/assets/images/banner/banner.webp"
        img="/assets/images/banner/bannerLogo.webp"
        title="Hotel Grand Prince"
        desc="Save up to 30% on your stay"
        btn={true}
      >
        <div className="m-auto w-full lg:mb-0 lg:w-full lg:mx-2">
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-normal text-slate-900"
          >
            Person
          </label>
          <div className="border text-sm rounded-lg block w-full p-2.5 focus-visible:outline-none focus-visible:bg-white focus-visible:text-[rgb(15,14,14)] appearance-none flex items-center justify-between">
            <button
              onClick={decrement}
              className="decrement_btn border rounded-full w-6 h-6 flex items-center justify-center w-6 h-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="2"
                fill="none"
                viewBox="0 0 12 2"
              >
                <path
                  stroke="#BE9E57"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M1.188 1h9.624"
                ></path>
              </svg>
            </button>
            <span className="mx-2 flex">
              <input
                type="text"
                className="roomquantity__input w-5 mr-1.5 focus-visible:outline-none focus-visible:bg-white focus-visible:text-[rgb(15,14,14)]"
                value={person}
              />
              Person
            </span>
            <button
              onClick={increment}
              className="increment_btn border rounded-full w-6 h-6 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 12 12"
              >
                <path
                  fill="#BE9E57"
                  fillRule="evenodd"
                  d="M5.063 10.813a.75.75 0 001.5 0V6.75h4.062a.75.75 0 000-1.5H6.562V1.187a.75.75 0 00-1.5 0V5.25H1a.75.75 0 000 1.5h4.063v4.063z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </Banner>
      <Facilities />
      <Destination
        heading={"OUR ROOM CATEGORY"}
        desc={`We have world’s class hotel with top class facilite,Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        slider={data}
      />
      <Additional />
      <PhotoGellary />
      <Clients />
      <Subscription />
    </>
  )
}
