import React from 'react';
import { Check } from 'lucide-react';

const RouteOptions = ({ route, isSelected, onSelect }) => {
  return (
    <div 
      className={`route-container ${
        isSelected ? 'border-green-500' : 'border-gray-300 hover:border-gray-400'
      }`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium">{route.name}</p>
          <p className="text-sm text-gray-600 mt-1">
            {route.time}  {route.distance} {route.stations}
            {route.tourSpots > 0 && ` ${route.tourSpots} จุดท่องเที่ยว`}
          </p>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
          isSelected ? 'bg-green-500 border-green-500' : 'border-gray-300'
        }`}>
          {isSelected && <Check className="h-5 w-5 text-white" />}
        </div>
      </div>
    </div>
  );
};

export default RouteOptions;

