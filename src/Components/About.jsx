import React from 'react'
const About = () => {
  return (
    <div className="w-full py-20 px-6 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#000] ">
        <h1 className="text-5xl text-left w-[89%] " >Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className="py-6 w-full flex border-t-[1px] border-[#4a5033] mt-20 ">
            <div className="w-1/2">
                <h1 className="text-6xl">Our approach:</h1>
                <button className="mt-6 flex items-center gap-8 px-6 py-4 bg-black text-white rounded-full text-left text-sm uppercase" >
                    Read more 
                    <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] ">
                <img className="h-full w-full object-fit rounded-2xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
