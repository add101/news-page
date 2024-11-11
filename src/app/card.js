
const Card = () => {
    return (
<>
        <div className="card-cutout bg-white rounded-3xl cursor-pointer">
            <img src="/images/Website Image 1.png" className="w-full rounded-3xl shadow-md " />
            <div className="pl-5 pt-5 text-[#27C28C] font-bold text-sm ">
                <p>4 June 2024</p>
            </div>
            <div className="p-5 text-[#00004D]">
                <h3 className="text-lf font-semibold">Wealth Management 2030. Successful RIAs of The Future.</h3>
                <p className="text-sm mt-2 pr-16">Want to know the secrets to competing and growing as an RIA in 2030?...</p>
            </div> 
            <div className="relative">
                <img src="/images/ReadMoreArrow.svg" className="absolute right-1 bottom-1 size-12 z-10 hover:scale-[1.125] transform transition duration-[0.25s]" alt="Read More Arrow" ></img>
                <div className="absolute bottom-7 right-7">
                    <div className="w-24 h-24 bg-[#F3F3F3] rounded-full translate-x-12 translate-y-12"></div>
                </div>            
            </div>
        </div>  


{/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/images/Website Image 1.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    <div className="relative">
        <img src="/images/ReadMoreArrow.svg" className="absolute right-1 bottom-1 size-12 z-10 hover:scale-[1.125] transform transition duration-[0.25s]" alt="Read More Arrow" ></img>
            <div className="absolute bottom-7 right-7">
                <div className="w-24 h-24 bg-[#F3F3F3] rounded-full translate-x-12 translate-y-12"></div>
            </div>            
    </div>
</div> */}



</>

    );
  };
  
  export default Card;
  