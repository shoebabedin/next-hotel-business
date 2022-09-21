import Image from "next/image";
import Link from "next/link";
import { Bed } from "phosphor-react";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Destination = (props) => {
  const {
    addClass,
    heading,
    headingText,
    desc,
    slider,
    data,
    slider1,
    slider2,
  } = props;

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible(visible + 3);
  };

  const destinationSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <div className={`destination_part container mx-auto py-10 ${addClass}`}>
      <h2
        className={`text-2xl font-bold uppercase lg:text-3xl mb-4 text-[#0F0E0E] text-center ${headingText} `}
      >
        {heading}
      </h2>
      <p
        className={`font-normal text-sm text-[#0F0E0E] lg:text-base mb-10 opacity-50 text-center ${headingText}`}
      >
        {desc}
      </p>

      {slider?.length > 0 && (
        <Slider {...destinationSlider} className="destination_slider">
          {slider?.map((slide) => (
            <div
              key={slide.id}
              className="popular_item  text-[#0F0E0E]02 rounded-[5px] px-2"
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Link href={`/room/${slide.slug}/${slide.id}`}>
                <a>
                  <div className="img">
                    <Image
                      src={slide.img}
                      alt={slide.img}
                      className="rounded-[5px]"
                      width={470}
                      height={288}
                    />
                  </div>
                  <div className="py-6 px-[31px]">
                    <h4 className="font-bold text-sm mb-2 md:text-base">
                      <Link href={`/room/${slide.slug}/${slide.id}`}>
                        <a>{slide.title}</a>
                      </Link>
                    </h4>
                    <div className="bed_feet flex items-center justify-between mb-3 lg:mb-4">
                      <div className="bed flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          className="w-4 lg:w-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="#BE9E57"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M9.75 15.75V7.5h9.75a3 3 0 013 3v5.25M1.5 19.5v-15M1.5 15.75h21v3.75M9.75 7.5H1.5"
                          ></path>
                        </svg>
                        <p className="font-medium opacity-50 md:text-base text-sm text-[#0F0E0E]/80">
                          {slide.bed}
                        </p>
                      </div>
                      <div className="bed flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          className="w-4 lg:w-6"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="#BE9E57"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M1.016 1.825v19.35c0 .456.37.825.825.825h7.685c.456 0 .826-.37.826-.825V1.825A.825.825 0 009.526 1H1.841a.825.825 0 00-.825.825zM1.039 6.242h4.667"
                          ></path>
                          <path
                            stroke="#BE9E57"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M21.196 13.062l-19.35-.044a.825.825 0 00-.826.823l-.018 7.685a.825.825 0 00.823.827l19.35.045a.825.825 0 00.827-.823l.018-7.686a.825.825 0 00-.824-.827zM16.78 13.074l-.011 4.668"
                          ></path>
                        </svg>
                        <p className="font-medium opacity-50 md:text-base text-sm text-[#0F0E0E]/80">
                          {slide.feet}
                        </p>
                      </div>
                    </div>
                    <p className="flex items-center gap-2 font-medium md:text-base text-sm text-[#0F0E0E]/80 mb-4 lg:mb-6">
                      {slide.desc}
                    </p>
                    <Link href={`/room/${slide.slug}/${slide.id}`}>
                      <a className="bottom-2 p-2 font-medium lg:font-bold md:text-base text-sm text-center button border-[1px] border-[#BE9E57] rounded-[5px] text-[#BE9E57] hover:bg-[#BE9E57] hover:text-white block">
                        {slide.price}
                      </a>
                    </Link>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </Slider>
      )}

      {data?.length > 0 && (
        <>
          <div className="popular_grid grid grid-cols-1 lg:grid-cols-3 gap-6">
            {data?.slice(0, visible).map((item) => (
              <div
                key={item.id}
                className="popular_item mx-1 mr-6 text-[#0F0E0E]02 rounded-[5px]"
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <Link href={`/room/${item.slug}/${item.id}`}>
                  <a>
                    <div className="img relative w-full rounded-[5px] overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.img}
                        className="rounded-[5px]"
                        width={470}
                        height={288}
                      />
                    </div>
                    <div className="py-6 px-[31px]">
                      <h4 className="font-bold text-sm mb-2 md:text-base">
                        <Link href={`/room/${item.slug}/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h4>
                      <div className="bed_feet flex items-center justify-between mb-3 lg:mb-4">
                        <div className="bed flex items-center gap-2">
                          <Bed size={24} color="#BE9E57" weight="regular" />

                          <p className="font-medium opacity-50 md:text-base text-sm text-[#0F0E0E]/80">
                            {item.bed}
                          </p>
                        </div>
                        <div className="bed flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            className="w-4 lg:w-6"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="#BE9E57"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M1.016 1.825v19.35c0 .456.37.825.825.825h7.685c.456 0 .826-.37.826-.825V1.825A.825.825 0 009.526 1H1.841a.825.825 0 00-.825.825zM1.039 6.242h4.667"
                            ></path>
                            <path
                              stroke="#BE9E57"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M21.196 13.062l-19.35-.044a.825.825 0 00-.826.823l-.018 7.685a.825.825 0 00.823.827l19.35.045a.825.825 0 00.827-.823l.018-7.686a.825.825 0 00-.824-.827zM16.78 13.074l-.011 4.668"
                            ></path>
                          </svg>
                          <p className="font-medium opacity-50 md:text-base text-sm text-[#0F0E0E]/80">
                            {item.feet}
                          </p>
                        </div>
                      </div>
                      <Link href={`/room/${item.slug}/${item.id}`}>
                        <a className="bottom-2 p-2 font-medium lg:font-bold md:text-base text-sm text-center button border-[1px] border-[#BE9E57] rounded-[5px] text-[#BE9E57] hover:bg-[#BE9E57] hover:text-white block">
                          {item.price}
                        </a>
                      </Link>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center w-full mx-auto">
            <button
              className="py-2 px-5 border-none outline-0 cursor-pointer bg-[#be9e57] text-white text-center no-underline w-auto inline-block rounded-[30px] mt-[6%] mx-auto"
              onClick={showMoreItems}
            >
              {loading ? "Loading..." : " Show More"}
            </button>
          </div>
        </>
      )}
      {slider1?.length > 0 && (
        <Slider {...destinationSlider} className="destination_slider">
          {slider1?.map((slide) => {
            return (
              <div
                key={slide.id}
                className="popular_item rounded-[5px] mr-3 px-2"
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <Link href={`/room/${slide.slug}/${slide.id}`}>
                  <a>
                    <div className="img">
                      <Image
                        src={slide.img}
                        alt=""
                        className="rounded-[5px]"
                        width={460}
                        height={288}
                      />
                    </div>
                    <div className="py-6 px-[31px]">
                      <h4 className="font-bold text-sm mb-2 md:text-base">
                        <Link href={`/room/${slide.slug}/${slide.id}`}>
                          <a>{slide.title}</a>
                        </Link>
                      </h4>
                      <div className="bed_feet flex items-center justify-between mb-3 lg:mb-4">
                        <div className="bed flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            className="w-4 lg:w-6"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="#BE9E57"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M9.75 15.75V7.5h9.75a3 3 0 013 3v5.25M1.5 19.5v-15M1.5 15.75h21v3.75M9.75 7.5H1.5"
                            ></path>
                          </svg>
                          <p className="font-medium opacity-50 md:text-base text-sm text-[#0F0E0E]/80">
                            {slide.bed}
                          </p>
                        </div>
                        <div className="bed flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            className="w-4 lg:w-6"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="#BE9E57"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M1.016 1.825v19.35c0 .456.37.825.825.825h7.685c.456 0 .826-.37.826-.825V1.825A.825.825 0 009.526 1H1.841a.825.825 0 00-.825.825zM1.039 6.242h4.667"
                            ></path>
                            <path
                              stroke="#BE9E57"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M21.196 13.062l-19.35-.044a.825.825 0 00-.826.823l-.018 7.685a.825.825 0 00.823.827l19.35.045a.825.825 0 00.827-.823l.018-7.686a.825.825 0 00-.824-.827zM16.78 13.074l-.011 4.668"
                            ></path>
                          </svg>
                          <p className="font-medium opacity-50 md:text-base text-sm text-[#0F0E0E]/80">
                            {slide.feet}
                          </p>
                        </div>
                      </div>
                      <Link href={`/room/${slide.slug}/${slide.id}`}>
                        <a className="bottom-2 p-2 font-medium lg:font-bold md:text-base text-sm text-center button border-[1px] border-[#BE9E57] rounded-[5px] text-[#BE9E57] hover:bg-[#BE9E57] hover:text-white block">
                          {slide.price}
                        </a>
                      </Link>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </Slider>
      )}

      {slider2?.length > 0 && (
        <div className="room_slider max-w-[986px] mx-auto">
          <Slider {...destinationSlider} className="destination_slider">
            {slider2?.map((slide) => {
             return <div
                key={slide.id}
                className="slider_item px-2"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="popular_item !m-0 !p-0">
                  <div className="img relative mb-3">
                    <Image
                      src={slide.img}
                      alt=""
                      className="rounded-lg w-full"
                      width={330}
                      height={190}
                      layout="responsive"
                    />
                    <p className="absolute bottom-2 focus:outline-none focus:ring-0 bg-gradient-to-r from-[#be9e57] to-[#ddba52] rounded-r-[5px] rounded-r-[5px] rounded-b-[5px] rounded-l-[0px] text-white py-2 lg:py-2 px-5 lg:px-5 font-medium md:text-sm text-[10px] leading-[12px]">
                      $ {slide.price}
                    </p>
                  </div>
                  <h4 className="font-bold text-sm mb-2 md:text-base">
                    {slide.title}
                  </h4>
                  <div className="bed_feet flex items-center justify-between">
                    <div className="bed flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#000"
                          d="M9.75 1.5h4.5a.75.75 0 100-1.5h-4.5a.75.75 0 100 1.5zM12 3a9 9 0 109 9 9.01 9.01 0 00-9-9zm4.243 5.818L12.53 12.53a.75.75 0 01-1.06-1.06l3.712-3.713a.75.75 0 111.06 1.061z"
                        ></path>
                      </svg>

                      <p className="font-normal text-[8px] leading-[10px] opacity-50 md:text-sm">
                        {slide.time} Minutes
                      </p>
                    </div>
                    <div className="bed flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#000"
                          d="M11.999 7.479a.798.798 0 00-.007-.082l-.002-.02-.75-4.5a.75.75 0 10-1.48.246l.605 3.627h-1.74V3a.75.75 0 00-1.5 0v3.75h-1.74l.605-3.627a.75.75 0 10-1.48-.246l-.75 4.5-.002.02a.795.795 0 00-.007.082l-.001.02v.035a4.13 4.13 0 003.375 4.021V21a.75.75 0 001.5 0v-9.445a4.13 4.13 0 003.374-4.021V7.52L12 7.5l-.001-.021zM19.874 2.987a.724.724 0 00-.04-.23l-.004-.013-.006-.014a.785.785 0 00-.113-.198l-.02-.022a.727.727 0 00-.028-.032l-.022-.021a.737.737 0 00-.118-.092l-.027-.016a.705.705 0 00-.038-.02l-.026-.013a.735.735 0 00-.04-.016l-.028-.01a.734.734 0 00-.224-.04H19.112a.744.744 0 00-.23.041l-.013.004-.028.011-.01.004c-1.933.726-3.48 3.097-4.6 7.048a37.343 37.343 0 00-1.102 5.562.75.75 0 00.746.83h4.5V21a.75.75 0 101.5 0V3v-.013z"
                        ></path>
                      </svg>

                      <p className="font-normal text-[8px] leading-[10px] opacity-50 md:text-sm">
                        {slide.healthy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>;
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Destination;
