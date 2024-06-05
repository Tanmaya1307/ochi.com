import React from 'react'

const Cards = () => {
  return (
    <div className="w-full h-screen px-6 flex items-center bg-zinc-900">
      <div className="cardconainer mt-10 flex items-center gap-5 h-[63vh] w-full ">
            <div className="card rounded-lg relative w-1/3 h-full bg-[#004D43]">
                <h1 className="absolute left-1/2 -translate-x-[50%] text-7xl mt-32 font-medium text-[#CDEA68] " >ochi</h1>
                <h6 className="px-5 py-1 border-[1.4px] text-[#CDEA68] border-[#CDEA68] rounded-full absolute bottom-[6%] left-[6%] inline-block">2019-2022</h6>
            </div>
      {/* </div> */}
      {/* <div className="cardconainer flex gap-5 h-[50vh] w-1/2 "> */}
            <div className="card relative rounded-lg w-1/3 h-full bg-[#212121]">
                <h1 className="absolute left-1/2 -translate-x-[50%] text-6xl mt-32 font-medium text-[#fff] " >Clutch</h1>
                <h6 className="px-5 py-1 border-[1.4px] text-[#FFF] border-[#FFF] rounded-full absolute bottom-[6%] left-[6%] inline-block">RATING 5.0 ON CLUTCH</h6>
            </div>
            <div className="card relative rounded-lg w-1/3 h-full bg-[#212121]">
                <img className=' absolute h-[10vw] w-[10vw] object-fit top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <h6 className="px-5 py-1 border-[1.4px] text-[#FFF] border-[#FFF] rounded-full absolute bottom-[6%] left-[6%] inline-block">BUSINESS BOOTCAMP ALUMINI</h6>
            </div>
      </div>
    </div>
  )
}

export default Cards
