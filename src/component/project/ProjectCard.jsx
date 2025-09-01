import React from 'react'

function ProjectCard(props) {
  return (
    <>
  <div className="relative group lg:w-1/2 h-full overflow-hidden rounded-[20px] transition-all duration-500 hover:rounded-[60px]">
    <img className="h-full w-full object-cover" src={props.image1} alt="Project 1" />
    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <h2 className="uppercase text-5xl font-[font1] border-2 border-white px-6 py-2 text-white rounded-full">
        Voir le projet
      </h2>
    </div>
  </div>
  <div className="relative group lg:w-1/2 h-full overflow-hidden rounded-[20px] transition-all duration-500 hover:rounded-[60px]">
    <img className="h-full w-full object-cover" src={props.image2} alt="Project 2" />
    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <h2 className="uppercase text-5xl font-[font1] border-2 border-white px-6 py-2 text-white rounded-full">
        Voir le projet
      </h2>
    </div>
  </div>
    </>

  )
}

export default ProjectCard
