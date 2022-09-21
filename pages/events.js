import React from "react";
import Banner from "/components/Common/Banner/Banner";
import MainPage from "/components/Common/Pagination/MainPage";


const Events = () => {


  return (
    <>
      <Banner
        bg={"/assets/images/events/event_banner.webp"}
        title="Hotel Grand Prince"
        className="pt-[100px] pb-[100px]"
      />
      <div className="delux_part my-[80px]">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="event_part">
                <MainPage/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};




export default Events;
