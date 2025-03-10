import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GripVertical } from 'lucide-react';
import { useApi } from '../context/ApiContext';

const ImageGallery: React.FC = () => {
  const { data, loading, error } = useApi();
  const PropertyDetails = data;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState<string>('original');
  const [isComparing, setIsComparing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);

  const styles = [
    { id: 'original', label: 'Original', value: 0 },
    { id: 'eclectic', label: 'Eclectic', value: 1 },
    { id: 'contemporary', label: 'Contemporary', value: 2 },
    { id: 'traditional', label: 'Traditional', value: 3 },
    { id: 'postModern', label: 'Post Modern', value: 4 },
  ];
  let availableStyles: any
  const getCurrentImage = () => {
    if (!PropertyDetails?.upscaleImagesArray) return '';
    const currentProperty = PropertyDetails.upscaleImagesArray[currentImageIndex];
    if (currentProperty?.upscaleImages) {
      availableStyles = styles.filter(style =>
        currentProperty?.upscaleImages.some((image: any) =>
          Number(image?.fields?.Design_Style) === style.value
        )
      );
    }
    console.log(availableStyles.find((style: any) => style.id === selectedStyle)?.label || 'Original');
    let filterNotAvailable = availableStyles.find((style: any) => style.id === selectedStyle)?.label || 'Original'
    if (selectedStyle === 'original' || filterNotAvailable == 'Original') {
      return currentProperty.fields?.webpSrc?.text || currentProperty.fields?.jpgSrc?.text;
    } else {
      const upscaleImages = currentProperty?.upscaleImages;
      const selectedFilterIndex =
        styles.find(style => style.id === selectedStyle)?.value || 0;
      const selectedImage = upscaleImages.find(
        (image: any) => Number(image?.fields?.Design_Style) === selectedFilterIndex
      );
      return selectedImage
        ? selectedImage.fields?.image_url?.text
        : upscaleImages[0].fields?.image_url?.text;
    }
  };

  // Use document-level mouse move/up for smoother slider dragging (perfect UI)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const getActiveStyleLabel = () => {
    console.log(' getActiveStyleLabel selectedStyle', selectedStyle);
    const currentProperty = PropertyDetails.upscaleImagesArray[currentImageIndex];
    if (currentProperty?.upscaleImages) {
      availableStyles = styles.filter(style =>
        currentProperty?.upscaleImages.some((image: any) =>
          Number(image?.fields?.Design_Style) === style.value
        )
      );
      console.log(availableStyles.find((style: any) => style.id === selectedStyle)?.label || 'Original')
      return availableStyles.find((style: any) => style.id === selectedStyle)?.label || 'Original';
    } else {
      return 'Original'
    }
  };

  return (
    <section className="my-16">
      <div className="mb-8">
        <h2 className="text-3xl font-serif mb-3">Property Gallery</h2>
        <p className="text-gray-600">
          Explore different interior design styles for this property
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative h-[600px] mb-8 rounded-lg overflow-hidden select-none"
      >
        {isComparing ? (
          <div className="relative h-full">
            {/* Background Image */}
            <img
              src={getCurrentImage()}
              alt="Original view"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Foreground Image with Clipping */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={
                  PropertyDetails?.upscaleImagesArray?.[currentImageIndex]?.fields
                    ?.webpSrc?.text ||
                  PropertyDetails?.upscaleImagesArray?.[currentImageIndex]?.fields
                    ?.jpgSrc?.text
                }
                alt="Styled view"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute inset-y-0"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute inset-y-0 -ml-px w-0.5 bg-white shadow-lg" />
              <button
                onMouseDown={handleMouseDown}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
              >
                <GripVertical className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Labels */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg">
                Original
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg">
                {getActiveStyleLabel()}
              </div>
            </div>
          </div>
        ) : (
          <img
            src={getCurrentImage()}
            alt="Property view"
            className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
          />
        )}

        {/* Navigation Buttons */}
        <button
          onClick={() =>
            setCurrentImageIndex(prev => Math.max(0, prev - 1))
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white transition-colors"
          disabled={currentImageIndex === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() =>
            setCurrentImageIndex(prev =>
              Math.min(
                PropertyDetails?.upscaleImagesArray.length - 1,
                prev + 1
              )
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white transition-colors"
          disabled={
            currentImageIndex ===
            PropertyDetails?.upscaleImagesArray?.length - 1
          }
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Style Selection Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
      {/* <button
    key='original'
    onClick={() => {
      setSelectedStyle('original');
      setIsComparing('original' !== 'original');
      setSliderPosition(50);
    }}
    className={`px-6 py-3 rounded-lg transition-all ${
      selectedStyle ==='original'
        ? 'bg-indigo-600 text-white shadow-lg scale-105'
        : 'bg-gray-100 hover:bg-gray-200'
    }`}
  >
  Original
  </button> */}
{styles.map((style) => {
  const isAvailable = style.id === "original" || availableStyles.some((s: any) => s.id === style.id);

  return (
    <button
      key={style.id}
      onClick={() => {
        if (!isAvailable) return;
        setSelectedStyle(style.id);
        setIsComparing(style.id !== 'original');
        setSliderPosition(50);
      }}
      disabled={!isAvailable}
      className={`px-6 py-3 rounded-lg transition-all ${
        selectedStyle === style.id
          ? 'bg-indigo-600 text-white shadow-lg scale-105'
          : isAvailable
          ? 'bg-gray-100 hover:bg-gray-200'
          : 'bg-[#f1f1f1] text-[#d9d9d9] cursor-not-allowed'
      }`}
    >
      {style.label}
    </button>
  );
})}


      </div>
    </section>
  );
};

export default ImageGallery;
