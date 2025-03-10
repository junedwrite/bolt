import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

// Custom map styles (same as before)
const myStyles = [
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }]
  },
  {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{ "visibility": "off" }]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{ "color": "#dedede" }, { "lightness": 21 }]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }]
  }
];

// Function to extract latitude and longitude from the URL string
const getCoordinatesFromUrl = (url: string | undefined) => {
  if (!url) return null;
  const regex = /(-?\d+\.\d+),\s*(-?\d+\.\d+)/;
  const match = url.match(regex);
  return match ? { lat: parseFloat(match[1]), lng: parseFloat(match[2]) } : null;
};

// Marker component – rendered at fixed coordinates
const MapMarker: React.FC<{ lat: number; lng: number }> = () => (
  <div>
    <img
      src="https://know.dayrade.com/public/stylesheets/icon/nester-pin.svg"
      alt="Marker"
      style={{ width: '30px', height: '30px' }}
    />
  </div>
);

interface MapComponentProps {
  locationUrl?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ locationUrl }) => {
  // Default coordinate if no valid URL is provided
  const defaultCenter = { lat: 19.351354, lng: -81.368048 };
  // markerPosition is set only from locationUrl or defaultCenter
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);

  useEffect(() => {
    if (locationUrl) {
      const parsedCoords = getCoordinatesFromUrl(locationUrl);
      if (parsedCoords) {
        setMarkerPosition(parsedCoords);
      }
    }
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
  <div style={{ width: '100%', height: 'calc(100vw * 9 / 16)', maxHeight: '100vh' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCHEHwSGiIERi2NzArWJ040grySAB8Ngyc" }}
      center={markerPosition}
      zoom={12}
      options={{
        styles: myStyles,
        disableDoubleClickZoom: true,
        clickableIcons: false,
        draggable: true
      }}
    >
      <MapMarker lat={markerPosition.lat} lng={markerPosition.lng} />
    </GoogleMapReact>
  </div>
</div>

    </section>
  );
};

export default MapComponent;
