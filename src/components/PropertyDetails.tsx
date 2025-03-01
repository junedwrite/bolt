import React, { useState, useEffect } from 'react';
import { Bed, Bath, Square, MapPin, Car } from 'lucide-react';
import { useApi } from '../context/ApiContext';
const PropertyDetails: React.FC = () => {
  const { data, loading, error } = useApi();
  const [propertyDetails, setPropertyDetails] = useState<any>(null);
// Define a type for amenities
type Amenity = {
  icon: keyof typeof ICONS; // Restrict to valid icon keys
  value: string;
};

// Define the available icons
const ICONS: Record<string, React.ElementType> = {
  Bed: Bed,
  Bath: Bath,
  Square: Square,
  Car: Car,
};

interface PropertyAmenitiesProps {
  amenities: Amenity[];
}
  useEffect(() => {
    if (data && data.PropertyDetailsFromDB) {
      setPropertyDetails(data.PropertyDetailsFromDB);
      console.log('data.PropertyDetails?.fields?.description',data.PropertyDetails?.fields?.description)
    }
  }, [data]);
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-serif mb-4">{propertyDetails?.price || "$??"}</h2>
          <div className="flex items-center text-gray-600 mb-6">
            <MapPin className="w-5 h-5 mr-2" />
            <p>{propertyDetails?.location || "Location.."}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
      {propertyDetails?.amenities.map((amenity:{ value: string; label: string }, index:number) => {
        const Icon = ICONS[amenity.label] || Bed; // Fallback to Bed if icon is not found
        return (
          <div key={index} className="flex items-center">
            <Icon className="w-5 h-5 mr-2 text-indigo-600" />
            <span>{amenity.label} {amenity.value}</span>
          </div>
        );
      })}
    </div>

          <button className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Schedule a Viewing
          </button>
        </div>

        <div>
          <h3 className="text-2xl font-serif mb-4">Property Description</h3>
          <div className="text-gray-600 leading-relaxed">
          {data.PropertyDetails?.fields?.description
            ?.split("\n")
            .map((paragraph:string, index:number) => (
              <p key={index} className="mb-4">{paragraph}</p>
            )) || <p>No description available.</p>}
        </div>
          
        </div>
      </div>
    </section>
  );
}

export default PropertyDetails;