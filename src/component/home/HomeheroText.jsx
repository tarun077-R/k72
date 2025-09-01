import React from "react";
import Video from "./Video";

const HomeheroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center mt-72 lg:mt-0">
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[7.3vw] leading-[10vw] flex items-start justify-center lg:mr-5">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8.3vw] leading-[10vw] flex items-start justify-center py-2 lg:mr-5">
        qui
        <div className='lg:h-[7vw] h-[10vw] lg:w-[16vw] w-[24vw] rounded-full lg:-mt-3 -mt-1 overflow-hidden'>
         <Video/>            
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-start justify-center mr-5">
        la créativité
      </div>
    </div>
  );
};

export default HomeheroText;
