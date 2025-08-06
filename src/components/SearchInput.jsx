import React from 'react';
import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <div className="search-input-container flex bg-white rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="ค้นหาสถานที่หรือจุดหมายปลายทาง"
        className="flex-grow p-3 outline-none border-none"
      />
      <button className="search-button">
        <Search className="h-5 w-5" />
        <span>ค้นหา</span>
      </button>
    </div>
  );
};

export default SearchInput;