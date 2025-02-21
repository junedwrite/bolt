import React, { useState, useEffect } from 'react';
import { Home, MessageCircle, Download, X } from 'lucide-react';
import ChatBot from './ChatBot';
import ImageGallery from './ImageGallery';
import PropertyDetails from './PropertyDetails';
import ProspectusModal from './ProspectusModal';
import NeighborhoodInfo from './NeighborhoodInfo';
import FloorPlan from './FloorPlan';
import { useApi } from '../context/ApiContext';
function PropertyDetail() {
  // const [isChatOpen, setIsChatOpen] = useState(false);
  const [isProspectusOpen, setIsProspectusOpen] = useState(false);
  const { data, loading, error } = useApi();
  const [propertyDetails, setPropertyDetails] = useState<any>(null);
  useEffect(() => {
    if (data && data.PropertyDetailsFromDB) {
      console.log('data',data)
      setPropertyDetails(data.PropertyDetailsFromDB);
    }
    // const showTimer = setTimeout(() => {
    //   setIsChatOpen(true);
    // }, 2000);

    // const hideTimer = setTimeout(() => {
    //   setIsChatOpen(false);
    // }, 7000);

    return () => {
      // clearTimeout(showTimer);
      // clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[85vh] bg-cover bg-center" 
        style={{ backgroundImage: `url("${data?.TitleImage?.fields.jpgSrc?.text || "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80"}")` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <div className="max-w-4xl text-center px-4">
          <img 
            src="https://know.dayrade.com/public/stylesheets/icon/Nester-Logo-White.svg" 
            alt="Logo" 
            className="w-16 h-16 mb-8 mx-auto"
          />
            <h1 className="text-6xl font-serif mb-6 leading-tight">{data?.PropertyDetailsFromDB?.title || "No title available"}</h1>
            <div className="flex items-center justify-center text-xl space-x-2 mb-8">
              <p>{propertyDetails?.location || "Location.."}</p>
            </div>
            {/* <p className="text-2xl font-light max-w-2xl mx-auto">
              A masterpiece of modern architecture nestled in the prestigious Beverly Hills
            </p> */}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50" />
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <PropertyDetails />
        <ImageGallery />
        <FloorPlan locationUrl={propertyDetails?.locationUrl} />
        <NeighborhoodInfo />
        
        {/* Chat Bot Toggle */}
        {/* <button 
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-50"
        >
          <MessageCircle className="w-6 h-6" />
        </button> */}

        {/* Chat Bot Modal */}
        {/* {isChatOpen && (
          <ChatBot 
            onClose={() => setIsChatOpen(false)} 
            onRequestProspectus={() => setIsProspectusOpen(true)}
            initialMessage="Hello! I'm Ali, your AI assistant. You can ask me anything about the property, neighborhood or the route and estimated times to your work.

At the end of your journey you can enter your email address and we will send you a personalised prospectus tailored to your unique queries and needs."
          />
        )} */}

        {/* Prospectus Modal */}
        {isProspectusOpen && (
          <ProspectusModal onClose={() => setIsProspectusOpen(false)} />
        )}
      </main>
    </div>
  );
}

export default PropertyDetail;