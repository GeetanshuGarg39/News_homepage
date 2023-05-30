import Image from "next/image";
export default function Home() {
  // function Menu(e){
  //   e.src === "icon-menu.svg"
  // }
  return (
    
    <>
      <div className="m-4 md:mx-44 ">
        <nav className=" z-50 flex items-center py-16 bg-white justify-between ">
          <Image className="h-8 w-14" src="logo.svg" width="60" height="60" />
          <Image className="h-5 w-10 md:hidden" src="icon-menu.svg" width="60" height= "40" ></Image>
          <ul className=" opacity-0 md:opacity-100 z-[-1] md:z-auto w-2/3 md:relative absolute h-screen md:h-auto bg-white right-0 md:grid md:grid-cols-5 gap-4 ">
            <li className="ml-5 my-5 md:my-0 ">
              <button className="hover:text-orange-600">Home</button>
            </li>
            <li className="ml-5 my-5 md:my-0">
              <button className="hover:text-orange-600">New</button>
            </li>
            <li className="ml-5 my-5 md:my-0">
              <button className="hover:text-orange-600">Popular</button>
            </li>
            <li className="ml-5 my-5 md:my-0">
              <button className="hover:text-orange-600">Trending</button>
            </li>
            <li className="ml-5 my-5 md:my-0">
              <button className="hover:text-orange-600">Categories</button>
            </li>
          </ul>
        </nav>
        <div className="">
          <div className="  mb-10 md:flex flex-wrap md:mb-0">
            <div className="mb-10 sm:w-2/3 pr-2 sm:mb-0">
              <div className="mb-10 bg-green-50 h-1/2">
                <img
                  className="h-full w-full "
                  src="image-web-3-desktop.jpg"
                />
              </div>

              <div className="sm:flex">
                <div className="mb-5 font-extrabold text-6xl">
                  The Bright Future of Web 3.0?{" "}
                </div>
                <div className=" sm:p-3">
                  {" "}
                  <p className="sm:text-sm sm:relative text-gray-500">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>
                  <button className=" mt-6 bg-orange-600 font-bold hover:bg-black text-slate-100 p-3 text-xs px-9 sm:absolute ">
                    {" "}
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
            <div className="  p-8 font-semibold bg-black sm:w-1/3 ">
              <h1 className=" text-yellow-400 text-5xl font-semibold">New</h1>
              <h3 className="text-white m-px font-semibold pt-5">
                <a className="hover:text-yellow-400" href="/">
                  Hydrogen VS Electric Cars
                </a>
              </h3>
              <p className=" text-gray-400 text-sm pt-3 pb-5">
                With hydrogen-feuled cars ever catch up to EVs?
              </p>

              <h3 className="text-white m-px font-semibold border-t-2 border-gray-600 pt-5">
                <a className="hover:text-yellow-400" href="/">
                  The Downsides of AI Artistry
                </a>
              </h3>
              <p className=" text-gray-400 text-sm pt-3 pb-5">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>

              <h3 className="text-white m-px font-semibold border-t-2 border-gray-600 pt-5">
                <a className="hover:text-yellow-400" href="/">
                  Is VC Funding Drying Up?
                </a>
              </h3>
              <p className=" text-gray-400 text-sm pt-3">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>


          {/* bottom small photos section  */}
          <div className="sm:flex">
          <div className=" mb-8 flex h-28">
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
          <div className="mb-8 flex h-28 sm:mr-5">
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
          <div className="mb-8 flex h-28 ">
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
