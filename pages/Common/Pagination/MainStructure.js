import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "phosphor-react";
import React from "react";

const MainStructure = ({
  id,
  img,
  title,
  date,
  desc,
  checkTime,
  checkTimeList,
  call,
}) => {
  return (
    <div
      key={id}
      className="events-item max-w-7xl mx-auto flex items-start  justify-start gap-4 lg:gap-16 mb-6 flex-col lg:flex-row mb-10 lg:mb-16"
    >
      <div className="event-img">
        <Image
          className="skewElem rounded-[10px]"
          src={`/assets/images/events/${img}`}
          alt={title}
          width={416}
          height={413}
        />
      </div>
      <div className="event-ttl">
        <h2 className="font-semibold text-base lg:text-4xl text-[#151515]">
          {title}
        </h2>
        <span className="font-normal text-sm lg:text-sm text-[#312e49] opacity-50 mb-6 block">
          {date}
        </span>
        <p className="font-normal text-sm lg:text-base text-[#0F0E0E] opacity-50">
          {desc}
        </p>
        <ul className="mt-5">
          <li className="check_in list-disc ml-5 col-span-12 lg:col-span-4">
            <h4 className="font-medium text-sm lg:text-xl text-black mb-4">
              {checkTime}
            </h4>
          </li>

          <li className="check_out col-span-12 lg:col-span-8 ml-5">
            {checkTimeList.map((childItem) => (
              <p
                key={childItem.id}
                className="mb-2 lg:mb-4 flex items-center justify-start font-normal text-sm lg:text-base text-[#0F0E0E] opacity-50"
              >
                {childItem.text}
              </p>
            ))}
          </li>
        </ul>
        <div className="question lg:basis-auto focus:outline-none focus:ring-0 bg-gradient-to-r from-[#be9e57] to-[#ddba52] rounded-[10px] text-white w-44 mt-3 lg:mt-11">
          <div className="shadow rounded-md px-4 max-w-sm mx-auto">
            <div className="flex items-center space-x-4">
              <div className="">
                <PhoneCall size={20} color="#fff" weight="bold" />
              </div>
              <div className="flex-1 space-y-6 py-0.5">
                <p className="font-normal text-sm text-white leading-4">
                  For Reservation
                </p>
                <Link
                  className="text-white font-bold text-sm"
                  href={`tel:${call}`}
                >
                  <a>{call}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainStructure;
