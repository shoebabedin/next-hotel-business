import React, { useEffect, useState } from "react";

const TopNav = (props) => {
  const [close, setClose] = useState(true);

  
  const [countdownDate, setCountdownDate] = useState(
    new Date("12/31/2022").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  const handleClose = (e) => {
    setClose(false);
   }
  return (
    <>
    {close &&
     
       <section className="top_nav bg-black py-2">
          <div className="container mx-auto px-2">
            <div className="flex flex-row justify-between items-center">
              <div className="md:basis-1 close">
                <a onClick={handleClose} href="#" className="w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M17.303 18.01a.5.5 0 00.707-.707L12.707 12l5.303-5.303a.5.5 0 10-.707-.708L12 11.293 6.697 5.99a.5.5 0 00-.708.707L11.293 12l-5.304 5.303a.5.5 0 10.707.707L12 12.707l5.303 5.303z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="md:basis-auto flex justify-between items-center gap-1">
                <p className="text-white text-sm font-bold lg:mr-6">
                  50% OFF ON BLACK FRIDAY
                </p>
                <div className="counting flex flex-row justify-between items-center">
                  <div className="text-[#0F0E0E] text-sm font-medium bg-white px-1 lg:px-2 py0.5 lg:py-1 rounded-md">
                    {state.days || "0"}
                  </div>

                  <span className="text-white text-sm not-italic font-normal mx-1">
                    :
                  </span>
                  <div
                    className="text-[#0F0E0E] text-sm font-medium bg-white px-1 lg:px-2 py0.5 lg:py-1 rounded-md"
                    id="hours"
                  >
                    {state.hours || "0"}
                  </div>
                  <span className="text-white text-sm not-italic font-normal mx-1">
                    :
                  </span>
                  <div className="text-[#0F0E0E] text-sm font-medium bg-white px-1 lg:px-2 py0.5 lg:py-1 rounded-md">
                    {state.minutes || "0"}
                  </div>
                  <span className="text-white text-sm not-italic font-normal mx-1">
                    :
                  </span>
                  <div className="text-[#0F0E0E] text-sm font-medium bg-white px-1 lg:px-2 py0.5 lg:py-1 rounded-md">
                    {state.seconds || "0"}
                  </div>
                </div>
              </div>
              <div className="basis-1 mt-1 hidden md:block">
                <ul className="flex justify-between items-center gap-6">
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M10 6.875c0-1.718 1.445-3.148 3.164-3.125a3.125 3.125 0 012.828 1.875h2.757L16.226 8.15A9.992 9.992 0 016.249 17.5c-2.5 0-3.125-.937-3.125-.937s2.5-.938 3.75-2.813c0 0-5-2.5-3.75-9.375 0 0 3.125 3.125 6.875 3.75v-1.25z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M10 13.125a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25z"
                        ></path>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M13.438 2.813H6.561a3.75 3.75 0 00-3.75 3.75v6.875a3.75 3.75 0 003.75 3.75h6.875a3.75 3.75 0 003.75-3.75V6.561a3.75 3.75 0 00-3.75-3.75z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M14.063 6.719a.781.781 0 100-1.563.781.781 0 000 1.563z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M16.563 2.813H3.438a.625.625 0 00-.626.624v13.126c0 .345.28.625.626.625h13.124c.346 0 .625-.28.625-.625V3.438a.625.625 0 00-.625-.626zM9.375 8.75v5M6.875 8.75v5"
                        ></path>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9.375 10.938a2.187 2.187 0 114.375 0v2.812"
                        ></path>
                        <path
                          fill="#fff"
                          d="M6.875 7.031a.781.781 0 100-1.562.781.781 0 000 1.562z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default TopNav;
