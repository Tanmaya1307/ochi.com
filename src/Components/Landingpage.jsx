import { motion } from 'framer-motion'
import React from 'react'

const Landingpage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.2" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="midtext mt-32 px-6">
        {["we create","eye-opening","presentations"].map((item,index)=>{
            return (
                <div className="masker">
                    <div className="w-fit flex">
                      {index === 1 && <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className="rounded-md relative top-2 w-[8vw] mr-[1vw] h-[5vw] bg-red-700 ">
                        <img className="object-fit rounded-md top-2 w-[8vw] mr-[1vw] h-[5vw]" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></motion.div>} 
                      <h1 className="uppercase leading-[5.8vw] text-[6.5vw] tracking-tighter font-bold  " >{item}</h1>
                    </div>
                </div>
            )
        })}
      </div>
      <div className="border-t-[1px] px-6 py-3 border-zinc-700 mt-32 flex justify-between">
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
            return (
                <h3 className="text-md font-light tracking-tight">{item}</h3>
            )
        })}
        <div className="px-5 py-2 uppercase text-sm border-[1px] border-zinc-500 rounded-full ">start the project</div>
      </div>
    </div>
  )
}

export default Landingpage
