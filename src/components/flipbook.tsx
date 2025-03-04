import React from "react";
import HTMLFlipBook from "react-pageflip";

interface FlipbookProps {
  imageUrl: string;
}

const Flipbook: React.FC<FlipbookProps> = ({ imageUrl }) => {
  imageUrl='https://storage.googleapis.com/generativeartbucket/UserGenerations/cristian/output-84cb3074-0c28-40c0-8796-fbbd86b01c29-2025-02-26-17-43-04-1.png';
 let imageUrl4='https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg';
  let secondImage='https://www.cireba.com/caches/1061x680/2024-11-12-07-59-12-16758127423BEDMasterBedroom-min.webp';
  return (
    <div className="flipbook-container">
      <HTMLFlipBook
        width={600}
        height={600}       // Increased height
        minWidth={600}
        maxWidth={900}
        minHeight={600}    // Increased min height
        maxHeight={1400}   // Increased max height
        flippingTime={600}
        drawShadow={false} // Disable shadow effect
        useMouseEvents={true}
        className="flipbook"
        style={{ border: "1px solid black", overflow: "hidden" }} // Ensure content doesn't overflow
        startPage={0}
        size="fixed" // Prevent unexpected resizing
        usePortrait={false} // Disabling portrait mode
        showCover={true}
        startZIndex={1}
        autoSize={false} // Avoid automatic resizing issues
        maxShadowOpacity={0} // Remove shadow completely
        mobileScrollSupport={true}
        clickEventForward={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {/* Page 1 - Cover Page */}
        <div className="page">
          <div className="flex w-full h-full font-georgia">  {/* Change h-screen to h-full */}
            <div className="flex-1 relative text-white flex items-center justify-center text-center p-5 overflow-hidden">
              <img
                src="https://www.cireba.com/caches/1061x680/2024-11-12-07-59-12-167529869314OceanClubItalianrestauranttoSunsetBarexterioroverlookingocean6K1101copy-min.webp"
                alt="Property Image"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>
              <div className="relative z-2">
                <h1 className="text-2xl font-bold">
                  72 Lalique Peninsula Quay - Serenity House In Crystal Harbour
                </h1>
                <p className="text-sm mt-2">Seven Mile Corridor, Grand Cayman</p>
              </div>
            </div>
            {/* <div className="flex-1 bg-white p-5"> */}
            {/* Additional content if needed */}
            {/* </div> */}
          </div>

        </div>

  {/* ----------------------------------------------------------------Page 2 and page 3 compined ----------------------------------------------------------------*/}
         {/* Page 2 - Left Half of Image */}
        <div className="page image-page left">
          <div
            className="image-half"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundPosition: "left",
            }}
          ></div>
          {/* right side */}
          <div className="purchase-container">
            <span className="purchase-label">Purchase Price:</span>
            <h2 className="purchase-price">
              US<span className="currency-symbol">$</span>16,000,000
            </h2>
          </div>

          {/* right side */}
        </div>

        {/* Page 3 - Right Half of Image */}
        <div className="page image-page right">
          <div
            className="image-half"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundPosition: "right",
            }}
          ></div>
          {/*  */}
          <div className="mt-4 text-gray-700 text-sm px-4">
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <img src="https://know.dayrade.com/public/stylesheets/nester-icons/built.svg" alt="Built" className="w-5 h-5" />
                <span>Built: <strong>1989</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://know.dayrade.com/public/stylesheets/nester-icons/beds.svg" alt="Beds" className="w-5 h-5" />
                <span>Beds: <strong>8</strong></span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <img src="https://know.dayrade.com/public/stylesheets/nester-icons/area.svg" alt="Sq Feet" className="w-5 h-5" />
                <span>Sq Feet: <strong>8,342</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://know.dayrade.com/public/stylesheets/nester-icons/baths.svg" alt="Baths" className="w-5 h-5" />
                <span>Baths: <strong>6.5</strong></span>
              </div>
            </div>
          </div>
          {/*  */}
        </div>

   {/*------------------------------------------------------------------ Page 2 and page 3 compined ----------------------------------------------------------------- */}








{/*------------------------------------------------------------- Page 4 and page 5 compined ----------------------------------------------------------------- */}

<div className="page">
  <div style={{paddingTop:'10%',paddingBottom:'10%'}} className="flex justify-end w-full h-[600px]">
    <div
      // className="border-r-2 border-black"
      className=""
      style={{
        // width: "70%", // Explicitly set width to 70%
        width: "100%", // Explicitly set width to 70%
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "200% 100%",
        backgroundPosition: "left",
        paddingTop:'8%'
      }}
    ></div>
  </div>
