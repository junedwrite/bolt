import React from "react";
import HTMLFlipBook from "react-pageflip";

interface FlipbookProps {
  property: any;
  Amenity:any
}
const iconMap: Record<FlipbookProps["Amenity"], string> = {
  "BED": "https://know.dayrade.com/public/stylesheets/nester-icons/beds.svg",
  "BATH": "https://know.dayrade.com/public/stylesheets/nester-icons/baths.svg",
  "SQ FT": "https://know.dayrade.com/public/stylesheets/nester-icons/area.svg",
  "YEAR BUILT": "https://know.dayrade.com/public/stylesheets/nester-icons/built.svg"
};
const Flipbook: React.FC<FlipbookProps> = ({ property }) => {
  let PropertyDetails = property.PropertyDetails || []
  let upscaleImagesArray = property.upscaleImagesArray || []
  let PropertyDetailsFromDB = property.PropertyDetailsFromDB || []
  console.log('propertyDetails in Flipbook', property);
  let secondImage = 'https://www.cireba.com/caches/1061x680/2024-11-12-07-59-12-16758127423BEDMasterBedroom-min.webp';
  let thirdImage = 'https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg';
  return (
    <div className="flipbook-container">
      <HTMLFlipBook
        width={540}
        height={765}       // Updated height
        minWidth={600}
        maxWidth={900}
        minHeight={600}
        maxHeight={1400}
        flippingTime={600}
        drawShadow={false} // Disable shadow effect
        useMouseEvents={true}
        className="flipbook"
        // style={{ border: "1px solid black", overflow: "hidden" }} // Ensure content doesn't overflow
        style={{ boxShadow: "3px 3px 6px rgba(0,0,0,0.3), -3px -3px 6px rgba(255,255,255,0.5)" }} // Ensure content doesn't overflow
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
                src={PropertyDetails?.fields?.image?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'}
                alt="Property Image"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>
              <div className="relative z-2">
                <h1 className="text-2xl description-font">
                  {PropertyDetails?.fields?.title || 'Title'}
                </h1>
                <p className="text-sm mt-2 description-font">{PropertyDetails?.fields?.location || 'cayman islands'}</p>
              </div>
            </div>
            {/* <div className="flex-1 bg-white p-5"> */}
            {/* Additional content if needed */}
            {/* </div> */}
          </div>

        </div>

        {/* --{1}---------2-start----------------------------------------------------Page 2 and page 3 compined ----------------------------------------------------------------*/}
        {/* Page 2 - Left Half of Image */}
        <div className="page image-page left leftPage">
          <div
            className="image-half"
            style={{
              backgroundImage: `url(${upscaleImagesArray[0]?.upscaleImages[0]?.fields?.image_url?.text || upscaleImagesArray[0]?.fields?.jpgSrc?.text})`,
              backgroundPosition: "left",
            }}
          ></div>
          {/* right side */}
          <div className="purchase-container">
            <span className="purchase-label">Purchase Price:</span>
            <h2 className="purchase-price">
              {PropertyDetails?.fields?.price || '$..'}
            </h2>
          </div>

          {/* right side */}
        </div>

        {/* Page 3 - Right Half of Image */}
        <div className="page image-page right rightPage">
          <div
            className="image-half"
            style={{
              backgroundImage: `url(${upscaleImagesArray[0]?.upscaleImages[0]?.fields?.image_url?.text || upscaleImagesArray[0]?.fields?.jpgSrc?.text})`,
              backgroundPosition: "right",
            }}
          ></div>
          {/*  */}
          <div className="mt-4 text-gray-700 text-sm px-4">
      <div className="grid grid-cols-2 gap-4">
        {PropertyDetailsFromDB.amenities.map((amenity:any, index:number) => (
          <div key={index} className="flex items-center gap-2">
            <img src={iconMap[amenity?.label] || 'https://know.dayrade.com/public/stylesheets/icon/Nester-Logo.svg'} alt={amenity?.label} className="w-5 h-5" />
            {/* <span>{amenity?.label}: <strong>{amenity?.value}</strong></span> */}
            <span>{amenity?.label}: {amenity?.value}</span>
          </div>
        ))}
      </div>
    </div>
          {/*  */}
        </div>

        {/*-------------2-end----------------------------------------------------- Page 2 and page 3 compined ----------------------------------------------------------------- */}








        {/*--{2}--------3-start-------------------------------------------------- Page 4 and page 5 compined ----------------------------------------------------------------- */}

        <div className="page leftPage">
          <div style={{ paddingTop: '30%' }} className="flex justify-end w-full h-[600px]">
            <div
              // className=""
              className=""
              style={{
                // width: "70%", // Explicitly set width to 70%
                width: "100%", // Explicitly set width to 70%
                backgroundImage: `url(${upscaleImagesArray[0]?.upscaleImages[1]?.fields?.image_url?.text || upscaleImagesArray[0]?.fields?.jpgSrc?.text} )`,
                backgroundSize: "200% 100%",
                backgroundPosition: "left",
                paddingTop: '8%'
              }}
            ></div>
          </div>
        </div>

        {/* Page 7 - Right 30% */}
        <div className="page rightPage">
          <div style={{ paddingTop: '30%' }} className="flex w-full h-[600px]">
            <div
              style={{
                width: "50%", // Explicitly set width to 30%
                backgroundImage: `url(${upscaleImagesArray[0]?.upscaleImages[1]?.fields?.image_url?.text || upscaleImagesArray[0]?.fields?.jpgSrc?.text})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "right",
              }}
            ></div>

            <div style={{ width: "68%", paddingLeft: '3%', paddingRight: '3%' }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                {/* <img src="your-image.jpg" alt="Centered" /> */}
                <img className="" src="https://know.dayrade.com/public/stylesheets/icon/Nester-Logo.svg" alt="" />
              </div>
              <div style={{ maxHeight: "200px", maxWidth: "270px", minWidth: "200px", padding: "2px" }}>
              <p className="description-font">{upscaleImagesArray[0]?.fields?.Image_description || 'Description'}</p>
              </div>
            </div>
          </div>
        </div>
        {/*---------3-end----------------------------------------------------- Page 4 and page 5 compined ----------------------------------------------------------------- */}


        {/*--{3}-------4-start---------------------------------------------------- Page 6 and page 7 compined ----------------------------------------------------------------- */}
       {/* Page 6 - Left 70% */}
        <div className="page leftPage">
          <p className="description-font" style={{ textAlign: 'left', paddingLeft: '3%',  fontSize: 'x-large' }}>{upscaleImagesArray[1]?.fields?.roomType || upscaleImagesArray[1]?.fields?.imageType}</p>
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex justify-end w-full h-[450px]">
            <div
              className=""
              style={{
                width: "98%", // Explicitly set width to 70%
                backgroundImage: `url(${upscaleImagesArray[1]?.fields?.jpgSrc?.text})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "left",
              }}
            ></div>
          </div>
          <div className="gallery-abcdef">
            <img style={{ paddingLeft: "2%" }} src={upscaleImagesArray[1]?.upscaleImages[0]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 3" />
            <img src={upscaleImagesArray[1]?.upscaleImages[3]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 4" />
          </div>
        </div>

        {/* Page 7 - Right 30% */}
        <div className="page rightPage">
          <h1 style={{ visibility: 'hidden', fontSize: 'x-large' }}>-</h1>
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex w-full h-[450px]">
            <div
              style={{
                width: "30%", // Explicitly set width to 30%
                backgroundImage: `url(${upscaleImagesArray[1]?.fields?.jpgSrc?.text})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "right",
              }}
            ></div>
            <div style={{ width: "68%", paddingLeft: '3%', paddingRight: '3%' }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
              </div>
              <p className="description-font">{upscaleImagesArray[1]?.fields?.Image_description || 'description'}</p>
            </div>
          </div>
          <div className="gallery-abcdef">
            <img src={upscaleImagesArray[1]?.upscaleImages[3]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 4" />
            <img style={{ paddingRight: "2%" }} src={upscaleImagesArray[1]?.upscaleImages[4]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 4" />
          </div>
        </div>

  {/*---------4--end--------------------------------------------------- Page 6 and page 7 compined ----------------------------------------------------------------- */}
       


        {/*---{4}-------5-start-------------------2 -combined-page--------\\\\\\\\\------------------------ Page 8 and page 9 compined ----------------------------------------------------------------- */}
        {/* Page 8 - Left 70% */}
        <div className="page leftPage">
          <p className="description-font" style={{ textAlign: 'left', paddingLeft: '3%',  fontSize: 'x-large' }}>{upscaleImagesArray[2]?.fields?.roomType || upscaleImagesArray[2]?.fields?.imageType}</p>
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex justify-end w-full h-[450px]">
            <div
              className=""
              style={{
                width: "98%", // Explicitly set width to 70%
                backgroundImage: `url(${upscaleImagesArray[2]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "left",
              }}
            ></div>
          </div>
          <div style={{ paddingLeft: '3%', paddingRight: '3%' }}>
            <div style={{ maxHeight: "200px", maxWidth: "350px", minWidth: "350px", padding: "2px" }}>
            <p className="description-font">{upscaleImagesArray[0]?.fields?.Image_description || 'Description'}</p>
            </div>
          </div>
        </div>

        {/* Page 9 - Right 30% */}
        <div className="page rightPage">
          <h1 style={{ visibility: 'hidden', fontSize: 'x-large' }}>-</h1>
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex w-full h-[450px]">
            <div
              style={{
                width: "50%", // Explicitly set width to 30%
                backgroundImage: `url(${upscaleImagesArray[2]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "right",
              }}
            ></div>
            <div className="thumbnail-container-a1b2c3">
              <img src={upscaleImagesArray[2]?.upscaleImages[1]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 1" />
              <img src={upscaleImagesArray[2]?.upscaleImages[2]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 2" />
              <img src={upscaleImagesArray[2]?.upscaleImages[3]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 3" />
              <img src={upscaleImagesArray[2]?.upscaleImages[4]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 4" />
            </div>
          </div>
        </div>

        {/*-----------------5-end--------------------------------------------- Page 8 and page 9 compined ----------------------------------------------------------------- */}








        {/*----{5}---------6-start----------------3-combine page-------------------------------- Page 10 and page 11 compined ----------------------------------------------------------------- */}
        {/* Left 70% */}
        <div className="page leftPage">
          {/* <p style={{textAlign:'left',paddingLeft:'3%',fontWeight:'500',fontSize:'x-large'}}>Living Room</p> */}
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex justify-end w-full h-[450px]">
            <div className="sixth-page-thumbnail-container-a1b2c3">
              <img src={upscaleImagesArray[3]?.upscaleImages[1]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 1" />
              <img src={upscaleImagesArray[3]?.upscaleImages[2]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 2" />
              <img src={upscaleImagesArray[3]?.upscaleImages[3]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 3" />
              <img src={upscaleImagesArray[3]?.upscaleImages[4]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 4" />
              
            </div>
            <p className="Heading" style={{ textAlign: 'left', paddingLeft: '3%',  fontSize: 'x-large' }}>{upscaleImagesArray[3]?.fields?.roomType || upscaleImagesArray[3]?.fields?.imageType}</p>
            <div>

            </div>
            {/* <div className="border-r-2 border-black" */}
            <div className=""
              style={{
                width: "50%", // Explicitly set width
                backgroundImage: `url(${upscaleImagesArray[3]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "left",
                position: "fixed",
                bottom: 20,
                // left: 0,
                height: "460px", // Adjust the height as needed
              }}
            ></div>

          </div>

        </div>

        {/*  Right 95% */}
        <div className="page rightPage">
          <h1 style={{ visibility: 'hidden', fontSize: '0px' }}>-</h1>
          <div style={{ paddingLeft: '3%', paddingRight: '3%' }}>
            <div style={{ maxHeight: "200px", maxWidth: "270px", minWidth: "200px", overflow: "auto", padding: "2px" }}>
           <p className="description-font">{upscaleImagesArray[3]?.fields?.Image_description || 'Description'}</p>
            </div>
          </div>
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex w-full h-[450px]">
            <div
              style={{
                width: "95%", // Explicitly set width to 30%
                backgroundImage: `url(${upscaleImagesArray[3]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "right",
                position: "fixed",
                bottom: 20,
                // left: 0,
                height: "460px",
              }}
            ></div>
            {/* <div className="thumbnail-container-a1b2c3">
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 1" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 2" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 3" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 4" />
                  </div> */}
          </div>
          {/* <div className="thumbnail-container-a1b2c3">
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 1" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 2" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 3" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 4" />
                  </div> */}
        </div>

        {/*-----------------6-end--------------------------------------------- Page 10 and page 11 compined ----------------------------------------------------------------- */}





        {/*-----{6}---------7--start---------------------------------------------- Page 12 and page 13 compined ----------------------------------------------------------------- */}
        {/* Page 12 - Left 70% */}
        <div className="page leftPage">
          <div className="sixth-page-container">
            <div>
              <p  className="sixth-page-title description-font">{upscaleImagesArray[4]?.fields?.roomType || upscaleImagesArray[4]?.fields?.imageType}</p>
            </div>
            <div className="sixth-page-description">
              <p className="description-font">
              {upscaleImagesArray[4]?.fields?.Image_description || 'Description'}
              </p>
            </div>
          </div>
          <div className="flex justify-end w-full h-[100px]">
            <div
              className=""
              style={{
                width: "98%", // Explicitly set width to 70%
                backgroundImage: `url(${upscaleImagesArray[4]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "left",
                maxHeight: "1px",
                visibility: "hidden"
              }}
            ></div>
          </div>
          <div
            className=""
            style={{
              width: "100%", // Explicitly set width to 70%
              backgroundImage: `url(${upscaleImagesArray[4]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
              backgroundSize: "200% 100%",
              backgroundPosition: "left",
              minHeight: "506px"
            }}
          ></div>
        </div>

        {/* Page 13 - Right 30% */}
        <div className="page rightPage">
          <h1 style={{ visibility: 'hidden', fontSize: 'x-large' }}>-</h1>
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex w-full h-[194px]">
            <div
              style={{
                width: "30%", // Explicitly set width to 30%
                backgroundImage: `url(${upscaleImagesArray[4]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "right",
                maxHeight: "1px",
                visibility: "hidden"
              }}
            ></div>
            <div className="thumbnail-container-a1b2c3">
              <img src={upscaleImagesArray[4]?.upscaleImages[1]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 1" />
              <img src={upscaleImagesArray[4]?.upscaleImages[2]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 1" />
              <img src={upscaleImagesArray[4]?.upscaleImages[3]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 1" />
              <img src={upscaleImagesArray[4]?.upscaleImages[4]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 1" />
            </div>
          </div>
          <div
            style={{
              width: "30%", // Explicitly set width to 30%
              backgroundImage: `url(${upscaleImagesArray[4]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
              backgroundSize: "200% 100%",
              backgroundPosition: "right",
              minHeight: "506px"
            }}
          ></div>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta odio non repellendus minima, nobis consequatur adipisci unde laboriosam sapiente officiis laudantium, delectus ut quos perspiciatis? Totam quam at tempore.</p> */}
          {/* <div className="thumbnail-container-a1b2c3">
                <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 1" />
                <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 2" />
                <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 3" />
                <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 4" />
            </div> */}
        </div>

        {/*---------------7 end----------------------------------------------- Page 12 and page 13 compined ----------------------------------------------------------------- */}





        {/*-----{7}--------8--start----------------------------------------------- Page 14 and page 15 compined ----------------------------------------------------------------- */}
        {/* Page 14 - Left 20% */}
        <div className="page leftPage">
          <p style={{ textAlign: 'left', paddingLeft: '10%',  fontSize: 'x-large' }}>{upscaleImagesArray[5]?.fields?.roomType || upscaleImagesArray[5]?.fields?.imageType}</p>
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex justify-end w-full h-[450px]">
            <div style={{ maxHeight: "200px", maxWidth: "270px", minWidth: "200px", overflow: "auto", padding: "2px" }}>
              <p className="description-font">{upscaleImagesArray[5]?.fields?.Image_description || 'Description'}</p>
            </div>

            <div
              className=""
              style={{
                width: "50%", // Explicitly set width to 70%
                backgroundImage: `url(${upscaleImagesArray[5]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "left",
              }}
            ></div>
          </div>
          <div className="gallery-abcdef">
            <img src={upscaleImagesArray[5]?.upscaleImages[1]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 3" />
            <img src={upscaleImagesArray[5]?.upscaleImages[2]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 4" />

          </div>
        </div>

        {/* Page 15 - Right 80% */}
        <div className="page rightPage">
          <h1 style={{ visibility: 'hidden', fontSize: 'x-large' }}>-</h1>
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex w-full h-[450px]">
            <div
              style={{
                width: "90%", // Explicitly set width to 30%
                backgroundImage: `url(${upscaleImagesArray[5]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "right",
              }}
            ></div>
            
          </div>
          <div className="gallery-abcdef">
            <img src={upscaleImagesArray[5]?.upscaleImages[3]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 4" />
            <img src={upscaleImagesArray[5]?.upscaleImages[4]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 4" />
          </div>
        </div>

        {/*-------------8 end------------------------------------------------- Page 14 and page 15 compined ----------------------------------------------------------------- */}

        {/*---{8}----------9 start------------------------------------------------- Page 16 and page 17 compined ----------------------------------------------------------------- */}
        {/* Left 70% */}
        <div className="page leftPage">
          {/* <p style={{textAlign:'left',paddingLeft:'3%',fontWeight:'500',fontSize:'x-large'}}>Living Room</p> */}
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex justify-end w-full h-[450px]">
            <div className="sixth-page-thumbnail-container-a1b2c3">
              <img src={upscaleImagesArray[6]?.upscaleImages[1]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 1" />
              <img src={upscaleImagesArray[6]?.upscaleImages[2]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 1" />
              <img src={upscaleImagesArray[6]?.upscaleImages[3]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 1" />
              <img src={upscaleImagesArray[6]?.upscaleImages[4]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 1" />
            </div>

            <div>

            </div>
            {/* <div className="border-r-2 border-black" */}
            <div className=""
              style={{
                width: "50%", // Explicitly set width
                backgroundImage: `url(${upscaleImagesArray[6]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "left",
                position: "fixed",
                top: 99,
                // left: 0,
                height: "460px", // Adjust the height as needed
              }}
            ></div>

          </div>

        </div>

        {/*  Right 95% */}
        <div className="page rightPage">
          <h1 style={{ visibility: 'hidden', fontSize: 'x-large' }}>-</h1>
          <div style={{ paddingLeft: '3%', paddingRight: '3%' }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
              <p className="Heading" style={{ textAlign: 'left', paddingLeft: '3%',  fontSize: 'x-large' }}>{upscaleImagesArray[6]?.fields?.roomType || upscaleImagesArray[6]?.fields?.imageType}</p>
            </div>
          </div>
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex w-full h-[450px]">
            <div
              style={{
                width: "95%", // Explicitly set width to 30%
                backgroundImage: `url(${upscaleImagesArray[6]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "right",
                // position: "fixed",
                // bottom: 20,
                // left: 0,
                height: "460px",
              }}
            ></div>
          </div>
          <div className="seventh-description">
            <p className="description-font">{upscaleImagesArray[6]?.fields?.Image_description || 'Description'}</p>
          </div>

        </div>
        {/*-------------9 end------------------------------------------------- Page 16 and page 17 compined ----------------------------------------------------------------- */}






        {/*----{9}---------10 start------------------------------------------------- Page 18 and page 19 compined ----------------------------------------------------------------- */}
        <div className="page leftPage">
          {/* <p style={{textAlign:'left',paddingLeft:'3%',fontWeight:'500',fontSize:'x-large'}}>Living Room</p> */}
          <div style={{ position: "relative", top: "36px", paddingBottom: '5%' }} className="flex justify-end w-full h-[216px]">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="gallery-abcdef">
                <img style={{ paddingLeft: "10px" }} src={upscaleImagesArray[7]?.upscaleImages[1]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 3" />
                <img style={{ paddingRight: "5px" }} src={upscaleImagesArray[7]?.upscaleImages[2]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 4" />
              </div>
              <p className="Heading" style={{ textAlign: 'left', paddingLeft: '12.5%', paddingBottom: "10%", paddingTop: "5%",  fontSize: 'x-large' }}>{upscaleImagesArray[7]?.fields?.roomType || upscaleImagesArray[7]?.fields?.imageType}</p>
              <div style={{ maxHeight: "200px", maxWidth: "270px", minWidth: "200px", overflow: "visible", paddingRight: "30px" }}>
                <p className="description-font">{upscaleImagesArray[7]?.fields?.Image_description || 'Description'}</p>
              </div>
            </div>
            {/* <div className="border-r-2 border-black" */}
            <div className=""
              style={{
                width: "50%", // Explicitly set width
                backgroundImage: `url(${upscaleImagesArray[7]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "left",
                position: "fixed",
                bottom: 20,
                // left: 0,
                height: "460px", // Adjust the height as needed
              }}
            ></div>

          </div>

        </div>

        {/*  Right 95% */}
        <div className="page rightPage">
          <h1 style={{ visibility: 'hidden', fontSize: 'x-large' }}>-</h1>
          <div className="gallery-abcdef">
            <img style={{ paddingLeft: "5px" }} src={upscaleImagesArray[7]?.upscaleImages[3]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 3" />
            <img style={{ paddingRight: "10px" }} src={upscaleImagesArray[7]?.upscaleImages[4]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 4" />

          </div>
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex w-full h-[450px]">
            <div
              style={{
                width: "95%", // Explicitly set width to 30%
                backgroundImage: `url(${upscaleImagesArray[7]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "right",
                position: "fixed",
                bottom: 20,
                // left: 0,
                height: "460px",
              }}
            ></div>
            {/* <div className="thumbnail-container-a1b2c3">
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 1" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 2" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 3" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 4" />
                  </div> */}
          </div>
          {/* <div className="thumbnail-container-a1b2c3">
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 1" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 2" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 3" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 4" />
                  </div> */}
        </div>

        {/*-------------10 end------------------------------------------------- Page 18 and page 19 compined ----------------------------------------------------------------- */}




        {/*-----{10}--------11 start------------------------------------------------- Page 20 and page 21 compined ----------------------------------------------------------------- */}
        <div className="page leftPage">
          {/* <p style={{textAlign:'left',paddingLeft:'3%',fontWeight:'500',fontSize:'x-large'}}>Living Room</p> */}
          <div style={{ position: "relative", top: "36px", paddingBottom: '5%' }} className="flex justify-end w-full h-[216px]">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="gallery-abcdef">
                <img style={{ paddingLeft: "10px" }} src={upscaleImagesArray[8]?.upscaleImages[1]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 3" />
                <img style={{ paddingRight: "5px" }} src={upscaleImagesArray[8]?.upscaleImages[2]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 4" />
              </div>

            </div>
            {/* <div className="border-r-2 border-black" */}
            <div className=""
              style={{
                width: "98%", // Explicitly set width
                backgroundImage: `url(${upscaleImagesArray[8]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "left",
                position: "fixed",
                bottom: 20,
                // left: 0,
                height: "460px", // Adjust the height as needed
              }}
            ></div>

          </div>

        </div>

        {/*  Right 95% */}
        <div className="page rightPage">
          <h1 style={{ visibility: 'hidden', fontSize: 'x-large' }}>-</h1>
          <div className="gallery-abcdef">
            <img style={{ paddingLeft: "5px" }} src={upscaleImagesArray[8]?.upscaleImages[3]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 3" />
            <img style={{ paddingRight: "10px" }} src={upscaleImagesArray[8]?.upscaleImages[4]?.fields?.image_url?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'} alt="Thumbnail 4" />

          </div>
          <div style={{ paddingTop: '5%', paddingBottom: '5%' }} className="flex w-full h-[450px]">
            <div
              style={{
                width: "50%", // Explicitly set width to 30%
                backgroundImage: `url(${upscaleImagesArray[8]?.fields?.jpgSrc?.text || 'https://know.dayrade.com/public/stylesheets/uploads/loading-screen.jpg'})`,
                backgroundSize: "200% 100%",
                backgroundPosition: "right",
                position: "fixed",
                bottom: 20,
                // left: 0,
                height: "460px",
              }}
            ></div>
            <div style={{ minWidth: "500px", paddingTop: "15%", maxWidth: "500px", display: "flex", flexDirection: "column", paddingLeft: "55%" }}>
              <p className="description-font" style={{ textAlign: 'center', paddingLeft: '3%', paddingBottom: "10%",  fontSize: 'x-large' ,fontFamily:"georgia"}}>{upscaleImagesArray[8]?.fields?.roomType || upscaleImagesArray[8]?.fields?.imageType}</p>
              <p className="description-font">{upscaleImagesArray[8]?.fields?.Image_description || 'Description'}</p>
            </div>
            {/* <div className="thumbnail-container-a1b2c3">
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 1" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 2" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 3" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 4" />
                  </div> */}
          </div>
          {/* <div className="thumbnail-container-a1b2c3">
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 1" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 2" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 3" />
                      <img src="https://www.cireba.com/caches/1061x680/2024-12-19-11-41-28-1734385803img-1347.jpeg" alt="Thumbnail 4" />
                  </div> */}
        </div>

        {/*-------------11 end------------------------------------------------- Page 1 and page 21 compined ----------------------------------------------------------------- */}
      </HTMLFlipBook>
    </div>
  );
};

export default Flipbook;
