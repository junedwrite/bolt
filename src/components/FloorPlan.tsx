import React, { useState, useEffect } from 'react';
import GoogleMapReact from "google-map-react";

const defaultProps = {
  center: { lat: 19.351354, lng: -81.368048 },
  zoom: 14,
};

type MarkerProps = {
  lat: number;
  lng: number;
  text: string;
};

const Marker: React.FC<MarkerProps> = ({ text }) => (
  <div className="text-red-600 text-xl font-bold">📍 {text}</div>
);

type FloorPlanProps = {
  locationUrl: string;
};

const getCoordinatesFromUrl = (url: string | undefined) => {
  if (!url) return null; // Return null if the URL is undefined or empty
  const regex = /(-?\d+\.\d+),\s*(-?\d+\.\d+)/;
  const match = url.match(regex);
  return match ? { lat: parseFloat(match[1]), lng: parseFloat(match[2]) } : null;
};

const FloorPlan: React.FC<FloorPlanProps> = ({ locationUrl }) => {
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    // Parse coordinates from the provided URL
    const parsedCoords = getCoordinatesFromUrl(locationUrl);
    setCoordinates(parsedCoords);
    console.log('parsedCoords:', parsedCoords);
  }, [locationUrl]);

  return (
    <section className="my-16">
      <div className="mb-8">
        <h2 className="text-3xl font-serif mb-3">Map my Home</h2>
        <p className="text-gray-600">
          Explore the thoughtfully designed layout of this luxury villa
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Main Floor</h3>
            <p className="text-gray-600">4,500 sq ft</p>
          </div>
          {/* Uncomment these buttons if needed for future dynamic interactions */}
          {/* <div className="flex space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MinusSquare className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <PlusSquare className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Maximize2 className="w-6 h-6" />
            </button>
          </div> */}
        </div>

        <div className="h-[450px] w-full">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyB9PcLKWa8tlffRPwBqioAq3415hvR1pBE" }}
            defaultCenter={coordinates || defaultProps.center}
            defaultZoom={defaultProps.zoom}
            options={{
              mapId: "6dad381555b6a8c3", // Custom map style ID
            }}
          >
            {/* Display a marker at the parsed coordinates or fallback to the default center */}
            <Marker
              lat={coordinates ? coordinates.lat : defaultProps.center.lat}
              lng={coordinates ? coordinates.lng : defaultProps.center.lng}
              text="Cayman Islands"
            />
          </GoogleMapReact>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
          <div>
            <h4 className="font-semibold mb-2">Living Room</h4>
            <p className="text-gray-600">800 sq ft</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Kitchen</h4>
            <p className="text-gray-600">400 sq ft</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Dining Room</h4>
            <p className="text-gray-600">350 sq ft</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Master Suite</h4>
            <p className="text-gray-600">750 sq ft</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlan;