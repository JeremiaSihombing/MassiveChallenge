import React from 'react'
import Googleplay from "/public/googleplay.png"
import Hp from "/public/hp.png";

const Playstore = () => {
  return (
    <div className="flex flex-col gap-[130px] pt-10 bg-[#FAF3EC]">
      <div className="w-[75%] mx-auto flex gap-x-[30px]" data-aos="fade-right">
        <div className="flex justify-center flex-col font-bold text-[50px]">
          <p className="text-center text-[#F48C06] ">Rescue Food</p>
          <p className="text-center text-[#020556]">Save The Earth</p>
          <img className="w-[50%] mx-auto cursor-pointer" src={Googleplay} />
        </div>
        <img className="w-[50%]" data-aos="fade-left" src={Hp} />
      </div>
    </div>
  );
}

export default Playstore