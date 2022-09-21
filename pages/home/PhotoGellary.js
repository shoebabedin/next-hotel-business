import Image from "next/image";
import Slider from "react-slick";

let Gellary = [
  {
    img: "/assets/images/destinitaion/slider-1.webp",
    title: "East Terrace",
    desc: "We'll get from air terminal while you comfortable on your ride, We'll get from air terminal while you comfortable on your ride",
  },
  {
    img: "/assets/images/destinitaion/slider-2.webp",
    title: "East Terrace",
    desc: "We'll get from air terminal while you comfortable on your ride, We'll get from air terminal while you comfortable on your ride",
  },
  {
    img: "/assets/images/destinitaion/slider-3.webp",
    title: "East Terrace",
    desc: "We'll get from air terminal while you comfortable on your ride, We'll get from air terminal while you comfortable on your ride",
  },
  {
    img: "/assets/images/destinitaion/slider-1.webp",
    title: "East Terrace",
    desc: "We'll get from air terminal while you comfortable on your ride, We'll get from air terminal while you comfortable on your ride",
  },
];

const PhotoGellary = () => {
  
  const gellary = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <div className="destination_part">
      <div className="container mx-auto px-2 py-10">
        <h2 className="text-center text-2xl lg:text-3xl font-bold uppercase mb-10 text-[#0F0E0E]">
          pHOTO GALLERY
        </h2>

        {Gellary.length > 0 && 
        <Slider {...gellary} className="destination_slider">
          {Gellary.map((slide) => {
            return(<div
                key={slide.id}
                className="slider_item rounded-[5px] overflow-hidden relative max-h-[512px] h-full w-full focus-visible:outline-[0px] px-2"
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <div>
                  <Image
                    className="rounded-[5px]"
                    src={slide.img}
                    alt=""
                    // width={467}
                    // height={574}
                    width="100%"
                    height="100%"
                    layout="responsive"
                  />
                </div>
                <div className="overlay title-overlay bg-[#be9e57]/30 backdrop-blur-[5px] py-[32px] lg:py-[52px] px-[21px] lg:px-[32px] absolute">
                  <div className="text">
                    <h3 className="font-bold text-base lg:text-[22px] capitalize text-left flex items-center justify-between mb-6 text-white">
                      {slide.title}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.875 10.875H13.875"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.875 7.875V13.875"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.4438 16.4438L21 21.0001"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </h3>
                    <p className="text-white font-normal font-normal text-sm lg:text-base">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              </div>);
            
          })}
        </Slider>}
      </div>
    </div>
  );
};

export default PhotoGellary;
