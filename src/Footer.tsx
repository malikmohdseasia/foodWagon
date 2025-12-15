import SOCIAL from "./assets/footer/Icons.png";
import EMAIL from "./assets/footer/envelope.png";
import { footSymbolLeft } from "./assets/Icons";
import { footSymbol } from "./assets/Icons";

const Footer = () => {
  const footerItems = [
    { title: "San Francisco" },
    { title: "Miami" },
    { title: "San Diego" },
    { title: "East Bay" },
    { title: "Long Beach" },
    { title: "Los Angeles" },
    { title: "Washington DC" },
    { title: "Seattle" },
    { title: "Portland" },
    { title: "Nashville" },
    { title: "New York City" },
    { title: "Orange County" },
    { title: "Atlanta" },
    { title: "Charlotte" },
    { title: "Denver" },
    { title: "Chicago" },
    { title: "Phoenix" },
    { title: "Las Vegas" },
    { title: "Sacramento" },
    { title: "Oklahoma City" },
    { title: "Columbus" },
    { title: "New Mexico" },
    { title: "Albuquerque" },
    { title: "Sacramento" },
    { title: "New Orleans" },
  ];

  const footerLinks = [
    {
      title: "Company",
      items: ["About us", "Team", "Careers", "Blog"],
    },
    {
      title: "Contact",
      items: ["Help & Support", "Partner with us", "Ride with us"],
    },
    {
      title: "Legal",
      items: [
        "Terms & Conditions",
        "Refund & Cancellation",
        "Privacy Policy",
        "Cookie Policy",
      ],
    },
  ];

  return (
    <div className=" bg-[#212121] ">
      <div className="w-container mx-auto">
        {/* Top Cities */}
        <div className="mx-20  py-10">
          <p className="text-white font-bold font-SourceSans text-center md:text-start">
            Our top cities
          </p>
        </div>

        <div className=" mx-20 text-center md:text-start">
          <div className="grid grid-cols-1 md:grid-cols-4  ">
            {footerItems.map((item, index) => (
              <p
                key={index}
                className="hover:text-[#FF8A00] cursor-pointer text-[#F5F5F5] font-SourceSans"
              >
                {item.title}
              </p>
            ))}
          </div>
        </div>

        <div className="hr py-15">
          <hr className="border border-[#424242]" />
        </div>

        {/* Footer Links Section */}
        <div className="flex flex-col md:flex-row  justify-items-center items-center">
          <div className=" mt-12 pb-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center gap-10  justify-items-center ">
            {footerLinks.map((section, index) => (
              <div
                key={index}
                className=" flex  flex-col justify-center items-center text-center"
              >
                <p className="text-white font-bold text-[20px] font-SourceSans mb-3">
                  {section.title}
                </p>

                <ul className="flex flex-col gap-2">
                  {section.items.map((link, i) => (
                    <li
                      key={i}
                      className="text-[#E0E0E0] hover:text-[#FF8A00] cursor-pointer font-open-sans"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col flex-wrap gap-4  m-auto text-center md:text-start">
            <p className="font-SourceSans font-bold text-[#F5F5F5]">
              Follow Us
            </p>
            <div className="flex justify-center md:justify-start">
              <img
                src={SOCIAL}
                alt=""
                className="object-contain cursor-pointer"
              />
            </div>

            <p className="font-SourceSans font-bold text-[#BBBBBB]">
              Receive exclusive offers in your mailbox
            </p>
            <div className="flex flex-col md:flex-row gap-2 ">
              <div className="flex items-center gap-3 bg-[#424242] p-2 rounded-xl shadow-lg ">
                <img
                  src={EMAIL}
                  alt="email"
                  className="hidden lg  :flex  object-contain"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 outline-none text-[#ADADAD] font-open-sans bg-[#424242] text-center md:text-start"
                />
              </div>
              <button className="bg-linear-to-r from-[#FFB800] to-[#FF8A00] text-white font-semibold px-4 py-2 rounded-lg cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-15 w-container mx-auto">
        <hr className="border border-[#424242]" />
        <div className="flex flex-col md:flex-row flex-wrap justify-between py-5">
          <p className="flex flex-wrap justify-center items-center gap-2 text-white">
            All rights Reserved{footSymbolLeft}{" "}
            <span className="font-bold font-Open-sans">Your Company, 2021</span>
          </p>
          <p className="flex font-Open-sans font-bold justify-center items-center gap-2 text-white">
            {footSymbol}Themewagon
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
