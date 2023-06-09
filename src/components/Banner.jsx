import React from "react";
import About1 from "/public/About1.png";
import About2 from "/public/About2.png";
import Jumbotron from "/public/Banner.png";
import Feature1 from "/public/feature1.png";
import Feature2 from "/public/features2.png";
import Feature3 from "/public/features3.png";
import Blog1 from "/public/blog1.png";
import Blog2 from "/public/blog2.png";
import Blog3 from "/public/blog3.png";
import Google from "/public/googleplay.png";
import Hp from "/public/hp.png";

const Banner = () => {
  return (
    <>
      <div className="flex justify-center py-24 mx-10">
        <div className="w-1/2 p-4 mx-auto text-left pt-40">
          <h1 className="text-[35px] font-semibold ] " data-aos="fade-right">
            Reduce environmental impact, and ensure that food reaches what they need.
          </h1>
        </div>
        <div className="w-1/2 p-4 pb-32 " data-aos="fade-left">
          <img src={Jumbotron} alt="Gambar" className="w-auto h-auto " />
        </div>
      </div>

      <div className="flex flex-col gap-[130px]">
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
            <img className="w-[50%] rounded-[20px]" data-aos="fade-right" data-aos-duration="2000" src={About2} />
          </div>
        </div>

        <div className="w-[75%] mx-auto flex justify-center flex-col gap-y-[30px]">
          <p className="text-4xl font-bold leading-[65px] text-center " data-aos="fade-up">
            <span className="text-[#f48c06]">Exless</span> <span className="text-[#020556]">Feature</span>
          </p>
          <p className="text-xl font-normal leading-[40px] text-center text-[#696984]" data-aos="down" data-aos-duration="1500">
            Create efficient food storage and reminders of food expiration.
          </p>
          <div className="w-[100%] flex gap-x-[30px]">
            <img className="w-[50%] rounded-[20px]" src={Feature1} data-aos="right" />
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
          <img className="w-[50%] rounded-[20px]" src={Feature2} />
        </div>

        <div className="w-[75%] mx-auto flex justify-center gap-x-[30px]">
          <img className="w-[50%] rounded-[20px]" src={Feature3} />
          <div className="flex flex-col gap-y-[30px]">
            <p className="text-4xl font-bold leading-[65px] text-[#020556]">
              Comm<span className="text-[#f48c06]">unity</span>
            </p>
            <p className="text-xl font-normal leading-[40px] text-justify text-[#696984]" data-aos="right">
              Our community fights food waste and strives to make a positive environmental impact. We rescue surplus food and distribute it to those in need. Through education and advocacy, we raise awareness and inspire change. Join us to
              reduce food waste and create a sustainable future.
            </p>
            <button className="w-[110px] p-[10px] bg-[#f48c06] rounded-[20px] text-white hover:bg-white hover:text-[#f48c06] hover:ring-[#f48c06]">See More</button>
          </div>
        </div>

        <button className="mx-auto w-[170px] p-[10px] text-[#f48c06] border-[2px] border-[#f48c06] rounded-[20px] font-bold">See More Feature</button>

        <div className="w-[75%] mx-auto flex justify-center flex-col gap-y-[30px] ">
          <p className="text-4xl font-bold leading-[65px] text-center mb-[30px] text-[#020556]">Blog</p>
          <div className="flex gap-x-[30px]">
            <div className="flex flex-col gap-y-[15px] py-28 " data-aos="fade-right">
              <img className="" src={Blog1} />
              <p className="text-[20px] font-bold text-justify text-[#252641]">Tackling the Global Food Waste Crisis: Solutions for a Sustainable Future</p>
              <p className="text-[15px]  font-normal text-justify text-[#696984]">In this article, we explore the serious problems facing the world in terms of excessive food waste....</p>
              <button className="text-left">Read More</button>
            </div>

            <div className="flex flex-col gap-y-[30px]" data-aos="fade-left">
              <div className="flex gap-3 ">
                <img className="w-[280px] h-[200px]" src={Blog2} />
                <span className="flex flex-col gap-y-[10px]">
                  <p className="text-[20px] font-bold text-justify text-[#252641]">Tackling the Global Food Waste Crisis: Solutions for a Sustainable Future</p>
                  <p className="text-[15px]  font-normal text-justify text-[#696984]">In this article, we explore the serious problems facing the world in terms of excessive food waste....</p>
                  <button className="text-left">Read More</button>
                </span>
              </div>

              <div className="flex gap-3 ">
                <img className="w-[280px] h-[200px]" src={Blog3} data-aos="fade-left" />
                <span className="flex flex-col gap-y-[10px]">
                  <p className="text-[20px] font-bold text-justify text-[#252641]">Tackling the Global Food Waste Crisis: Solutions for a Sustainable Future</p>
                  <p className="text-[15px]  font-normal text-justify text-[#696984]">In this article, we explore the serious problems facing the world in terms of excessive food waste....</p>
                  <button className="text-left border-[">Read More</button>
                </span>
              </div>

              <div className="flex gap-3 ">
                <img className="w-[280px] h-[200px]" src={Blog3} data-aos="fade-left" />
                <span className="flex flex-col gap-y-[10px]">
                  <p className="text-[20px] font-bold text-justify text-[#252641]">Tackling the Global Food Waste Crisis: Solutions for a Sustainable Future</p>
                  <p className="text-[15px] font-normal text-justify text-[#696984]">In this article, we explore the serious problems facing the world in terms of excessive food waste....</p>
                  <button className="text-left">Read More</button>
                </span>
              </div>
            </div>
          </div>
          <button className="mx-auto w-[170px] p-[10px] text-[#f48c06] border-[2px] border-[#f48c06] rounded-[20px] font-bold">See more Blog</button>
        </div>

        <div className="w-[75%] mx-auto flex gap-x-[30px]" data-aos="fade-right">
          <div className="flex justify-center flex-col font-bold text-[50px]">
            <p className="text-center text-[#F48C06] ">Rescue Food</p>
            <p className="text-center text-[#020556]">Save The Earth</p>
            <img className="w-[50%] mx-auto cursor-pointer" src={Google} />
          </div>
          <img className="w-[50%]" data-aos="fade-left" src={Hp} />
        </div>

        <div className="w-[75%] mx-auto flex justify-center flex-col"></div>
      </div>
    </>
  );
};

export default Banner;
