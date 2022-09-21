import Image from "next/image";






const payment = [
    {
        img: '/assets/images/footer/visa.webp',
    },
    {
        img: '/assets/images/footer/mastercard.webp',
    },
    {
        img: '/assets/images/footer/american-express.webp',
    },
    {
        img: '/assets/images/footer/paypal.webp',
    },
]

const Footer = () => {
  return (
    <footer className="footer py-10 text-[#0F0E0E] bg-[#0F0E0E]">
      <div className="container mx-auto px-2 grid grid-cols-12 gap-6">
        <div className="logo lg:col-span-4 md:col-span-12 col-span-12">
      
            <div className="mb-8 flex items-center justify-center lg:justify-start">
              <Image
              alt="Hotel business"
              src="/assets/images/footer/foter-logo.webp" width={220} height={70}
                        />
            </div>
        
        </div>
        <div className="footer_item text-center lg:text-left col-span-12 lg:col-span-2 md:col-span-3">
          <h3 className="font-semibold text-base text-[#BE9E57] mb-4 lg:mb-8">
            QUICK ACCESS
          </h3>
          <ul className="flex items-center md:items-start justify-center flex-col gap-3">
            <li>
              <a href="home" className="font-medium text-sm text-white opacity-60 hover:opacity-100 ease-linear capitalize"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="room"
                className="font-medium text-sm text-white opacity-60 hover:opacity-100 ease-linear capitalize"
              >
                Rooms
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-sm text-white opacity-60 hover:opacity-100 ease-linear capitalize"
              >
                Tearms &amp; Condition
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_item text-center lg:text-left col-span-12 lg:col-span-2 md:col-span-3">
          <h3 className="font-semibold text-base text-[#BE9E57] mb-4 lg:mb-8">
            ADDRESS
          </h3>
          <p className="font-medium text-sm text-white capitalize">
            706 Campfire Ave. Meriden, <br className="hidden lg:block" />
            CT 06450
          </p>
        </div>
        <div className="footer_item text-center lg:text-left col-span-12 lg:col-span-2 md:col-span-3">
          <h3 className="font-semibold text-base text-[#BE9E57] mb-4 lg:mb-8">
            RESERVATION
          </h3>
          <ul className="flex items-center md:items-start justify-center flex-col gap-3">
            <li>
              <a
                href="tel:0880099887744"
                className="font-medium text-sm text-white capitalize"
              >
                (+088) 0099887744
              </a>
            </li>
            <li>
              <a
                href="mailto:support@example.com"
                className="font-medium text-sm text-white capitalize"
              >
                support@example.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_item text-center lg:text-left col-span-12 lg:col-span-2 md:col-span-3">
          <h3 className="font-semibold text-base text-[#BE9E57] mb-[57px]">
            FOLLOW US
          </h3>
          <ul className="flex items-center justify-center lg:justify-start gap-[30px]">
            <li>
            <svg
      xmlns='http://www.w3.org/2000/svg'
      width='26'
      height='26'
      fill='none'
      className='cursor-pointer'
      viewBox='0 0 26 26'
    >
      <path
        fill='#fff'
        d='M26 13a13.037 13.037 0 01-11.438 12.912.512.512 0 01-.562-.5V16h3a1 1 0 001-1.063A1.025 1.025 0 0016.962 14H14v-3a2 2 0 012-2h2a1 1 0 001-1.063A1.025 1.025 0 0017.962 7H16a4 4 0 00-4 4v3H9a1.002 1.002 0 00-1 1.062A1.025 1.025 0 009.037 16H12v9.412a.5.5 0 01-.55.5c-6.6-.8-11.7-6.537-11.437-13.4A13 13 0 0126 13z'
      ></path>
    </svg>
            </li>
            <li>
            <svg
      xmlns='http://www.w3.org/2000/svg'
      width='26'
      height='26'
      fill='none'
      className='cursor-pointer'
      viewBox='0 0 26 26'
    >
      <path
        fill='#fff'
        d='M23.5.5h-21a2 2 0 00-2 2v21a2 2 0 002 2h21a2 2 0 002-2v-21a2 2 0 00-2-2zM9 19a1 1 0 11-2 0v-8a1 1 0 112 0v8zM8 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM20 19a1 1 0 01-2 0v-4.5a2.5 2.5 0 00-5 0V19a1 1 0 01-2 0v-8a1 1 0 011.975-.225A4.5 4.5 0 0120 14.5V19z'
      ></path>
    </svg>
            </li>
            <li>
            <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      className='cursor-pointer'
      viewBox='0 0 32 32'
    >
      <path
        fill='#fff'
        d='M16 3A13 13 0 004.6 22.25L3.538 26A1.988 1.988 0 006 28.462L9.75 27.4A13 13 0 1016 3zm3.012 21H19A11.012 11.012 0 018 12.988 4.5 4.5 0 0112.5 8.5a1.863 1.863 0 011.613.938L15.575 12a1.975 1.975 0 01-.025 2.012l-.888 1.488a5.175 5.175 0 001.838 1.837l1.488-.887A1.975 1.975 0 0120 16.425l2.563 1.462A1.863 1.863 0 0123.5 19.5a4.5 4.5 0 01-4.488 4.5z'
      ></path>
      <path
        fill='#fff'
        d='M17.063 19.337a1.013 1.013 0 01-.925.05 6.926 6.926 0 01-3.526-3.524 1.012 1.012 0 01.05-.925l1.175-1.95-1.412-2.488A2.488 2.488 0 0010 12.988 9 9 0 0019 22h.012a2.488 2.488 0 002.488-2.425l-2.488-1.412-1.95 1.174z'
      ></path>
    </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-2 mt60 px-2">
        <div className="tiny_footer flex items-center justify-between mt-12 flex-wrap border-t-[1px] border-solid border-[#FFFFFF33] pt-7 gap-6 flex-col md:flex-row">
          <p className="text-white font-normal text-sm text-[#9A9EA6]">
            &copy; 2000-2021, All Rights Reserved
          </p>
          <ul className="flex items-center gap-6 flex-wrap justify-center mb-4 md:mb-0">
            {
                payment.map(item => 
                    {<li>
                        <a href="home" className="text-white font-normal text-sm text-[#9A9EA6]">
                          <Image alt={item.img}  src={item.img} width={1200} height={400} />
                        </a>
                    </li>}
                    )
            }
            
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