</div>

{/* Page 7 - Right 30% */}
<div className="page">
<div style={{paddingTop:'10%',paddingBottom:'10%'}} className="flex w-full h-[600px]">
  <div
    style={{
      width: "30%", // Explicitly set width to 30%
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "200% 100%",
      backgroundPosition: "right",
    }}
  ></div>
  
<div style={{width: "68%",paddingLeft:'3%',paddingRight:'3%'}}>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
      {/* <img src="your-image.jpg" alt="Centered" /> */}
  <img className="" src="https://know.dayrade.com/public/stylesheets/icon/Nester-Logo.svg" alt="" />
    </div>
    <p>
      Experience a truly exquisite lifestyle with this 7-bedroom, 6-bathroom luxury home, perfectly nestled
      within the exclusive Lalique Pointe area of Crystal Harbour in the beautiful Cayman Islands.
    </p>
    <p>
      This stunning coastal residence takes waterfront living to a whole new level, perched on a prime lot
      and offering unrivaled panoramic views of the awe-inspiring Caribbean Sea blues.
    </p>
  </div>
</div>
</div>
{/*-------------------------------------------------------------- Page 4 and page 5 compined ----------------------------------------------------------------- */}


   {/*-------------------------------------------------------------- Page 6 and page 7 compined ----------------------------------------------------------------- */}
 {/* Page 6 - Left 70% */}
<div className="page">
<p style={{textAlign:'left',paddingLeft:'3%',fontWeight:'500',fontSize:'x-large'}}>Living Room</p>
  <div style={{paddingTop:'5%',paddingBottom:'5%'}} className="flex justify-end w-full h-[450px]">
    <div
      className="border-r-2 border-black"
      style={{
        width: "98%", // Explicitly set width to 70%
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "200% 100%",
        backgroundPosition: "left",
      }}
    ></div>
  </div>
  <div className="gallery-abcdef">
            <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 1" />
            <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 2" />
            {/* <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 3" /> */}
            {/* <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 4" /> */}
            <div
          className="border-r-2 border-black"
          style={{
            width: "30%", // Explicitly set width to 70%
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "200% 100%",
            backgroundPosition: "left",
          }}
        ></div>
        </div>
</div>

{/* Page 7 - Right 30% */}
<div className="page">
  <h1 style={{visibility:'hidden',fontSize:'x-large'}}>-</h1>
  <div style={{paddingTop:'5%',paddingBottom:'5%'}}  className="flex w-full h-[450px]">
    <div
      style={{
        width: "30%", // Explicitly set width to 30%
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "200% 100%",
        backgroundPosition: "right",
      }}
    ></div>
    <div style={{width: "68%",paddingLeft:'3%',paddingRight:'3%'}}>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
      {/* <img src="your-image.jpg" alt="Centered" /> */}
  {/* <img className="" src="https://know.dayrade.com/public/stylesheets/icon/Nester-Logo.svg" alt="" /> */}
    </div>
    <p> "
      Experience a truly exquisite lifestyle with this 7-bedroom, 6-bathroom luxury home, perfectly nestled
      within the exclusive Lalique Pointe area of Crystal Harbour in the beautiful Cayman Islands.
    </p>
    <p>
      This stunning coastal residence takes waterfront living to a whole new level, perched on a prime lot
      and offering unrivaled panoramic views of the awe-inspiring Caribbean Sea blues. "
    </p>
  </div>
  </div>
  <div className="gallery-abcdef">
      <span
      style={{
        width: "5%", // Explicitly set width to 30%
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "200% 100%",
        backgroundPosition: "right center",
        height:'106px'
      }}
    ></span>
      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 4" />
      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 4" />
        </div>
</div>

   {/*--------------------------------------\\\\\\\\\------------------------ Page 8 and page 9 compined ----------------------------------------------------------------- */}
 {/* Page 8 - Left 70% */}
<div className="page">
  <div className="flex justify-end w-full h-[400px]">
    <div
      className="border-r-2 border-black"
      style={{
        width: "70%", // Explicitly set width to 70%
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "200% 100%",
        backgroundPosition: "left",
      }}
    ></div>
  </div>
</div>

{/* Page 9 - Right 30% */}
<div className="page">
  <div className="flex w-full h-[400px]">
    <div
      style={{
        width: "30%", // Explicitly set width to 30%
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "200% 100%",
        backgroundPosition: "right",
      }}
    ></div>
  </div>
</div>

   {/*-------------------------------------------------------------- Page 8 and page 9 compined ----------------------------------------------------------------- */}

      </HTMLFlipBook>
    </div>
  );
};

export default Flipbook;
