import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-screen flex gap-52 text-white bg-zinc-900 px-20 pt-10 pb-5">
      <div className="w-1/3 flex flex-col justify-between">
        <div className="heading">
            <h1 className="text-7xl uppercase font-medium tracking-tighter">eye-</h1>
            <h1 className="text-7xl uppercase font-medium tracking-tighter">opening</h1>
        </div>
        <h3 className="text-4xl" >ochi.</h3>
      </div>
      <div className="w-2/3">
        <h1 className="text-7xl uppercase font-medium tracking-tighter">presentations</h1>
        <div className="w-full flex gap-10">
            <div className="w-1/2 h-[73vh] mt-10 flex flex-col gap-10">
                <div className="">
                    <h3 className="text-xl">S:</h3>
                    <div className="mt-3">
                        {["Instagram","Facebook","Behance","Linkdin"].map((item,index)=>{
                            return (
                                <a href="#" className=" text-lg block underline underline-offset-2"> {item} </a>
                            )
                        })}
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl">L:</h3>
                    <div className="mt-3">
                        {["202-1965 W 4th Ave","Vancouver, Canada"].map((item,index)=>{
                            return (
                                <a href="#" className=" text-lg block underline underline-offset-2"> {item} </a>
                            )
                        })}
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl">V:</h3>
                    <div className="mt-3">
                        {["tanmayasantoshsurve7gmail.com",].map((item,index)=>{
                            return (
                                <a href="#" className=" text-lg block underline underline-offset-2"> {item} </a>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className=" mt-10 w-1/2 h-[73vh]">
                <div className="">
                    <h3 className="text-xl">M:</h3>
                    <div className="mt-3">
                        {["Home","Services","Our work","About us","Insights","Contact us"].map((item,index)=>{
                            return (
                                <a href="#" className=" text-lg block underline underline-offset-2"> {item} </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
