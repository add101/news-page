import Image from "next/image";
import styles from "./page.module.css";
import SearchInput from "./input.js";
import Card from "./card.js";

export function Header() {
  return (
    <header className="header-background text-white">      
      <div className="p-4 pt-8 md:py-16 mx-4 md:mx-16 flex flex-col md:flex-row  justify-between items-center md:items-start md:items-stretch space-y-4 md:space-y-0 ">

        <div className="flex flex-col items-center md:items-start space-y-8 w-full md:w-auto">
          <div className="flex items-center justify-between w-full md:w-auto my-4">
            <a>
              <img src="/images/illumenai-logo.svg" alt="Logo" className="w-44 h-auto text-left"/>
            </a>
            <img src="/images/menu-icon.png" alt="illumen logo" className="w-5 h-5 cursor-pointer block sm:hidden" />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold pb-4 items-center md:items-start">News & Events</h1>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-4 w-full md:w-auto justify-between  md:relative">          
          <div className="flex flex-row items-center">
            <SearchInput label="Search" />
            <div className="">
              <img src="/images/menu-icon.png" alt="Logo" className="w-6 ml-8 cursor-pointer hidden sm:block" />
            </div>
          </div>         
          <ul className="flex text-xl mt-auto sm:justify-center md:justify-start pb-4">
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
    <main className="m-16 mt-8 px-4 md:px-4 ">
      <div className="mb-8 text-[#528CD3] font-bold text-xs tracking-wider cursor-pointer">
        <a>&lt;&nbsp; BACK</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />        
      </div>
      <div className="flex justify-center">
        <div className="inline-flex items-center mt-16 border border-[#528CD3] rounded-full text-[#528CD3] hover:bg-gray-200  cursor-pointer">
          <span className="text-sm font-semibold  px-6 py-3 tracking-wider">LOAD MORE</span>
          <img src="/images/arrow-down.svg" alt="Down Arrow" className="w-12 h-12 ml-2"/>
        </div>
      </div>

    </main>
  );
}



export function Footer() {
  return (
    <footer className="bg-[#000052] text-[#9999BA] text-center text-sm">
      <div className="px-16 py-8 border-b border-[#9999BA]">

        <div className="flex justify-between items-center ">

          <div className="text-sm text-left my-auto flex-1">
            ©2024 Lumenai Investments LLC. All rights reserved.
          </div>
          
          <div className="flex items-center justify-center gap-4 py-4">
            <a>
             <img src="/images/x.svg" alt="Logo" className="w-5 hover:scale-[1.1] cursor-pointer" /> 
            </a>
            <a>
            <img src="/images/linkedin.svg" alt="Logo" className="w-5 hover:scale-[1.1] cursor-pointer" /> 
            </a>
            
          </div>
          <div className="text-sm md:text-right my-auto flex-1">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <span className="px-2">|</span>
            <a href="/terms-of-use" className="hover:underline">Terms of Use</a>
          </div>
          
        </div>

      </div>

      <div  className="px-16 py-8">
        <div className="flex flex-col items-center">
        <img src="/images/Logo.svg" alt="Logo" className="w-22 h-auto" />
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
    <Header />
    <Main />    
    <Footer />
    </>
  );
}