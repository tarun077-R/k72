import React from 'react'

function Video() {
  return (
    <div className='h-full w-full overflow-hidden rounded'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756747376~exp=1756750976~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=706cb021fe2fc56e2e330267433427a0413bda310beb323d1240c8ed654f2d65&r=dXMtd2VzdDE%3D"></video>
    </div>
  )
}

export default Video
