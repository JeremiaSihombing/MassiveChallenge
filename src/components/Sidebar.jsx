
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const klik = () => {
  setSidebarOpen(!sidebarOpen);
};

  
  return (
    <>
      <div className={`${sidebarOpen ? 'flex z-10 absolute top-0 left-0 bottom-0' : 'hidden'} md:static md:flex flex-col h-screen p-3 bg-white shadow w-60`}>
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">ADMIN AREA</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link onClick={klik} to="/dashboard" className="flex items-center p-2 space-x-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link onClick={klik} to="/data/user" className="flex items-center p-2 space-x-3 rounded-md">
                <svg className='w-6 h-6' viewBox="0 0 120 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 29.75C56.3225 29.75 52.7276 30.8405 49.6699 32.8836C46.6121 34.9267 44.2289 37.8307 42.8216 41.2282C41.4143 44.6258 41.0461 48.3644 41.7635 51.9712C42.481 55.578 44.2519 58.8911 46.8522 61.4915C49.4526 64.0919 52.7657 65.8628 56.3726 66.5802C59.9794 67.2977 63.718 66.9295 67.1155 65.5221C70.5131 64.1148 73.417 61.7316 75.4602 58.6739C77.5033 55.6162 78.5938 52.0212 78.5938 48.3437C78.5938 43.4124 76.6348 38.683 73.1478 35.196C69.6608 31.709 64.9314 29.75 60 29.75Z" fill="#000"/>
                  <path d="M60 7.4375C49.703 7.4375 39.6373 10.4909 31.0756 16.2116C22.514 21.9323 15.841 30.0634 11.9005 39.5765C7.96006 49.0897 6.92905 59.5578 8.93789 69.6569C10.9467 79.756 15.9052 89.0327 23.1863 96.3137C30.4673 103.595 39.744 108.553 49.8431 110.562C59.9423 112.571 70.4103 111.54 79.9235 107.599C89.4367 103.659 97.5677 96.986 103.288 88.4244C109.009 79.8627 112.063 69.797 112.063 59.5C112.047 45.697 106.557 32.4638 96.7964 22.7036C87.0362 12.9434 73.803 7.45325 60 7.4375ZM89.7203 92.6936C89.6462 87.8158 87.6588 83.1624 84.1864 79.7359C80.7141 76.3094 76.0346 74.3842 71.1563 74.375H48.8438C43.9655 74.3842 39.286 76.3094 35.8136 79.7359C32.3412 83.1624 30.3539 87.8158 30.2798 92.6936C23.5361 86.672 18.7804 78.7441 16.6425 69.9596C14.5046 61.1751 15.0853 51.9485 18.3078 43.5014C21.5302 35.0543 27.2424 27.7853 34.6879 22.6567C42.1334 17.5282 50.961 14.7821 60.0019 14.7821C69.0428 14.7821 77.8704 17.5282 85.3159 22.6567C92.7614 27.7853 98.4735 35.0543 101.696 43.5014C104.918 51.9485 105.499 61.1751 103.361 69.9596C101.223 78.7441 96.464 86.672 89.7203 92.6936Z" fill="#000"/>
                </svg>
                  <span>Account</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link onClick={klik} to="/data/community" className="flex items-center p-2 space-x-3 rounded-md">
                  <svg className='w-6 h-6' viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)" stroke="#000000" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.096"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.8202 1.17444L12.7809 2.37532C13.9186 3.7975 14.3379 5.20075 14.299 6.54704C14.2612 7.85605 13.7915 9.02304 13.3225 9.98619C13.1649 10.3098 12.9946 10.6349 12.8386 10.9327C12.7663 11.0708 12.697 11.203 12.6335 11.3265C12.4214 11.739 12.2593 12.0804 12.1563 12.3799C12.0528 12.6806 12.0336 12.8708 12.0468 12.991C12.0567 13.0817 12.0872 13.173 12.2071 13.2929C12.4054 13.4912 12.5517 13.5469 12.6404 13.5639C12.731 13.5814 12.8515 13.5757 13.0239 13.5049C13.4095 13.3463 13.8803 12.9334 14.3743 12.314C14.8488 11.719 15.2631 11.0384 15.5634 10.4938C15.712 10.2242 15.8295 9.99387 15.9091 9.83234C15.9488 9.75168 15.979 9.6885 15.9988 9.64651L16.0205 9.59999L16.0252 9.58959L16.0259 9.58824L16.026 9.5879L16.0261 9.58776L16.0261 9.58771L16.6117 8.29169L17.6332 9.28206C19.946 11.5244 20.6617 14.7623 19.1415 17.7019C17.8195 20.2583 15.1123 22 12 22C7.60499 22 4 18.5172 4 14.1697C4 11.8793 5.26687 10.2404 6.64671 8.62914C6.82673 8.41894 7.0107 8.20711 7.19757 7.99194C8.47882 6.5167 9.89649 4.88437 11.1122 2.5397L11.8202 1.17444ZM17.1269 11.7924C16.8148 12.3321 16.4089 12.9705 15.9379 13.561C15.3851 14.2542 14.6528 14.9975 13.7846 15.3546C13.33 15.5415 12.8109 15.6335 12.2624 15.5279C11.7119 15.4219 11.2196 15.1338 10.7929 14.7071C10.3617 14.2759 10.1196 13.7664 10.0586 13.2082C10.0008 12.6794 10.1126 12.1723 10.2651 11.729C10.4181 11.2846 10.6372 10.8353 10.8549 10.412C10.9327 10.2606 11.0095 10.114 11.0856 9.96886C11.2338 9.68618 11.3792 9.40866 11.5243 9.11064C11.9559 8.22433 12.2745 7.36712 12.2998 6.48929C12.3134 6.01847 12.2432 5.51449 12.0273 4.9728C10.9109 6.77097 9.71215 8.14915 8.69763 9.31555C8.51377 9.52693 8.33596 9.73135 8.16579 9.93006C6.7748 11.5543 6 12.6877 6 14.1697C6 17.3667 8.66302 20 12 20C14.3543 20 16.3818 18.6846 17.365 16.7832C18.2267 15.1169 18.1049 13.3127 17.1269 11.7924Z" fill="#000000"></path> </g></svg>
                  <span>Community</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link onClick={klik} to="/data/video" className="flex items-center p-2 space-x-3 rounded-md">
                <svg className='w-6 h-6' fill="#000000" viewBox="-192 -192 2304.00 2304.00" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.019200000000000002"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M746.667 1374.31V545.935l690.346 414.187-690.346 414.186ZM1879.04 321.615c-600.107-143.467-1238.4-143.467-1838.08 0L0 331.429v1257.494l40.96 9.813c300.053 71.68 609.28 108.053 919.04 108.053 309.867 0 619.2-36.373 919.04-108.053l40.96-9.813V331.429l-40.96-9.813Z" fillRule="evenodd"></path> </g>
                </svg>
                  <span>Video</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link onClick={klik} to="/data/artikel" className="flex items-center p-2 space-x-3 rounded-md">
                <svg height="24px" width="24px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <polygon className="st0" points="93.539,218.584 275.004,218.584 354.699,138.894 355.448,138.145 355.448,125.045 93.539,125.045 "></polygon> <polygon className="st0" points="402.213,433.724 46.77,433.724 46.77,78.276 402.213,78.276 402.213,91.467 448.983,56.572 448.983,31.506 0,31.506 0,480.494 448.983,480.494 448.983,289.204 402.213,335.974 "></polygon> <path className="st0" d="M229.358,274.708H93.539v28.062h120.476C218.602,292.858,223.932,283.312,229.358,274.708z"></path> <path className="st0" d="M93.539,349.539v28.062h110.935c-3.275-8.796-4.302-18.334-3.649-28.062H93.539z"></path> <path className="st0" d="M290.939,268.789c-15.501,15.501-55.612,80.76-40.11,96.27c15.51,15.51,80.76-24.609,96.27-40.11l63.755-63.77 l-56.155-56.15L290.939,268.789z"></path> <path className="st0" d="M500.374,115.509c-15.511-15.502-40.649-15.502-56.15,0l-76.682,76.685l56.156,56.15l76.676-76.685 C515.875,156.158,515.875,131.019,500.374,115.509z M400.166,202.361l-9.636-9.628l53.684-53.684l9.619,9.618L400.166,202.361z"></path> </g> </g></svg>
                  <span>Article</span>
                </Link>
              </li>
              
              
              <li className="rounded-sm">
                <Link onClick={klik} to="#" className="flex items-center p-2 space-x-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Log out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
       <button
        className="fixed z-20 bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 shadow-lg md:hidden"
        onClick={() => {
          setSidebarOpen(!sidebarOpen);
        }}
      >
        Tombol
      </button>
      </>
  );
}

export default Sidebar