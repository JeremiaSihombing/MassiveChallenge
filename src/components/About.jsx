import React from 'react'
import About1 from "/public/about1.png";
import About2 from "/public/about2.png";

const About = () => {
  return (
    <div id="about" className="flex flex-col gap-[130px] pb-16 bg-[#FAF3EC]">
      <div className="w-[75%] mx-auto flex justify-center flex-col gap-y-[30px]">
        <p className="text-4xl font-bold leading-[65px] text-center text-[#020556]" data-aos="fade-up">
          What is <span className="text-[#f48c06]">Exless?</span>
        </p>
        <p className="text-xl font-normal leading-[40px] text-justify text-[#696984]" data-aos="fade-down">
          Exless is a platform that help people to reducing food by ease meal priority planner, and always keep update about their food’s condition in a digital inventory, pass food waste to the leftover food manager with food recover
          communities.
        </p>
        <div className="w-[100%] flex gap-x-[30px]">
          <img className="w-[50%] rounded-[20px]" data-aos="fade-right" data-aos-duration="2000" src={About1} />
          <img className="w-[50%] rounded-[20px]" data-aos="fade-left" data-aos-duration="2000" src={About2} />
        </div>
      </div>
    </div>
  );
}

export default About