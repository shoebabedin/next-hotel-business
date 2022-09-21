import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BannerTab = (props) => {
  const  {event} = props;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dateCount = endDate - startDate;
  const diffInDays = Math.ceil(dateCount / (1000 * 3600 * 24) + 1);


  return (
    <>
      <div className="tab_part">
        <div className="rounded w-full mx-auto mt-4 rounded-lg">
          <div
            id="tab-contents"
            className="bg-white/[.09] p-2 lg:p-5 backdrop-blur-md rounded-lg"
          >
            <div id="first" className="p-5 bg-white rounded-lg">
              <div className="flex flex-wrap lg:flex-nowrap">
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
                      onChange={(date = Date) => setStartDate(date)}
                    />

                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        className="absolute right-2 z-10 bg-white"
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
                      onChange={(date = Date) => setEndDate(date)}
                    />

                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        className="absolute right-2 z-10 bg-white"
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
                <>

                {event}
                </>
                

                <div className="md:m-auto w-full lg:w-auto">
                  <label
                    htmlFor="email-address-icon"
                    className="block mb-2 text-sm font-normal text-slate-900 opacity-0"
                  >
                    Search
                  </label>

                  <button
                    type="submit"
                    className="focus:outline-none focus:ring-0 bg-gradient-to-r from-[#be9e57] to-[#ddba52] rounded-[10px] text-white font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center flex align-middle gap-2 items-center justify-center md:w-full"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                        fill="white"
                      />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
              <h6 className="hidden lg:block pt-7 pl-[9px] font-normal text-sm text-[#0F0E0E]/20 date">
                Total:
                <span className="font-medium text-base text-[#BE9E57] afterCount">
                  <input
                    className="calculated w-5 mx-1 roomquantity__input focus-visible:outline-none focus-visible:bg-white focus-visible:text-[rgb(15,14,14)]"
                    value={diffInDays}/>
                </span>
                <span className="font-medium text-base text-[#BE9E57]">
                  Days
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTab;
