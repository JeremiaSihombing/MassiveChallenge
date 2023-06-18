import React from 'react'
import Blog1 from "/public/blog1.png";
import Blog2 from "/public/blog2.png";
import Blog3 from "/public/blog3.png";

const Blog = () => {
  return (
    <div id="blog" className="flex flex-col gap-[130px] pt-16 bg-[#FAF3EC]">
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
                <button className="text-left ">Read More</button>
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
        <a href="/otherblog" className="mx-auto">
          <button className="mx-auto w-[170px] p-[10px] text-[#f48c06] border-[2px] border-[#f48c06] rounded-[20px] font-bold">
            <a href="/otherblog">Read More</a>{" "}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Blog