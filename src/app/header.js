import SearchInput from "./input.js";

export default function Header() {
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