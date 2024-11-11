import Image from "next/image";
import styles from "./page.module.css";
import SearchInput from "./input.js";

export function Header() {
  return (
    <header className="header-background text-white">      
      <div className="p-4 md:py-8 mx-4 md:mx-16 flex flex-col md:flex-row justify-between items-start md:items-stretch space-y-4 md:space-y-0">
        
        {/* Left side: Logo and Heading (stacked vertically) */}
        <div className="flex flex-col items-start space-y-4 w-full md:w-auto">
          <img src="/images/illumenai-logo.svg" alt="Logo" className="w-32 h-auto" />
          <h1 className="text-4xl md:text-7xl font-bold">News & Events</h1>
        </div>
        
        {/* Right side: Search Bar and Filter List aligned to bottom */}
        <div className="flex flex-col items-start space-y-4 w-full md:w-auto justify-between">
          
          <div className="flex flex-row items-center">
            <SearchInput label="Search" />
            <img src="/images/menu-icon.png" alt="Logo" className="w-5 h-5 cursor-pointer ml-6" />
            {/* <span justify-center	>
             <img src="/images/menu-icon.png" alt="Logo" className="size-fit cursor-pointer flex justify-center	 align" />
            </span> */}
          
          </div>
         
          {/* <img src="/images/menu-icon.png" alt="Logo" className="size-fit cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2" /> */}
      
          <ul className="flex text-xl mt-auto ml-auto">
            <li className="cursor-pointer hover:text-indigo-200 px-4">All</li>
            <li className="cursor-pointer hover:text-indigo-200 px-4">Latest</li>
            <li className="cursor-pointer hover:text-indigo-200 pl-4">Featured</li>
          </ul>
        </div>

      </div>      
    </header>
  );
}

export function Main() {
  return (
    <main className="m-16 px-4 md:px-4 text-[#00004D]">   

      {/* News Cards - 3-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">        

        <div className="bg-white shadow-md rounded-xl ">
          <img src="/images/Website Image 1.png" className="w-fit rounded-xl shadow-md" />
          <div className="p-4">
          <h3 className="text-lf font-semibold">Wealth Management 2030. Successful RIAs of The Future.</h3>
          <p className="text-sm mt-2">Want to know the secrets to competing and growing as an RIA in 2030?...</p>
          </div> 
        </div>
        
        <div className="bg-white shadow-md rounded-xl">
          <img src="/images/Website Image 1.png" className="w-fit rounded-xl shadow-md" />
          <div className="p-4">
          <h3 className="text-lg font-semibold">Card 1</h3>
          <p className="text-sm mt-2">Card content goes here...</p>
          </div> 
        </div>
        
        <div className="bg-white shadow-md rounded-xl ">
          <img src="/images/Website Image 1.png" className="w-fit rounded-xl" />
          <div className="p-4">
          <h3 className="text-lg font-semibold">Card 1</h3>
          <p className="text-sm mt-2">Card content goes here...</p>
          </div> 
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">Card 4</h3>
          <p>Card content goes here...</p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">Card 5</h3>
          <p>Card content goes here...</p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">Card 6</h3>
          <p>Card content goes here...</p>
        </div>
      </div>

    </main>

  );
}

export function Footer() {
  return (
    <footer className="bg-[#000052] text-[#9999BA] text-center text-sm">
      <div className="px-16 py-8 border-b border-white">

        {/* <div className="flex flex-col md:flex-row justify-evenly	 items-center px-4 py-2"> */}
        <div className="">
          <div className="text-sm text-left my-auto">
            ©2024 Lumenai Investments LLC. All rights reserved.
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <img src="/images/x.svg" alt="Logo" className="w-4 " /> 
            <img src="/images/linkedin.svg" alt="Logo" className="w-4 " /> 
          </div>
          <div className="text-sm md:text-right my-auto">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <span className="px-2">|</span>
            <a href="/terms-of-use" className="hover:underline">Terms of Use</a>
          </div>
        </div>

      </div>

      <div  className="px-16 py-8">

        <div className="flex flex-col items-center">
        <img src="/images/Logo.svg" alt="Logo" className="w-22 h-auto" />
          {/* Description Text */}
          <p className="text-center text-sm leading-relaxed py-4">
            Lumenai revolutionizes investment management through AI. Partnering with ETS Asset Factory, Lumenai combines cutting-edge artificial intelligence with deep wealth management expertise.
            Investors and advisors use Lumenai's platform to achieve superior results, save valuable time, and scale their operations efficiently.          </p>
        </div>
        
      </div>
    </footer>
  );
}


export default function Home() {
  return (
    <>

    {/* Header */} 
    <Header />

    <Main />
    
    <Footer />

    </>
  );
}