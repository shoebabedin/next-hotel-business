import React from "react";

const Subscription = () => {
  return (
    <section className="visitors_part pt-[93px] pb-[79px] bg-center bg-no-repeat bg-cover bg-visitor">
      <div className="max-w-[1120px] mx-auto px-2">
        <div className="columns-1 lg:columns-2">
          <div className="left">
            <h2 className="text-white font-bold text-2xl leading-[39px] capitalize mb-5 text-center lg:text-left">
              Join our newsletter
            </h2>
            <p className="text-white font-normal text-sm text-center lg:text-left lg:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              aenean mauris blandit ac massa fames odio.
            </p>
          </div>
          <div className="subcribe">
            <div className="m-auto">
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-sm font-normal text-slate-900 opacity-0"
              >
                DESTINATION
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email-address-icon"
                  className="border text-sm rounded-lg block w-full pl-8 py-3 focus-visible:outline-none focus-visible:bg-white focus-visible:text-[rgb(15,14,14)]"
                  placeholder="Enter your mail"
                />
                <div className="absolute inset-y-0 right-0 flex items-center p-1 cursor-pointer z-10">
                  <button className="focus:outline-none focus:ring-0 bg-gradient-to-r from-[#be9e57] to-[#ddba52] rounded-[10px] text-white py-2 px-6 cursor-pointer z-10">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
