export default function Footer() {
    return (
      <footer className="bg-[#000052] text-[#9999BA] text-center text-sm">
        <div className="px-8 sm:px-16 py-8 border-b border-[#9999BA]">
  
          <div className="flex flex-col sm:flex-row justify-between items-center ">
  
            <div className="text-sm text-left my-auto flex-1 text-center">
              ©2024 Lumenai Investments LLC. All rights reserved.
            </div>
            
            <div className="flex flex-1 items-center justify-center gap-4 py-8">
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
  
        <div  className="px-8 sm:px-16 py-8">
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