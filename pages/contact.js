import Head from "next/head";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="delux_part py-[50px]">
      <Head>
          <title>Contact us</title>
        </Head>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <h2 className="font-bold text-center text-2xl lg:text-4xl text-[#151515] mb-[40px] lg:mb-[150px]">
              Contact us
            </h2>
            <div className="contact_part flex items-center justify-between gap-4 mx-5 flex-col lg:flex-row">
              <div className="form w-full lg:w-2/4">
                <form className="">
                  <div className="grid gap-0 lg:gap-6 mb-6 lg:grid-cols-6">
                    <div className="col-span-12">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="border text-sm rounded-lg block w-full p-2.5 focus-visible:outline-none focus-visible:bg-white focus-visible:text-[rgb(15,14,14)]"
                        placeholder="Enter your name..."
                        required=""
                      />
                    </div>
                    <div className="col-span-12">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="border text-sm rounded-lg block w-full p-2.5 focus-visible:outline-none focus-visible:bg-white focus-visible:text-[rgb(15,14,14)]"
                        placeholder="Your email address..."
                        required=""
                      />
                    </div>

                    <div className="col-span-12">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Messages
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm rounded-lg border focus-visible:outline-none focus-visible:bg-white focus-visible:text-[rgb(15,14,14)]"
                        placeholder="Enter your messages..."
                      ></textarea>
                    </div>
                    <div className="col-span-12">
                      <button
                        type="submit"
                        className="focus:outline-none focus:ring-0 bg-gradient-to-r from-[#be9e57] to-[#ddba52] rounded-[10px] text-white font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-8"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="map w-full lg:w-2/4 max-w-lg">
                <Image src="/assets/images/contact/location-map.webp" width={494} height={376} alt="" />
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
