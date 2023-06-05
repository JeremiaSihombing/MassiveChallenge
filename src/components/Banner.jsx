import React from "react";

const Banner = () => {
 return (
   <>
   <div className="flex justify-center py-36 mx-10">
     <div className="w-1/2 p-4 mx-auto text-left ">
       <h1 className="text-[48px] font-semibold">Reduce environmental impact, and ensure that food reaches what they need.</h1>
     </div>
     <div className="w-1/2 p-4">
       <img src="./src/assets/banner.png" alt="Gambar" className="w-auto h-auto py-4" />
     </div>
   </div>
   
   <div className="flex flex-col gap-[130px]">
   <div className="w-[75%] mx-auto flex justify-center flex-col gap-y-[30px]">
          <p className="text-4xl font-bold leading-[65px] text-center">What is <span className="text-[#f48c06]">Exless?</span></p>
          <p className="text-xl font-normal leading-[40px] text-justify">
            Exless is a platform  that help people to reducing food by ease meal priority planner, and always keep update about their food’s condition in a digital inventory, pass food waste to the leftover food manager with food recover communities.
          </p>
          <div className="w-[100%] flex gap-x-[30px]">
            <img className="w-[50%] rounded-[20px]" src="./src/assets/banner.png"/>
            <img className="w-[50%] rounded-[20px]" src="./src/assets/banner.png"/>
          </div>
        </div>
        
        <div className="w-[75%] mx-auto flex justify-center flex-col gap-y-[30px]">
          <p className="text-4xl font-bold leading-[65px] text-center"><span className="text-[#f48c06]">Exless</span> Feature</p>
          <p className="text-xl font-normal leading-[40px] text-center">
            Create efficient food storage and reminders of food expiration.
          </p>
          <div className="w-[100%] flex gap-x-[30px]">
            <img className="w-[50%] rounded-[20px]" src="./src/assets/banner.png"/>
            <div className="text-xl font-normal leading-[40px] text-justify flex flex-col gap-[30px]">
              <p className="text-4xl font-bold text-left">Adding <span className="text-[#f48c06]">food ingredients</span> to storage</p>
              <ul>
                <li>Add a food list.</li>
                <li>Information about food on storage.</li>
                <li>Reminder of food</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="w-[75%] mx-auto flex justify-center gap-x-[30px]">
          <div className="flex flex-col gap-[30px]">
            <p className="text-4xl font-bold leading-[65px]">Food processing become more <span className="text-[#f48c06]">efficient</span></p>
            <p className="text-xl font-normal leading-[40px] text-justify">
              With the presence of Exless management in storing food materials does not need to ribet, because users can do management starting from the presentation of food materials and reminders of food expiration.
            </p>
          </div>
          <img className="w-[50%] rounded-[20px]" src="./src/assets/banner.png"/>
        </div>
        
        <div className="w-[75%] mx-auto flex justify-center gap-x-[30px]">
          <img className="w-[50%] rounded-[20px]" src="./src/assets/banner.png"/>
          <div className="flex flex-col gap-y-[30px]">
            <p className="text-4xl font-bold leading-[65px]">Comunity</p>
            <p className="text-xl font-normal leading-[40px] text-justify">
              Our community fights food waste and strives to make a positive environmental impact. We rescue surplus food and distribute it to those in need. Through education and advocacy, we raise awareness and inspire change. Join us to reduce food waste and create a sustainable future.
            </p>
            <button className="w-[110px] p-[10px] bg-[#f48c06] outline outline-1 rounded-[20px] text-white hover:bg-white hover:text-[#f48c06]">See More</button>
          </div>
          
        
          
      </div>
      
      <button className="mx-auto w-[170px] p-[10px] text-[#f48c06] border-[2px] border-[#f48c06] rounded-[20px] font-bold">See More Feature</button>
      
        <div className="w-[75%] mx-auto flex justify-center flex-col gap-y-[30px]">
          <p className="text-4xl font-bold leading-[65px] text-center mb-[30px]">Blog</p>
          <div className="flex gap-x-[30px]">
          <div className="flex flex-col gap-y-[15px]">
            <img className="w-[100%] rounded-[20px] max-h-[400px]" src="./src/assets/banner.png"/>
            <p className="text-[26px] font-bold text-justify">Tackling the Global Food Waste Crisis: Solutions for a Sustainable Future</p>
            <p className="text-xl font-normal text-justify">
              In this article, we explore the serious problems facing the world in terms of excessive food waste....
            </p>
            <button className="text-left">Read More</button>
          </div>
          
          <div className="flex flex-col gap-y-[30px]">
          
            <div className="flex gap-x-[0px]">
            <img className="w-[50%] rounded-[20px] max-h-[400px]" src="./src/assets/banner.png"/>
            <span className="flex flex-col gap-y-[10px]">
            <p className="text-[26px] font-bold text-justify">Tackling the Global Food Waste Crisis: Solutions for a Sustainable Future</p>
            <p className="text-xl font-normal text-justify">
              In this article, we explore the serious problems facing the world in terms of excessive food waste....
            </p>
            <button className="text-left">Read More</button>
            </span>
          </div>
          
          <div className="flex gap-x-[10px]">
          <img className="w-[50%] rounded-[20px] max-h-[400px]" src="./src/assets/banner.png"/>
          <span className="flex flex-col gap-y-[10px]">
            <p className="text-[26px] font-bold text-justify">Tackling the Global Food Waste Crisis: Solutions for a Sustainable Future</p>
            <p className="text-xl font-normal text-justify">
              In this article, we explore the serious problems facing the world in terms of excessive food waste....
            </p>
            <button className="text-left">Read More</button>
            </span>
          </div>
          
       
          
          </div>
          </div>
          <button className="mx-auto w-[170px] p-[10px] text-[#f48c06] border-[2px] border-[#f48c06] rounded-[20px] font-bold">See more Blog</button>
        </div>
        
        <div className="w-[75%] mx-auto flex gap-x-[30px]">
            <div className="flex justify-center flex-col">
              <p className="text-center">Save Food</p>
              <p className="text-center">Save The Earth</p>
              <img className="w-[50%] rounded-[20px]" src="./src/assets/banner.png"/>
            </div>
            <img className="w-[50%]" src="./src/assets/banner.png"/>
          </div>
          
        
        <div className="w-[75%] mx-auto flex justify-center flex-col">
          
        </div>
        
        </div>
        
        
        </>
 );
};

export default Banner;
