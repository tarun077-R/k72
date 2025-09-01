import React from 'react'
import Video from '../component/home/Video'
import HomeheroText from '../component/home/HomeheroText'
import HomeBottom from '../component/home/HomeBottom'

function Home() {
  return (
    <div className='text-white'>
    <div className='h-screen w-screen fixed'>
      <Video/>
    </div>
<div className="h-screen w-screen justify-between relative overflow-hidden flex flex-col">
   <HomeheroText/>
   <HomeBottom/>
   </div>
    </div>
  )
}

export default Home
