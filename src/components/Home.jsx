import React from 'react'
import Working from './images/working.svg';
import Card1 from './images/Group 1.png'
import Card2 from './images/Group 2.png'
import Card3 from './images/Group 3.png'
import Banner2 from './images/Group 13.png'
const Home = () => {
  return (
    <div className='top-20 relative block pb-20 justify-around flex-grow '>
      <div className='flex'>
        <div className='w-1/2  mt-32 ml-44 font-extrabold text-5xl'>
          Are you looking for Freelancers?
          <p className='text-xl font-light pt-6'>Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice</p>
        </div>

        <div className=' mt-12 w-1/2 '><img src={Working} className=' ml-32 w-1/2' /></div>
      </div>
      {/* card */}
      <div className='mt-12'>
        <div className='bg-white flex justify-around   w-2/3 mx-auto p-16 text-black'>
          <div>
            <div className='flex-col'>
              <div>
                <img src={Card1} alt="" />
              </div>
              <div className=''>
                Create Account
              </div>
            </div>
          </div>
          <div className='flex-col'>
            <div>
              <img src={Card2} alt="" />
            </div>
            <div className=''>
              Create Account
            </div>
          </div>
          <div className='flex-col'>
            <div>
              <img src={Card3} alt="" />
            </div>
            <div className=''>
              Create Account
            </div>
          </div>
        </div>
      </div>
      {/* Banner -2  */}
      <div className="   flex justify-around mb-24 mt-24 ">



        <img className=" w-1/3" src={Banner2} alt="" />

        <div className=' w-1/3 mt-24 '><p className=" font-extrabold  text-pretty text-xl md:text-4xl">Find The Best
          <span className="text-[#1E88E5]">Freelancers</span> Here
        </p>
          <p className=" text-lg   h-10 my-10 text-pretty">Hire Great Freelancers, Fast.
            Spacelance helps you hire elite freelancers at a moment's notice</p>
        </div>

      </div>
      {/* card component 2 */}
      <div className="flex-col">
        <div className="w-3/4 m-auto">
          <div className="flex  ml-auto h-auto justify-around">
            <div className="flex-col w-2/3">

              <p className=" text-[#9D9D9D]">The latest freelance work!</p>

              <p className="text-2xl">Recently Posted <span className="text-[#1E88E5]">Works</span></p>

            </div>
            <div className=" ">

              <span className="inline-block rounded-full border min-w-9 border-indigo-600 p-6 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                href="#">
                <span className="sr-only"> Download </span>

                <svg className="size-5 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>

              <span className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-6 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                href="#">
                <span className="sr-only"> Download </span>

                <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>





            </div>

          </div>
        </div>
        <div className=" flex space-x-24 w-3/4 m-auto flex-nowrap   overflow-hidden   px-20 py-10">
          <span className="group relative min-w-72 shadow-xl block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div
              className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-10 sm:size-12" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <h2 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
              </div>

              <div
                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 group-hover:w-72 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

                <p className="mt-4 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                  omnis atque culpa repellendus.
                </p>

                <p className="mt-8 font-bold">Read more</p>
              </div>
            </div>
          </span>
          <span className="group relative shadow-xl min-w-72 ml-14 block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div
              className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-10 sm:size-12" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <h2 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
              </div>

              <div
                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 group-hover:w-72 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

                <p className="mt-4 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                  omnis atque culpa repellendus.
                </p>

                <p className="mt-8 font-bold">Read more</p>
              </div>
            </div>
          </span>
          <span className="group relative shadow-xl min-w-72 ml-14 block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div
              className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-10 sm:size-12" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <h2 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
              </div>

              <div
                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:w-72 group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

                <p className="mt-4 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                  omnis atque culpa repellendus.
                </p>

                <p className="mt-8 font-bold">Read more</p>
              </div>
            </div>
          </span>
          <span className="group  shadow-xl min-w-72 ml-14 block h-64 sm:h-80 lg:h-96">


            <div
              className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-10 sm:size-12" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <h2 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
              </div>

              <div
                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:w-72 group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

                <p className="mt-4 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                  omnis atque culpa repellendus.
                </p>

                <p className="mt-8 font-bold">Read more</p>
              </div>
            </div>
          </span>
        </div>
      </div>
      {/* grid */}
      {/* <div className="h-auto mt-6">
        <div className="m-auto mb-16 w-1/2">
          <p className="text-2xl font-bold text-center ">Choose Different <span className="text-[#1E88E5]"> Category </span>
          </p>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-16">



          <div className="flex items-center justify-center relative "><span><img
            className="shadow-lg opacity-75 bg-none " src="./images/gridimgs/unsplash_VW2oU66mwbc.svg" alt="" />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-xl font-bold">
              Graphic</div>
          </span>
          </div>
          <div className="flex items-center justify-center relative">
            <span className=""><img className="shadow-lg  opacity-75" src="./images/gridimgs/unsplash_v9vII5gV8Lw.svg" alt="" />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-xl font-bold">
                Cartoon Animation</div>
            </span>

          </div>
          <div className="flex items-center justify-center relative">
            <span className=""><img className=" shadow-lg bg-none " src="./images/gridimgs/unsplash_uhtDG9ePLQI.svg" alt="" />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-xl font-bold">
                Illustration</div>
            </span>

          </div>
          <div className="flex items-center justify-center relative">
            <span className=""><img className=" opacity-75 shadow-lg bg-none " src="./images/gridimgs/unsplash_s9CC2SKySJM.svg"
              alt="Graphic" />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-xl font-bold">
                Logo Design</div>
            </span>

          </div>
          <div className="flex items-center justify-center relative">
            <span className=""><img className=" opacity-75 shadow-lg bg-none " src="./images/gridimgs/unsplash_qnWPjzewewA.svg"
              alt="" />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-xl font-bold">
                Social graphics</div>
            </span>

          </div>
          <div className="flex items-center justify-center relative">
            <span className=""><img className=" opacity-75 shadow-lg bg-none " src="/gridimgs/unsplash_jPd5A9_mS-g.svg"
              alt="" />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-xl font-bold">
                Flyers & Vouchers</div>
            </span>

          </div>
          <div className="flex items-center justify-center relative">
            <span className=""><img className=" opacity-75 shadow-lg bg-none " src="./images/gridimgs/unsplash_gxGtqG5ul2g.svg"
              alt="" />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-xl font-bold">
                Article writing</div>
            </span>

          </div>
          <div className="flex items-center justify-center relative">
            <span className=""><img className=" opacity-75 shadow-lg bg-none " src="./images/gridimgs/unsplash_15wIddvL5dU.svg"
              alt="" />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-white text-xl font-bold box-border ">
                Video Editing</div>
            </span>

          </div>
        </div>
      </div> */}
    </div>

  )
};

export default Home;
