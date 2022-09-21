import { Star } from "phosphor-react";
import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

let slider1 = [
  {
    icon: <FaQuoteRight />,
    desc: "Their service was very good.client's review is very important for us.we always Appreciate our client’s to give a honest feedback,so that we can improve service.",
  },
  {
    icon: <FaQuoteRight />,
    desc: "Their service was very good.client's review is very important for us.we always Appreciate our client’s to give a honest feedback,so that we can improve service.",
  },
  {
    icon: <FaQuoteRight />,
    desc: "Their service was very good.client's review is very important for us.we always Appreciate our client’s to give a honest feedback,so that we can improve service.",
  },
  {
    icon: <FaQuoteRight />,
    desc: "Their service was very good.client's review is very important for us.we always Appreciate our client’s to give a honest feedback,so that we can improve service.",
  },
  {
    icon: <FaQuoteRight />,
    desc: "Their service was very good.client's review is very important for us.we always Appreciate our client’s to give a honest feedback,so that we can improve service.",
  },
  {
    icon: <FaQuoteRight />,
    desc: "Their service was very good.client's review is very important for us.we always Appreciate our client’s to give a honest feedback,so that we can improve service.",
  },
];

let slider2 = [
  {
    name: "Marten couper",
    star: <FaQuoteRight />,
    title: "CEO,Red Bull",
  },
  {
    name: "Marten couper",
    star: <FaQuoteRight />,
    title: "CEO,Red Bull",
  },
  {
    name: "Marten couper",
    star: <FaQuoteRight />,
    title: "CEO,Red Bull",
  },
  {
    name: "Marten couper",
    star: <FaQuoteRight />,
    title: "CEO,Red Bull",
  },
  {
    name: "Marten couper",
    star: <FaQuoteRight />,
    title: "CEO,Red Bull",
  },
  {
    name: "Marten couper",
    star: <FaQuoteRight />,
    title: "CEO,Red Bull",
  },
];

const Clients = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <section className="client_part">
      <div className="container mx-auto px-2 py-10">
        <h2 className="text-center text-2xl lg:text-3xl font-bold uppercase mb-4 text-[#0F0E0E]">
          What our Guest’s say
        </h2>
        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          arrows={false}
          speed={4000}
          slidesToScroll={1}
          className="slider slider-single max-w-[729px] w-full mx-auto"
        >
          {slider1.map((item) => {
            return (
              <div key={item.id} className="text-center">
                <span className="text-center flex justify-center mb-2">
                  {item.icon}
                </span>
                <p className="font-medium text-sm text-center opacity-50">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </Slider>
        <Slider
          className="slider slider-nav max-w-[1076px] w-full mx-auto border-t border-[#be9e57] pt-12"
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={5}
          slidesToScroll={1}
          swipeToSlide={true}
          focusOnSelect={true}
          speed={1000}
          autoplay={true}
          centerPadding={"0px"}
          centerMode={true}
          arrows={false}
          responsive={[
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                centerMode: true,
                centerPadding: "20px",
              },
            },
          ]}
        >
          {slider2.map((item) => {
            return(<div key={item.id} className="opacity-50">
              <h3 className="text-sm font-bold capitalize text-[#0F0E0E] mb-px xl:text-lg">
                {item.name}
              </h3>
              <ul className="flex items-center gap-1 justify-center my-2">
                <li>
                  <Star size={17} color="#fdce1a" weight="fill" />
                </li>
                <li>
                    <Star size={17} color="#fdce1a" weight="fill" />
                </li>
                <li>
                    <Star size={17} color="#fdce1a" weight="fill" />
                </li>
                <li>
                    <Star size={17} color="#fdce1a" weight="fill" />
                </li>
                <li>
                    <Star size={17} color="#fdce1a" weight="fill" />
                </li>
              </ul>
              <p className="mt-px text-black/50 capitalize font-normal text-[10px] leading-[12px] xl:text-sm">
                {item.title}
              </p>
            </div>);
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
