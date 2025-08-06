import React, { useState } from 'react';
import { Search, MessageCircle } from 'lucide-react';
import SearchInput from './SearchInput';
import RouteOptions from './RouteOptions';

const SearchPanel = () => {
  const [selectedRoute, setSelectedRoute] = useState(0);
  
  const routes = [
    {
      id: 0,
      name: 'เส้นทางที่แนะนำ',
      time: 'ระยะเวลา 1 ชม. 20 นาที',
      distance: 'ระยะทาง 80 กม.',
      stations: '1 จุดชาร์จ',
      tourSpots: 0
    },
    {
      id: 1,
      name: 'แนะนำสถานที่ท่องเที่ยว (Hidden Gems)',
      tourSpots: 5
    }
  ];
  
  return (
    <div className="search-panel p-4">
      <SearchInput />
      
      <div className="mt-6">
        <h3 className="font-medium mb-2">ตัวเลือกเส้นทาง</h3>
        <div className="space-y-3">
          {routes.map(route => (
            <RouteOptions 
              key={route.id}
              route={route}
              isSelected={selectedRoute === route.id}
              onSelect={() => setSelectedRoute(route.id)}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-6 flex flex-col space-y-3">
        <button className="map-button animate-pulse-green">
          <Search className="h-5 w-5" />
          แสดงแผนที่
        </button>
        <button className="assistant-button">
          <MessageCircle className="h-5 w-5" />
          สอบถามข้อมูลกับผู้ช่วย EVana
        </button>
      </div>
    </div>
  );
};

export default SearchPanel;
