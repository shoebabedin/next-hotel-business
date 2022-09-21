import Link from "next/link";


let additionalData = [
  {
    icon: "cookingPot",
    title: "Food Corner",
    link: "/food-corner",
  },
  {
    icon: "barbell",
    title: "Fitness Center",
    link: "/fitness",
  },
  {
    icon: "frame-39413",
    title: "Pool",
    link: "/pool",
  },
  {
    icon: "storefront",
    title: "Lounge bar",
    link: "/bar",
  },
];

const Additional = () => {
  return (
    <section className="additional_part bg-[#222222] mt-10 mb-10">
      <div className="container px-2 py-10 overflow-x-hidden">
        <div className="grid grid-cols-12 gap-5">
          <div className="additional_item w-full col-span-12 lg:col-span-4">
            <h2 className="font-semibold lg:font-bold text-2xl lg:text-2xl xl:text-4xl text-white mb-8 text-center lg:text-left">
              Additional Services
            </h2>
            <p className="font-normal text-sm lg:text-sm text-white mb-8 opacity-50 text-center lg:text-left">
              The best costs for your loosening up excursion. The utanislen quam
              nestibulum ac quame odion elementum sceisue the aucan.
            </p>
            <div className="call flex items-center justify-center lg:justify-start">
              <div className="mr-2 lg:mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="27"
                  fill="none"
                  className="w-6"
                  viewBox="0 0 26 27"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7.86 13.583a10.924 10.924 0 005.097 5.083 1.046 1.046 0 001.032-.079l3.267-2.182a1.034 1.034 0 01.993-.091l6.115 2.626a1.032 1.032 0 01.628 1.085 6.273 6.273 0 01-6.22 5.475A17.772 17.772 0 011 7.728a6.272 6.272 0 015.475-6.22 1.032 1.032 0 011.085.628l2.626 6.128a1.045 1.045 0 01-.078.98l-2.182 3.32a1.045 1.045 0 00-.066 1.019v0z"
                  ></path>
                </svg>
              </div>
              <div className="call_content">
                <p className="mb-1 font-normal text-sm lg:text-sm text-white opacity-50">
                  For resarvation
                </p>
                <Link href="callto:310-437-2766">
                  <a className="font-bold text-sm lg:text-base text-white">
                    310-437-2766
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-12 gap-6 flex-col lg:flex-row">
              {additionalData?.map(({ link, icon, title }) => {
                return (
                  <div
                    key={icon}
                    className="col-span-12 md:col-span-6 lg:col-span-3 additional_item border-x border-y p-7 md:p-4 rounded-xl text-center lg:text-left hover"
                  >
                    <Link href={`${link}`}>
                      <>
                        <a>
                          <div className="icon flex items-center justify-center lg:justify-start">
                            <iframe
                              className={`${icon} w-auto h-10 bg-no-repeat bg-center lg:bg-left bg-auto`}
                            />
                          </div>
                        </a>
                        <Link href={`${link}`}>
                          <a>
                            <h2 className="font-bold text-base lg:text-base text-white mt-3 mb-5 ">
                              {title}
                            </h2>
                          </a>
                        </Link>
                        <Link passHref href={`${link}`}>
                          
                            <button className="font-normal text-sm lg:text-base text-white/50 flex  lg:justify-start justify-center items-center gap-2 w-full capitalize see_details">
                              see Details
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
                                  d="M3.125 10h13.75M14.063 7.188L16.875 10l-2.813 2.813"
                                ></path>
                              </svg>
                            </button>
                        
                        </Link>
                      </>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Additional;
