import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.2" className="w-full py-16 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl over text-zinc-200" >
      <div className="text border-t-[0.1vw] border-b-[0.1vw] border-zinc-500 flex whitespace-nowrap overflow-hidden">
        <motion.h1 indial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 , repeat:Infinity}} className="text h-[18vw] uppercase font-bold text-[20vw] leading-none pb-[2vw] pr-[8vw] " >we are ochi</motion.h1>
        <motion.h1 indial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15, repeat:Infinity}} className="text uppercase font-bold text-[20vw] leading-none pb-[2vw] " >we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
