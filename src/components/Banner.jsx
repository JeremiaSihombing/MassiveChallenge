import React from "react";

const Banner = () => {
 return (
   <div className="flex justify-center py-36 mx-10">
     <div className="w-1/2 p-4 mx-auto text-left ">
       <h1 className="text-[48px] font-semibold">Reduce environmental impact, and ensure that food reaches what they need.</h1>
     </div>
     <div className="w-1/2 p-4">
       <img src="./src/assets/banner.png" alt="Gambar" className="w-auto h-auto py-4" />
     </div>
   </div>
 );
};

export default Banner;
