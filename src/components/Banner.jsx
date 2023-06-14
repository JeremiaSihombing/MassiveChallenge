import React from "react";
import Hero from "/public/hp.png";

const Banner = () => {
  return (
    <div className="bg-[#FAF3EC]">
      <div className="flex justify-center py-10 w-full">
        <div className="w-1/2 p-4 mx-auto text-left pt-40">
          <h1 className="text-[35px] font-semibold ] " data-aos="fade-right">
            Reduce environmental impact, and ensure that food reaches what they need.
          </h1>
        </div>
        <div className="w-1/2  " data-aos="fade-left">
          <img src={Hero} alt="Gambar" className=" " />
        </div>
      </div>

    </div>
  );
};

export default Banner;
