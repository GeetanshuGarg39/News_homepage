'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const[showMenubar,setShowMenubar] = useState(false);
  
  return (
    <>
      <div className="md:mx-40">
        <nav className=" z-50 flex items-center py-12 px-4 bg-white justify-between  ">
          <Image  className=" h-8 w-14" src="logo.svg" width="60" height="60" />
          <Image className={showMenubar ? "h-5 w-10 hidden":"h-5 w-10 md:hidden"} src="icon-menu.svg" width="60" height="40" onClick={()=>setShowMenubar(!showMenubar) } />
          <Image className={showMenubar ? "h-8 w-10 z-50 md:hidden":"h-5 w-10 hidden"} src="icon-menu-close.svg" width="60" height="40" onClick={()=>setShowMenubar(!showMenubar)} />
          <ul className={showMenubar? "bg-white opacity-100 z-40 h-screen absolute w-2/3 right-0 top-32 block" : " md:opacity-100 hidden  md:z-auto  md:w-max md:relative   md:h-auto   md:flex "}>
            <li className="text-lg md:text-base font-medium md:font-normal ml-5 my-8 md:my-0 md:ml-12 ">
              <button className="hover:text-orange-600">Home</button>
            </li>
            <li className="text-lg md:text-base font-medium md:font-normal ml-5 my-8 md:my-0 md:ml-12">
              <button className="hover:text-orange-600">New</button>
            </li>
            <li className="text-lg md:text-base font-medium md:font-normal ml-5 my-8 md:my-0 md:ml-12">
              <button className="hover:text-orange-600">Popular</button>
            </li>
            <li className="text-lg md:text-base font-medium md:font-normal ml-5 my-8 md:my-0 md:ml-12">
              <button className="hover:text-orange-600">Trending</button>
            </li>
            <li className=" text-lg md:text-base font-medium md:font-normal ml-5 my-8 md:my-0 md:ml-12">
              <button className="hover:text-orange-600">Categories</button>
            </li>
          </ul>
        </nav>
        <div className="md:flex md:mb-16">
          <div className="md:w-2/3 mx-4 ">
            <div className=" mb-8 ">
              <img className="hidden md:block " src="image-web-3-desktop.jpg" alt="" />
              <img className="block md:hidden " src="image-web-3-mobile.jpg" alt="" />
            </div>

            <div className="md:flex">
              <div className=" text-5xl font-extrabold">
                The Bright Future of Web 3.0?
              </div>
              <div className="md:relative">
                <p className="my-4 md:my-0 text-gray-500">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="mb-10 md:mb-0 mt-6 bg-orange-600 md:absolute bottom-0 font-bold hover:bg-black text-slate-100 p-3 text-xs px-9">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          <div className="bg-black mb-10 md:mb-0 px-6 p-4 mx-4 md:w-1/3">
            {/* <div className=" border-b-2"> */}
            <h1 className=" text-yellow-400 text-5xl py-4  font-semibold">
              New
            </h1>
            <h3 className="text-white font-semibold py-2 ">
              <a className="hover:text-yellow-400" href="/">
                Hydrogen VS Electric Cars
              </a>
            </h3>
            <p className="border-b-2  border-gray-600  text-gray-400 text-sm pb-8 ">
              With hydrogen-feuled cars ever catch up to EVs?
            </p>
            {/* </div> */}

            <h3 className="text-white font-semibold pt-6 pb-2">
              <a className="hover:text-yellow-400" href="/">
                The Downsides of AI Artistry
              </a>
            </h3>
            <p className="border-b-2  border-gray-600  text-gray-400 text-sm pb-8 ">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>

            <h3 className="text-white font-semibold pt-6 ">
              <a className="hover:text-yellow-400" href="/">
                Is VC Funding Drying Up?
              </a>
            </h3>
            <p className=" text-gray-400  border-gray-600  text-sm py-2 ">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
            <div></div>
          </div>
        </div>

        <div className="md:flex p-4 ">
          <div className="sm:flex">
            <div className="flex h-28 mb-8 md:mb-0">
              <img className="h-full" src="image-retro-pcs.jpg"></img>
              <div className="pl-5">
                <h1 className=" text-2xl text-gray-300 font-semibold">01</h1>
                <h2 className="font-extrabold py-1">
                  <a className="hover:text-orange-600" href="/">
                    Reviving Retro PCs
                  </a>
                </h2>
                <p className=" text-sm text-gray-500 font-medium sm:mr-5">
                  What happens when old PCs are given modern upgrades?
                </p>
              </div>
            </div>

            <div className=" flex h-28 sm:mr-5 mb-8 md:mb-0">
              <img img className="h-full" src="image-top-laptops.jpg"></img>
              <div className="pl-5">
                <h1 className=" text-2xl text-gray-300 font-semibold">02</h1>
                <h2 className="font-extrabold py-1">
                  <a className="hover:text-orange-600" href="/">
                    Top 10 Laptops of 2022
                  </a>
                </h2>
                <p className=" text-sm text-gray-500 font-medium">
                  Our best picks for various needs and budgets
                </p>
              </div>
            </div>
            <div className=" flex h-28 mb-8 md:mb-0">
              <img img className="h-full" src="image-gaming-growth.jpg"></img>
              <div className="pl-5">
                <h1 className=" text-2xl text-gray-300 font-semibold">03</h1>
                <h2 className="font-extrabold py-1">
                  <a className="hover:text-orange-600" href="/">
                    The Growth of Gaming{" "}
                  </a>
                </h2>
                <p className=" text-sm text-gray-500 font-medium">
                  How the pandemic has sparked fresh opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
