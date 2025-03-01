import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const FlipBook = () => {
  const propertyDetails = {
    price: "US$11,650,000",
    builtYear: 2024,
    beds: 2,
    baths: 2.5,
    sqft: 4314,
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <HTMLFlipBook
        width={800}
        height={600}
        size="fixed"
        style={{}}
        minWidth={800}
        maxWidth={800}
        minHeight={600}
        maxHeight={600}
        flippingTime={800}
        drawShadow={false} // Disable shadow effect
        useMouseEvents={true}
        clickEventForward={true}
        usePortrait={true}
        startZIndex={1}
        autoSize={false}
        maxShadowOpacity={0} // Remove reflection effect
        showCover={true}
        mobileScrollSupport={true}
        swipeDistance={30}
        showPageCorners={false} // Remove corner reflections
        disableFlipByClick={false}
        startPage={0}
        className="shadow-lg rounded-md"
      >
        {/* Updated Cover Page */}
        <div className="flex w-[400px] h-[500px] font-georgia relative text-white flex-col items-center justify-center text-center p-5 overflow-hidden">
          <img
            src="https://www.cireba.com/caches/1061x680/2024-11-12-07-59-12-167529869314OceanClubItalianrestauranttoSunsetBarexterioroverlookingocean6K1101copy-min.webp"
            alt="Property Image"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>
          <div className="relative z-2 flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold text-center">
              72 Lalique Peninsula Quay - Serenity House In Crystal Harbour
            </h1>
            <p className="text-sm mt-2 text-center">Seven Mile Corridor, Grand Cayman</p>
          </div>
        </div>

        {/* Page 2 - Property Details */}
        <div className="w-[400px] h-[500px] bg-white p-4 border border-gray-300 overflow-hidden flex flex-col">
           {/* Image Section */}
      <img 
        src="https://www.cireba.com/caches/1061x680/2024-11-12-07-59-12-167529869314OceanClubItalianrestauranttoSunsetBarexterioroverlookingocean6K1101copy-min.webp" 
        alt="Luxury Home" 
        className="w-full h-[300px] object-cover"
      />
      
      {/* Property Details */}
      <div className="p-6">
        <span className="text-sm text-gray-600 uppercase">Purchase Price:</span>
        <h2 className="text-2xl font-bold text-black">{propertyDetails.price}</h2>
        {/* Stats Section */}
      <div className="p-4 text-gray-700 grid grid-cols-2 gap-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <img src="https://know.dayrade.com/public/stylesheets/nester-icons/built.svg" alt="Built" className="w-5 h-5" />
          <span>Built: <strong>{propertyDetails.builtYear}</strong></span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://know.dayrade.com/public/stylesheets/nester-icons/beds.svg" alt="Beds" className="w-5 h-5" />
          <span>Beds: <strong>{propertyDetails.beds}</strong></span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://know.dayrade.com/public/stylesheets/nester-icons/baths.svg" alt="Baths" className="w-5 h-5" />
          <span>Baths: <strong>{propertyDetails.baths}</strong></span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://know.dayrade.com/public/stylesheets/nester-icons/area.svg" alt="Sq Ft" className="w-5 h-5" />
          <span>Sq Ft: <strong>{propertyDetails.sqft}</strong></span>
        </div>
      </div>
      </div>
      
      
        </div>

        {/* Normal Pages */}
        {[...Array(2)].map((_, index) => (
          <div
            key={index + 3}
            className="w-[400px] h-[500px] flex flex-col items-center justify-center bg-white p-8 border border-gray-300"
          >
            <h1 className="text-3xl font-bold">Page {index + 3}</h1>
            <p className="text-lg mt-4">This is an example of page {index + 3}.</p>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default FlipBook;
