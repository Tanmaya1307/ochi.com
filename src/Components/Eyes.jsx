import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate , setrotate] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mousex = e.clientX;
            let mousey = e.clientY;

            let deltaX = mousex - window.innerWidth/2;
            let deltaY = mousey - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setrotate(angle - 180)
        })
        
    })
  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="w-full h-full relative bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center ">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full ">
                <div className="flex relative w-[9vw] h-[9vw] bg-zinc-900 rounded-full">
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="line absolute top-1/2 left-1/2 -translate-x-[50%]c -translate-y-[50%] w-full h-6">
                        <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full ">
                <div className=" relative flex items-center justify-center w-[9vw] h-[9vw] bg-zinc-900 rounded-full">
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6">
                        <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
