import Link from "next/link";
import { Door, ForkKnife, TestTube, UsersThree } from "phosphor-react";
import React, { useEffect, useState } from "react";
import DetailsPageSlider from "/pages/Common/DetailsPageSlider/DetailsPageSlider";
import Subscription from "/pages/Common/Subscription/Subscription";
import Clients from "/pages/Home/Clients";

const Bar = () => {
  const [data1, setData1] = useState({});
  
  useEffect(() => {
    fetch("/json/pool.json")
      .then((res) => res.json())
      .then((data1) => setData1(data1));
  }, []);
  return (
    <div className="details_banner">
      <section className="hotel_banner mt-6">
        <div className="container mx-auto px-2 pb-2">
          <DetailsPageSlider slider={data1} />
          <div className="delux_part py-[42px]">
            <div className="container mx-auto px-2">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-10 lg:mr-28">
                  <h2 className="font-bold text-base lg:text-4xl text-[#151515] mb-[26px]">
                    Lounge bar
                  </h2>
                  <p className="font-normal text-sm lg:text-base text-[#0e0e0e]">
                    Fitness Center of
                    <strong className="lobster capitalize mx-1">
                      Hotel Grand Prince<span className="text-red-700">.</span>
                    </strong>
                    The Restaurant is commended for its phenomenal food and one
                    of a kind climate. The perfect lounge area highlights three
                    open studio kitchens, permitting you to partake in the
                    sights and hints of the culinary imaginativeness in plain
                    view.
                    <br />
                    <br />
                    The menu exhibits both Asian and European impacts, with an
                    enticing determination of exemplary top picks and
                    imaginative dishes for you to test. Cheddar specialists will
                    be attracted to The Wine and Cheese Cellar, housed in
                    five-meter-high glass dividers, where our learned staff can
                    acquaint you with some of New York&apos;s most noteworthy
                    culinary fortunes.
                  </p>
                  <ul className="flex items-start lg:items-center justify-start gap-2 lg:gap-28 mt-5 flex-col lg:flex-row">
                    <li className="check_in list-disc ml-5 col-span-12 lg:col-span-4">
                      <h4 className="font-medium text-xl text-black mb-4">
                        Open Hours
                      </h4>
                    </li>
                    <li className="check_out col-span-12 lg:col-span-8 ml-5">
                      <p className="mb-4 flex items-center justify-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="#BE9E57"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM10 10h4.375M13.094 13.094L10 10"
                          ></path>
                        </svg>

                        <span className="font-normal text-base text-[#0F0E0E] opacity-50 ml-4 lg:ml-2 block">
                          Breakfast: 7.00 am – 11.00 am (daily)
                        </span>
                      </p>
                    </li>
                  </ul>
                  <div className="question lg:basis-auto focus:outline-none focus:ring-0 bg-gradient-to-r from-[#be9e57] to-[#ddba52] rounded-r-[5px] rounded-r-[5px] rounded-b-[5px] rounded-l-[0px] text-white w-[180px] mt-8 lg:mt-16">
                    <div className="shadow rounded-md px-4 max-w-sm mx-auto">
                      <div className="flex items-center space-x-4 py-2">
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="#fff"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                              d="M19.04 15.903c0 .33-.074.669-.23.999-.156.33-.357.642-.623.935-.45.495-.944.852-1.504 1.082-.55.229-1.145.348-1.787.348-.935 0-1.934-.22-2.988-.67a16.103 16.103 0 01-3.154-1.814 26.352 26.352 0 01-3.006-2.567A26.042 26.042 0 013.19 11.22c-.752-1.045-1.357-2.09-1.797-3.126-.44-1.045-.66-2.044-.66-2.998 0-.623.11-1.219.33-1.769a4.22 4.22 0 011.055-1.53c.586-.578 1.228-.862 1.906-.862.257 0 .514.055.743.165.238.11.449.275.614.513l2.127 2.997c.165.23.284.44.366.642.083.193.129.385.129.56 0 .22-.065.44-.193.65-.12.21-.293.43-.513.65l-.697.725a.49.49 0 00-.147.367c0 .073.01.137.028.21.027.074.055.129.073.184.165.302.45.697.853 1.173.412.477.852.963 1.329 1.449.495.485.972.935 1.457 1.347.477.403.871.678 1.183.843.046.019.1.046.165.074a.633.633 0 00.23.036.504.504 0 00.375-.155l.697-.688c.229-.23.449-.403.66-.513a1.22 1.22 0 01.65-.193c.175 0 .358.037.56.12.201.082.412.201.641.357l3.034 2.154c.239.165.404.358.505.587.091.229.146.458.146.715z"
                            ></path>
                            <path
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M15.858 7.35c0-.55-.43-1.392-1.072-2.08-.587-.632-1.366-1.127-2.136-1.127M19.067 7.35A6.412 6.412 0 0012.65.934"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-1 space-y-6 py-0.5">
                          <p className="font-normal text-sm text-white leading-4">
                            Have a question?
                          </p>
                          <Link
                            className="text-white font-bold text-sm"
                            href="tel:3104372766"
                          >
                            310-437-2766
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-2">
                  <h2 className="font-semibold text-xl text-[#0F0E0E] mb-8">
                    Facilitics
                  </h2>
                  <ul>
                    <li className="flex items-center justify-start mb-7 gap-2 font-medium text-sm lg:text-xl text-[#0F0E0E] opacity-50 lg:opacity-100">
                      <UsersThree size={32} color="#BE9E57" />
                      1-2 Persons
                    </li>

                    <li className="flex items-center justify-start gap-2 mb-7 font-medium text-sm lg:text-xl text-[#0F0E0E] opacity-50 lg:opacity-100">
                      <Door size={32} color="#BE9E57" />
                      100 sqft room
                    </li>
                    <li className="flex items-center justify-start gap-2 mb-7 font-medium text-sm lg:text-xl text-[#0F0E0E] opacity-50 lg:opacity-100">
                      <ForkKnife size={32} color="#BE9E57" />
                      Breakfast
                    </li>
                    <li className="flex items-center justify-start mb-7 gap-2 font-medium text-sm lg:text-xl text-[#0F0E0E] opacity-50 lg:opacity-100">
                      <TestTube size={32} color="#BE9E57" />
                      Quality Control
                    </li>
                    <li className="flex items-center justify-start mb-7 gap-2 font-medium text-sm lg:text-xl text-[#0F0E0E] opacity-50 lg:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#BE9E57"
                          fillRule="evenodd"
                          d="M9.817 4.03l-1.244.026-.274.134a2.9 2.9 0 00-.568.41c-.516.482-.728 1.041-.73 1.924v.45l-.576.027c-.875.042-1.27.188-1.754.653a2.14 2.14 0 00-.024 3.088c.5.499.854.634 1.802.687l.551.03.002 6.738c0 3.737.02 7.01.045 7.348.042.573.055.632.23.986a2.761 2.761 0 001.534 1.345c.277.101.3.102 4.855.12 2.517.01 4.991 0 5.498-.023l.92-.04.413-.199a2.617 2.617 0 001.22-1.197c.16-.323.182-.412.227-.938l.049-.581.43-.03c1.094-.077 1.866-.578 2.328-1.51l.204-.413.03-3.03c.016-1.666.031-4.277.035-5.802l.006-2.773.506-.03c.936-.053 1.355-.203 1.796-.643.85-.85.9-2.166.116-3.038-.452-.502-.964-.71-1.843-.75l-.575-.024v-.288c0-.574-.09-1.066-.259-1.426a2.273 2.273 0 00-1.041-1.054c-.307-.144-.35-.152-1.094-.182-.908-.036-11-.032-12.815.005zM20.67 5.57c-.07.16-.08.702-.095 6.076l-.018 5.9H8.406l.013-5.783c.012-5.403.018-5.792.095-5.933a.762.762 0 01.623-.401c.128-.01 2.794-.022 5.923-.027l5.69-.008-.079.176zm2.567-.02c.26.172.345.39.37.958l.022.481H21.975v-.41c0-.524.063-.747.266-.938a.776.776 0 01.997-.091zM7 9.222v.827l-.481-.018c-.37-.014-.525-.04-.669-.115-.465-.24-.586-.849-.244-1.221.204-.221.442-.295.96-.297L7 8.396v.826zm18.965-.775c.597.128.83.798.439 1.262-.263.313-.206.306-2.41.306h-1.996l-.013-.783c-.012-.781-.012-.783.094-.803.246-.047 3.656-.031 3.886.018zm-2.36 8.547c-.015 4.154-.034 5.603-.077 5.767-.122.469-.745.863-1.305.828l-.225-.015-.012-6.064-.012-6.065h1.65l-.02 5.549zm-3.039 2.756v.798H8.408V18.953H20.566v.797zm-.008 4.117c-.014 1.722-.023 1.928-.098 2.064a1.622 1.622 0 01-.608.581l-.197.1-5.192-.02-5.192-.019-.213-.125c-.234-.137-.484-.397-.569-.592-.037-.084-.06-.719-.07-1.986l-.017-1.862.226-.018c.125-.01 2.863-.021 6.086-.026l5.86-.008-.016 1.912z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Towels
                    </li>
                  </ul>
                  <div className="share">
                    <p className="font-semibold text-base text-[#0F0E0E] opacity-50 mb-6">
                      Share
                    </p>
                    <ul className="flex justify-start items-center gap-4 share">
                      <li>
                        <Link href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="#0F0E0E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M10 6.875c0-1.718 1.445-3.148 3.164-3.125a3.125 3.125 0 012.828 1.875h2.757L16.226 8.15A9.992 9.992 0 016.249 17.5c-2.5 0-3.125-.937-3.125-.937s2.5-.938 3.75-2.813c0 0-5-2.5-3.75-9.375 0 0 3.125 3.125 6.875 3.75v-1.25z"
                            ></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="#0F0E0E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M10 13.125a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25z"
                            ></path>
                            <path
                              stroke="#0F0E0E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M13.438 2.813H6.561a3.75 3.75 0 00-3.75 3.75v6.875a3.75 3.75 0 003.75 3.75h6.875a3.75 3.75 0 003.75-3.75V6.561a3.75 3.75 0 00-3.75-3.75z"
                            ></path>
                            <path
                              fill="#0F0E0E"
                              d="M14.063 6.719a.781.781 0 100-1.563.781.781 0 000 1.563z"
                            ></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="#0F0E0E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M16.563 2.813H3.438a.625.625 0 00-.626.624v13.126c0 .345.28.625.626.625h13.124c.346 0 .625-.28.625-.625V3.438a.625.625 0 00-.625-.626zM9.375 8.75v5M6.875 8.75v5"
                            ></path>
                            <path
                              stroke="#0F0E0E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M9.375 10.938a2.187 2.187 0 114.375 0v2.812"
                            ></path>
                            <path
                              fill="#0F0E0E"
                              d="M6.875 7.031a.781.781 0 100-1.562.781.781 0 000 1.562z"
                            ></path>
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Clients />
      <Subscription />
    </div>
  );
};

export default Bar;
