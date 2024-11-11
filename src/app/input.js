export default function SearchInput({ label }) {
    return (
      <div className="w-96 relative">
        <input
          type="text"
          placeholder={label.toUpperCase()} 
          className="w-full pl-12 pr-4 p-3 border border-white rounded-full bg-transparent text- font-bold" // Added padding, transparent bg, and increased size
        />
  
        <span>          
          <img src="/images/search-icon.png" alt="Logo" className="size-fit absolute left-3 top-1/2 transform -translate-y-1/2" />
        </span>
        <span>          
          <img src="/images/arrow-right.svg" alt="Logo" className="size-fit absolute right-0 top-1/2 transform -translate-y-1/2" />
        </span>
      </div>
    );
  }
  