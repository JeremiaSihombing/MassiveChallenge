import React from "react";
import feature1 from "../../public/feature1.jpg";
import feature2 from "../../public/features2.png";
import feature3 from "../../public/features3.png";

const Feature = () => {
  return (
    <>
      <div id="feature" className="flex flex-col gap-[130px] pt-10 bg-[#FAF3EC]">
        <div className="w-[75%] mx-auto flex justify-center flex-col gap-y-[30px]">
          <p className="text-4xl font-bold  text-center " data-aos="fade-up">
            <span className="text-[#f48c06]">Exless</span> <span className="text-[#020556]">Feature</span>
          </p>
          <p className="text-xl font-normal  text-center text-[#696984]" data-aos="down" data-aos-duration="1500">
            Create efficient food storage and reminders of food expiration.
          </p>
          <div className="w-[100%] flex gap-x-[30px]">
            <img className="w-[50%] rounded-[20px]" src={feature1} data-aos="right" />
            <div className="text-xl font-normal leading-[40px] text-justify flex flex-col gap-[30px]" data-aos="right">
              <p className="text-4xl font-bold text-left text-[#020556]" data-aos="right">
                Adding <span className="text-[#f48c06]">food ingredients</span> to storage
              </p>
              <ul className="text-[#696984]">
                <li>Add a food list.</li>
                <li>Information about food on storage.</li>
                <li>Reminder of food</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[75%] mx-auto flex justify-center gap-x-[30px]">
          <div className="flex flex-col gap-[30px]" data-aos="right">
            <p className="text-4xl font-bold leading-[65px] text-[#020556]">
              Food processing become more <span className="text-[#f48c06]">efficient</span>
            </p>
            <p className="text-xl font-normal leading-[40px] text-justify text-[#696984]">
              With the presence of Exless management in storing food materials does not need to ribet, because users can do management starting from the presentation of food materials and reminders of food expiration.
            </p>
          </div>
          <img className="" src={feature2} />
        </div>

        <div id="community" className="w-[75%] mx-auto flex justify-center gap-x-[100px]">
          <img className="w-[600px] h-[400px]" src={feature3} />
          <div className="flex flex-col gap-y-[30px]">
            <p className="text-4xl font-bold leading-[65px] text-[#020556]">
              Comm<span className="text-[#f48c06]">unity</span>
            </p>
            <p className="text-xl font-normal leading-[40px] text-justify text-[#696984]" data-aos="right">
              Our community fights food waste and strives to make a positive environmental impact. We rescue surplus food and distribute it to those in need. Through education and advocacy, we raise awareness and inspire change. Join us to
              reduce food waste and create a sustainable future.
            </p>
            <a href="/community">
              <button className="w-[110px] p-[10px] bg-[#f48c06] rounded-[20px] text-white hover:bg-white hover:text-[#f48c06] hover:ring-[#f48c06]">See More</button>
            </a>
          </div>
        </div>
        <a href="/video">
          <button className=" py-4 px-8 bg-[#f48c06] rounded-[20px] text-white hover:bg-white hover:text-[#f48c06] hover:ring-[#f48c06] mx-auto block">See More Feature</button>
        </a>
      </div>
    </>
  );
};

export default Feature;
