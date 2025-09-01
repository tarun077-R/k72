import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

function Agence() {
  const imagedivref = useRef(null);
  const imageref = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imagedivref.current, {
      scrollTrigger: {
        trigger: imagedivref.current,
        start: "top 28%",
        end: "top -100%", 
        scrub: true,
        anticipatePin:1,
        invalidateOnRefresh:1,
        pin: true,
        pinSpacing:true,
        pinType:'transform',
        pinReparent:true,
        // markers: true, // remove in production
        onUpdate: (self) => {
          let index = Math.floor(self.progress * (imageArray.length - 1));
          imageref.current.src = imageArray[index];
        },
      },
    });
  });

  return (
    <div className="parent bg-white text-black">
      <div id="page1" className=" py-1">
        <div
          ref={imagedivref}
          className="absolute lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] lg:rounded-3xl rounded-xl overflow-hidden lg:top-72 -top-80 lg:left-[30vw] left-[30vw]"
        >
          <img
            ref={imageref}
            className="h-full w-full object-cover"
            src={imageArray[0]}
            alt="team"
          />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[55vh] mt-[30vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
            <p className="lg:text-[3vw] text-xl leading-tight lg:mb-[20vh]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Agence;
