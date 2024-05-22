import React from 'react'
import './DemoVideo.css'

const DemoVideo = () => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://youtu.be/GTZNhFhJYkU?si=Zxi82p0BuVo3tYop"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default DemoVideo
