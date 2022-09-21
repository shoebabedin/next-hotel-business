import { useRouter } from "next/router";
import { Door, PhoneCall, UsersThree, WifiHigh } from "phosphor-react";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Destination from "/components/Common/Destination/Destination";
import DetailsPageSlider from "/components/Common/DetailsPageSlider/DetailsPageSlider";
import Subscription from "/components/Common/Subscription/Subscription";

const RoomDetails = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [data, setData] = useState([]);
  const router = useRouter();
  const roomSlug = router.query.slug;

  const roomCategory = roomSlug?.[0];
  const roomId = roomSlug?.[1];

  useEffect(() => {
    fetch("/json/DestinationData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const singleEpisode = data?.find((item) => item.id == roomId);

  return (
    <div className="details_banner">
      <section className="hotel_banner mt-6">
        <div className="container mx-auto px-2 pb-2">
          <DetailsPageSlider slider={data} />
          {/* search part */}
          <div className="search_part relative -top-16">
            <div className="rounded w-full mx-auto mt-4 rounded-lg">
              <div className="bg-white rounded-r rounded-l shadow-xl">
                <div className="p-1 lg:p-4">
                  <div className="flex flex-wrap lg:flex-nowrap">
                    <span
                      id="double_date_input"
                      className="m-auto w-full mb-2 lg:mb-0 lg:mx-2 flex flex-wrap lg:flex-nowrap"
                    >
                      <div className="m-auto w-1/2 lg:w-full lg:mx-2 mb-4 lg:mb-0">
                        <label
                          htmlFor="email-address-icon"
                          className="block mb-2 text-sm font-normal text-slate-900"
                        >
                          CHECK-IN
                        </label>
                        <div className="relative">
                          <DatePicker
                            className="border text-sm rounded-lg block w-full p-2.5 appearance-none focus-visible:outline-none focus-visible:bg-white focus-visible:text-[rgb(15,14,14)] fromdate"
                            selected={startDate}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(date) => setStartDate(date)}
                          />

                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              classNameName="absolute right-2 z-10 bg-white"
                              viewBox="0 0 24 24"
                            >
                              <path fill="#fff" d="M0 0H24V24H0z"></path>
                              <path
                                stroke="#BE9E57"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M19.5 3.75h-15a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75zM16.5 2.25v3M7.5 2.25v3M4 8.25h16"
                              ></path>
                              <path fill="#BE9E57" d="M7 11H9V13H7z"></path>
                              <path fill="#BE9E57" d="M11 11H13V13H11z"></path>
                              <path fill="#BE9E57" d="M15 11H17V13H15z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="m-auto w-1/2 pl-1 lg:w-full lg:mx-2 mb-4 lg:mb-0">
                        <label
                          htmlFor="email-address-icon"
                          className="block mb-2 text-sm font-normal text-slate-900"
                        >
                          CHECK-OUT
                        </label>
                        <div className="relative">
                          <DatePicker
                            className="border text-sm rounded-lg block w-full p-2.5 appearance-none focus-visible:outline-none focus-visible:bg-white focus-visible:text-[rgb(15,14,14)] todate"
                            selected={endDate}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            onChange={(date) => setEndDate(date)}
                          />

                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              classNameName="absolute right-2 z-10 bg-white"
                              viewBox="0 0 24 24"
                            >
                              <path fill="#fff" d="M0 0H24V24H0z"></path>
                              <path
                                stroke="#BE9E57"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M19.5 3.75h-15a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75zM16.5 2.25v3M7.5 2.25v3M4 8.25h16"
                              ></path>
                              <path fill="#BE9E57" d="M7 11H9V13H7z"></path>
                              <path fill="#BE9E57" d="M11 11H13V13H11z"></path>
                              <path fill="#BE9E57" d="M15 11H17V13H15z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="md:mx-auto w-full lg:w-auto">
                        <label
                          htmlFor="email-address-icon"
                          className="block mb-2 text-sm font-normal text-slate-900"
                        >
                          Total Price
                        </label>
                        <button
                          type="submit"
                          className="bg-[#be9e57]/[.09] border-2 border-[#be9e57] text-[#be9e57] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center flex align-middle gap-2 items-center justify-center md:w-full"
                        >
                          $220.0/Night
                        </button>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* search part */}
          {/* delux part */}
          <div className="delux_part py-[42px]">
            <div className="container mx-auto px-2">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-10 lg:mr-28">
                  <div className="flex items-start justify-between flex-col lg:flex-row mb-[26px]">
                    <h2 className="font-bold text-base lg:text-4xl text-[#151515] mb-[26px]">
                      {singleEpisode?.title}
                    </h2>
                    <p className="font-bold text-base lg:text-[32px] text-[#be9e57]">
                      {singleEpisode?.price}
                    </p>
                  </div>
                  <p className="font-normal text-sm lg:text-base text-[#0e0e0e]">
                    Welcome to the main
                    <strong className="lobster capitalize mx-1">
                      Yourhotail<span className="text-red-700">.</span>
                    </strong>
                    get-away hotel on the planet! The Bears Den Resort Orlando
                    consolidates the smartest possible solution, mixing our
                    organized retreat homes with that a-list resort insight.
                    You&apos;ll approach top notch conveniences and be encircled
                    by staggering perspectives and greens and be simply miles
                    from probably the best amusement parks in the Orlando
                    region.
                    <br />
                    <br />
                    <br />
                    This Resort has facilities to fit any kind of visitor
                    gathering. All incorporate living and feasting regions, as
                    well as regular kitchens. Many homes likewise incorporate
                    most loved visitor elements like private pools, game rooms,
                    and that&apos;s just the beginning.
                  </p>
                  <ul className="grid grid-cols-12 mt-5">
                    <li className="check_in list-disc ml-5 col-span-12 lg:col-span-4">
                      <h4 className="font-medium text-base lg:text-xl text-black mb-4">
                        Check-in Time
                      </h4>
                      <p className="font-normal text-sm lg:text-base text-[#0F0E0E]/50 mb-4">
                        From 9:00 AM - anytime
                      </p>
                      <p className="font-normal text-sm lg:text-base text-[#0F0E0E]/50 mb-4">
                        Early check-in subject to accessibility
                      </p>
                    </li>
                    <li className="check_out list-disc col-span-12 lg:col-span-8 ml-5">
                      <h4 className="font-medium text-xl text-black mb-4">
                        Check-Out Time
                      </h4>
                      <p className="font-normal text-sm lg:text-base text-[#0F0E0E]/50 mb-4">
                        Check-out before noon
                      </p>
                      <p className="font-normal text-sm lg:text-base text-[#0F0E0E]/50 mb-4">
                        Express check-out
                      </p>
                    </li>
                  </ul>
                  <div className="question lg:basis-auto focus:outline-none focus:ring-0 bg-gradient-to-r from-[#be9e57] to-[#ddba52] rounded-[10px] text-white w-[180px] mt-8 lg:mt-16">
                    <div className="shadow rounded-md px-4 max-w-sm mx-auto">
                      <div className="flex items-center space-x-4 py-2">
                        <div className="">
                          <PhoneCall size={20} color="#fff" weight="light" />
                        </div>
                        <div className="flex-1 space-y-6 py-0.5">
                          <p className="font-normal text-sm text-white leading-4">
                            Have a question?
                          </p>
                          <a
                            className="text-white font-bold text-sm"
                            href="tel:3104372766"
                          >
                            310-437-2766
                          </a>
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
                      <UsersThree size={32} color="#BE9E57" weight="light" />
                      1-2 Persons
                    </li>
                    <li className="flex items-center justify-start mb-7 gap-2 font-medium text-sm lg:text-xl text-[#0F0E0E] opacity-50 lg:opacity-100">
                      <WifiHigh size={32} color="#BE9E57" weight="light" />
                      Free Wifi
                    </li>
                    <li className="flex items-center justify-start mb-7 gap-2 font-medium text-sm lg:text-xl text-[#0F0E0E] opacity-50 lg:opacity-100">
                      <Door size={32} color="#be9e57" weight="light" />
                      100 sqft room
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
                          stroke="#BE9E57"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M10.5 4v5M10.5 14.5V28M14 4l1 6a4.5 4.5 0 11-9 0l1-6M25.5 20h-7s1.5-14 7-16v24"
                        ></path>
                      </svg>
                      Breakfast
                    </li>
                    <li className="flex items-center justify-start mb-7 gap-2 font-medium text-sm lg:text-xl text-[#0F0E0E] opacity-50 lg:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="33"
                        fill="none"
                        viewBox="0 0 32 33"
                      >
                        <path
                          fill="#BE9E57"
                          fillRule="evenodd"
                          d="M10 2.348a3.412 3.412 0 00-2.588 2.488c-.103.414-.106.609-.106 6.601v6.175l-.28.133c-.544.26-.942.173-1.855-.403-.191-.12-.35-.214-.355-.21-.004.005-.19.317-.412.693-.467.792-.504.657.306 1.136.81.48.971.529 1.742.527.804-.002.985-.06 1.906-.609.815-.486.937-.534 1.334-.526.35.007.364.013 1.43.644.746.441.921.492 1.68.491.805-.002.986-.06 1.907-.609.816-.486.937-.534 1.334-.526.35.007.364.013 1.43.644.746.441.921.492 1.681.491.804-.002.985-.06 1.906-.609.816-.486.937-.534 1.334-.526.35.007.364.013 1.43.644.746.441.922.492 1.681.491.804-.002 1.004-.065 1.9-.603.564-.338.6-.37.545-.479-.033-.064-.214-.38-.4-.704l-.341-.588-.167.088c-.091.048-.312.18-.491.29-.458.286-.738.388-1.06.387-.32-.002-.55-.098-1.191-.494-.633-.392-1.058-.576-1.505-.652-.759-.13-1.388.03-2.31.589-.77.466-.992.558-1.352.558-.306 0-.485-.079-1.432-.631l-.466-.271.012-5.88.012-5.88.133-.267c.316-.634.873-.99 1.549-.99.69 0 1.247.363 1.54 1.006.135.294.141.348.157 1.44l.016 1.136H22.25V6.435c-.002-1.285-.06-1.656-.357-2.276-.269-.562-.9-1.217-1.424-1.475-.48-.237-1.084-.392-1.527-.392-.444 0-1.073.161-1.54.394-.511.256-1.147.919-1.412 1.473-.353.735-.356.773-.357 4.6v3.433H8.904l.015-3.487.014-3.487.13-.27c.52-1.083 1.923-1.333 2.746-.49.115.118.27.349.347.514.134.29.14.344.157 1.436l.017 1.135h1.594V6.43c0-.928-.018-1.182-.106-1.534-.244-.978-.871-1.79-1.712-2.214-.682-.345-1.457-.468-2.105-.334zm5.619 12.948l.014 1.435-.12.002c-.237.002-.838.262-1.41.609-.73.442-.965.538-1.315.537-.308 0-.59-.116-1.17-.481-.498-.313-.93-.526-1.244-.616-.29-.082-1.084-.104-1.32-.036l-.147.042v-2.956l3.349.014 3.349.014.014 1.436zm-6.395 6.907c-.43.067-.804.224-1.494.63-.796.47-.911.516-1.282.516-.364 0-.446-.031-1.106-.429-.343-.206-.514-.28-.552-.242-.099.102-.784 1.299-.763 1.334.046.076 1.076.674 1.378.8.442.184 1.293.232 1.791.101.346-.09.43-.133 1.431-.714.909-.527 1.183-.516 2.168.088.911.558 1.17.655 1.848.688.728.037 1.089-.057 1.788-.461 1-.58 1.111-.636 1.33-.677.384-.073.701.033 1.428.476.85.517 1.311.677 1.956.677.627 0 1.001-.109 1.637-.477 1.172-.679 1.187-.685 1.54-.685.393 0 .564.069 1.256.505.892.562 1.082.623 1.927.625.615.002.762-.015 1.002-.115.358-.148 1.514-.834 1.488-.883-.01-.02-.192-.338-.403-.707-.324-.566-.398-.663-.475-.62-.05.027-.278.163-.506.3-.578.351-.753.416-1.113.416-.355 0-.533-.075-1.334-.565a6.751 6.751 0 00-.789-.422 2.94 2.94 0 00-2.044.002c-.158.06-.562.272-.898.47-.797.47-.912.515-1.286.515-.355 0-.533-.075-1.334-.565a6.751 6.751 0 00-.789-.422 2.94 2.94 0 00-2.044.002c-.158.06-.562.272-.898.47-.795.468-.912.515-1.28.515-.374 0-.496-.05-1.306-.543-.9-.55-1.536-.718-2.272-.603zm-.303 5.333c-.32.088-.718.287-1.384.69-.94.569-1.242.563-2.216-.042-.266-.165-.496-.287-.512-.27-.016.016-.205.33-.42.698L4 29.281l.225.143c.752.48 1.112.66 1.531.768.825.214 1.557.072 2.457-.474.775-.47 1.004-.578 1.307-.61.378-.04.579.035 1.373.515 1.041.629 1.691.782 2.517.594.424-.097.697-.225 1.615-.76.6-.352.953-.434 1.333-.311.114.037.513.251.886.477 1.042.629 1.692.782 2.517.594.425-.097.697-.225 1.615-.76.6-.352.954-.434 1.333-.311.114.037.513.251.886.477.892.538 1.19.638 1.91.638.426 0 .641-.028.896-.115.33-.112 1.624-.834 1.599-.892-.088-.204-.772-1.362-.806-1.363-.024-.001-.276.138-.559.308-.995.6-1.276.598-2.268-.021-.97-.606-1.476-.766-2.244-.71-.55.04-.862.159-1.693.649-1.173.691-1.395.697-2.414.061-.97-.606-1.476-.766-2.244-.71-.55.04-.862.159-1.693.649-1.173.691-1.395.697-2.414.061-.608-.38-1.046-.585-1.413-.665-.38-.082-.988-.072-1.33.023z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Swimming Pool
                    </li>
                    <li className="flex items-center justify-start mb-7 font-medium text-sm lg:text-xl text-[#0F0E0E] opacity-50 lg:opacity-100">
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
                    <ul className="flex items-center justify-start gap-4">
                      <li>
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
                      </li>
                      <li>
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
                      </li>
                      <li>
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
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* delux part */}
        </div>
      </section>
      <Destination heading={"OTHERS ROOMS"} slider1={data} />
      <Subscription />
    </div>
  );
};

export default RoomDetails;
