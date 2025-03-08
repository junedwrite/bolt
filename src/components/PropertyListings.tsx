import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, SlidersHorizontal, Bed, Bath, Home, DollarSign,Calendar, MapPin } from 'lucide-react';
const API_URL = "https://know.dayrade.com/property/properties";
let PropertiesList: any[]
interface Property {
  id: number;
  title: string;
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type: string;
}
// Map text keys to Lucide icons
const ICONS: Record<string, React.ElementType> = {
  BED: Bed,
  BATH: Bath,
  "SQ FT": Home,
  "YEAR BUILT": Calendar,
};
const properties: Property[] = [
  {
    id: 1,
    title: "Modern Beachfront Villa",
    price: 8500000,
    address: "123 Ocean Drive, Malibu, CA",
    beds: 5,
    baths: 6,
    sqft: 6200,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    type: "Villa"
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    price: 12500000,
    address: "456 Wilshire Blvd, Beverly Hills, CA",
    beds: 4,
    baths: 4.5,
    sqft: 5800,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    type: "Penthouse"
  },
  {
    id: 3,
    title: "Contemporary Mansion",
    price: 15900000,
    address: "789 Sunset Blvd, Los Angeles, CA",
    beds: 7,
    baths: 8,
    sqft: 9500,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    type: "Mansion"
  },
  {
    id: 4,
    title: "Hillside Estate",
    price: 18750000,
    address: "321 Hollywood Hills, Los Angeles, CA",
    beds: 8,
    baths: 9.5,
    sqft: 12000,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80",
    type: "Estate"
  },
  {
    id: 5,
    title: "Oceanfront Paradise",
    price: 22000000,
    address: "567 Pacific Coast Hwy, Malibu, CA",
    beds: 6,
    baths: 7,
    sqft: 8800,
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80",
    type: "Villa"
  },
  {
    id: 6,
    title: "Modern Architectural Marvel",
    price: 16800000,
    address: "890 Mulholland Dr, Los Angeles, CA",
    beds: 5,
    baths: 6.5,
    sqft: 7200,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80",
    type: "Villa"
  },
  {
    id: 7,
    title: "Beverly Hills Compound",
    price: 28500000,
    address: "432 Beverly Park Cir, Beverly Hills, CA",
    beds: 9,
    baths: 11,
    sqft: 15000,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80",
    type: "Estate"
  },
  {
    id: 8,
    title: "Sunset Plaza Residence",
    price: 13900000,
    address: "765 Sunset Plaza Dr, Los Angeles, CA",
    beds: 6,
    baths: 7,
    sqft: 6800,
    image: "https://images.unsplash.com/photo-1600566752547-c4c9586390c9?auto=format&fit=crop&q=80",
    type: "Mansion"
  },
  {
    id: 9,
    title: "Pacific Palisades Estate",
    price: 19500000,
    address: "123 Palisades Dr, Pacific Palisades, CA",
    beds: 7,
    baths: 8.5,
    sqft: 9800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    type: "Estate"
  },
  {
    id: 10,
    title: "Hollywood Hills Modern",
    price: 11200000,
    address: "456 Rising Glen Rd, Los Angeles, CA",
    beds: 5,
    baths: 6,
    sqft: 5500,
    image: "https://images.unsplash.com/photo-1600607688939-ce8a6c25118c?auto=format&fit=crop&q=80",
    type: "Villa"
  },
  {
    id: 11,
    title: "Bel Air Masterpiece",
    price: 32000000,
    address: "789 Bel Air Rd, Los Angeles, CA",
    beds: 10,
    baths: 12,
    sqft: 18000,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80",
    type: "Estate"
  },
  {
    id: 12,
    title: "Century City Penthouse",
    price: 14500000,
    address: "1 Century Dr, Century City, CA",
    beds: 4,
    baths: 4.5,
    sqft: 6200,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
    type: "Penthouse"
  }
];

const PropertyListings: React.FC = () => {
  const [urls, setUrls] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000000]);
  const [selectedType, setSelectedType] = useState<string>('');
  useEffect(() => {
    axios.get(API_URL, {
    //   headers: {
    //     Authorization: `Bearer ${API_TOKEN}`
    //   }
    })
      .then(response => {
        PropertiesList=response?.data?.properties || [];
        console.log('response', response.data);
        setUrls(response.data.properties.map((record: any) => 'https://nester.studio/property?id='+record.fields.propertyId));
        // setUrls(response.data.properties.map((record: any) => 'http://localhost:5173/?id='+record.fields.propertyId));
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-[70vh] bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <div className="max-w-4xl text-center px-4 mb-8">
          <img 
            src="https://know.dayrade.com/public/stylesheets/icon/Nester-Logo-White.svg" 
            alt="Logo" 
            className="w-16 h-16 mb-8 mx-auto"
          />
            <h1 className="text-6xl font-serif mb-6">Find Your Dream Home</h1>
            <p className="text-xl font-light max-w-2xl mx-auto mb-8">
            Discover the finest luxury properties in the Cayman Islands
            </p>
          </div>
          
          {/* Hero Search */}
          <div className="w-full max-w-4xl px-4">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search by location or property type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800"
                >
                  <option value="">All Types</option>
                  <option value="Villa">Villa</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Mansion">Mansion</option>
                  <option value="Estate">Estate</option>
                </select>
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50" />
      </header>

      {/* Property Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-serif mb-2">Luxury Properties</h2>
            <p className="text-gray-600">Showing {PropertiesList?.length || 0} properties</p>
          </div>
          <button className="px-4 py-2 bg-gray-100 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
            <span>More Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PropertiesList?.map(property => (
            <div onClick={() => window.open(`property-details/?id=${property.fields.propertyId}`, '_blank')} key={property.fields.propertyId} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3]">
                <img
                  src={property?.fields?.image.text || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80'}
                  alt={property?.fields?.title ||'TITLE'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                  {property?.type}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif">{property?.fields.title || 'Title'}</h3>
                  <p className="text-xl font-semibold text-indigo-600">{property?.fields?.price}</p>
                  {/* <p className="text-xl font-semibold text-indigo-600">{formatPrice(property?.fields?.price)}</p> */}
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <p>{property?.fields?.location ||'location'}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5" />
                    <span>{property?.beds || ''} beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5" />
                    <span>{property?.baths || ''} baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    <span>{property?.sqft?.toLocaleString() || '' } sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyListings;