import React from 'react';
import SearchPanel from './SearchPanel';
import MapView from './MapView';

const MainContent = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-2/5 lg:w-1/3">
          <SearchPanel />
        </div>
        <div className="md:w-3/5 lg:w-2/3">
          <MapView />
        </div>
      </div>
    </div>
  );
};

export default MainContent;