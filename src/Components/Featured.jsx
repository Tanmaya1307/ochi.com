import { motion, useAnimation } from 'framer-motion'
import React from 'react'

const Featured = () => {
    const cards = [useAnimation(),useAnimation()]
    const handleHover = (index) => {
        cards[index].start({y:"0"})
    }
    const handleEnd = (index) =>{
        cards[index].start({y:"100%"})
    }
    return (
    <div className="w-full py-20 bg-zinc-900">
    <div className="w-full px-6 border-b-[1px] border-zinc-700 pb-10">
    <h1 className="text-7xl">Featured Projects</h1>
    </div>
    <div className="px-6">
    <div className="cards w-full mt-10 flex gap-10">
        <motion.div 
            onHoverStart={()=>{handleHover(0)}} 
            onHoverEnd={()=>handleEnd(0)} 
            className="cardcontainer relative w-1/2 h-[80vh]">
            <h1 className="z-[999] heading absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl leading-none font-medium tracking-tighter flex overflow-hidden text-[#CDEA68]">{"FYDE".split("").map((item,index)=> 
            <motion.span 
                initial={{y:"100%"}} 
                animate={cards[0]} 
                transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                className='inline-block'>{item}
            </motion.span>)}
            </h1>
            <div className="card w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png')] bg-cover rounded-[1vw]"></div>
        </motion.div>
        <motion.div
            onHoverStart={()=>{handleHover(1)}} 
            onHoverEnd={()=>handleEnd(1)}  
            className="cardcontainer relative w-1/2 h-[80vh]">
            <h1 className="heading absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl leading-none font-medium flex overflow-hidden tracking-tighter text-[#CDEA68]">{"VISE".split("").map((item,index)=>
            <motion.span 
                initial={{y:"100%"}} 
                animate={cards[1]} 
                transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                className='inline-block'>{item}
            </motion.span>)}</h1>
            <div className="card w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg')] bg-cover rounded-[1vw]"></div>
        </motion.div>
    </div>
    </div>
    </div> 
    )
}

export default Featured
