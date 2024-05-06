import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { SponsorImage } from "@/lib/brands";

const SponsorPopup = ({ closeModal }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) =>
        current === SponsorImage.length - 1 ? 0 : current + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [current]);
  return (
    <div className="absolute  w-full h-full flex justify-center items-center bg-black bg-opacity-75">
      <div className="flex justify-center items-center w-full h-full opacity-100 text-white ">
        <div className="lg:w-4/5 w-full h-full max-w-[1400px] max-h-[700px] m-auto p-2 relative group ">
          <div
            className="lg:h-full h-96 rounded-lg bg-center bg-cover duration-500 "
            style={{
              backgroundImage: `url(${SponsorImage[current].src})`,
            }}
          ></div>

          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-12rem] lg:translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10">
            <BsChevronCompactLeft size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-12rem] lg:translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10">
            <BsChevronCompactRight size={30} />
          </div>

          <div
            className="absolute -top-5 right-3 z-10 text-white font-bold cursor-pointer"
            onClick={() => closeModal(false)}
          >
            Đóng quảng cáo
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorPopup;
