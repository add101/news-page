import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header.js";
import Footer from "./footer";
import Card from "./card.js";
import Cardjson from "./card-json.js";
import { getCardData } from './card-json';

export async function Main() { 
  const cardData = await getCardData(); 

  return (
    <main className="mx-6 sm:m-16 mt-8 px-4 md:px-4 ">
      <div className="mb-8 text-[#528CD3] font-bold text-xs tracking-wider cursor-pointer">
        <a>&lt;&nbsp; BACK</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <Card
            key={card.id} 
            newsImage={card.newsImage}
            newsDate={card.newsDate}
            newsHeading={card.newsHeading}
            newsText={card.newsText}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <div className="inline-flex items-center mt-16 mb-10 sm:mb-2 border border-[#528CD3] rounded-full text-[#528CD3] hover:bg-gray-200 cursor-pointer">
          <span className="text-sm font-semibold px-6 py-3 tracking-wider">LOAD MORE</span>
          <img src="/images/arrow-down.svg" alt="Down Arrow" className="w-12 h-12 ml-2" />
        </div>
      </div>
    </main>
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