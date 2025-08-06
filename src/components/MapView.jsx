import React from 'react';
import mapImage from '../assets/5AT.png';

const MapView = () => {
  return (
    <div className="map-view h-full min-h-[500px] relative flex justify-center items-center"> {}
      <div className="w-full max-w-7xl h-full flex justify-center items-center"> {}
        <img
          src={mapImage}
          alt="Map with charging stations"
          className="object-contain" style={{ width: '80%', height: 'auto', maxWidth: '1000px' }}
        />
      </div>
    </div>
  );
};

export default MapView;
