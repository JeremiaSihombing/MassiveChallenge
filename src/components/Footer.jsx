import React from 'react'

const Footer =()=>{
    return (
      <>
        <div className="bg-[#252641] py-10 bottom-0 z-50">
          <div className="text-white text-center font-bold text-[48px]">Exless</div>
          <div className="flex text-[#B2B3CF] justify-center gap-5 ">
            <span>Careers</span>
            <span>Privacy Policy</span>
            <span>Term and Condition</span>
            <span><a href="/admin_login">Admin</a></span>
          </div>
          <div className="text-center text-[#B2B3CF] ">© 2023 Exless</div>
        </div>
      </>
    );
}
export default Footer;