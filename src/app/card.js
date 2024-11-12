export default function Card({ newsImage, newsDate, newsHeading, newsText }) {
    return (
      <div className="bg-white rounded-3xl cursor-pointer flex flex-col justify-between">
        <img src={newsImage} className="w-full rounded-3xl shadow-md" alt={newsHeading} />
        <div className="pl-5 pt-5 text-[#27C28C] font-bold text-sm">
          <p>{newsDate}</p>
        </div>
        <div className="p-5 text-[#00004D]">
          <h3 className="text-lg font-semibold">{newsHeading}</h3>
          <p className="text-sm mt-2 pr-16">{newsText}</p>
        </div>
        <div className="relative">
          <img
            src="/images/ReadMoreArrow.svg"
            className="absolute right-1 bottom-1 size-12 z-10 hover:scale-[1.125] active:scale-[1] transform transition duration-[0.25s]"
            alt="Read More Arrow"
          />
          <div className="absolute bottom-7 right-7">
            <div className="w-24 h-24 bg-[#F3F3F3] rounded-full translate-x-12 translate-y-12"></div>
          </div>
        </div>
      </div>
    );
  }
  