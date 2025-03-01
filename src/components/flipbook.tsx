import React, { useState, forwardRef } from 'react';
import dynamic from 'next/dynamic';
import { Document, Page, pdfjs } from 'react-pdf';

// PDF file URL
// const PDFF: string = 'https://know.dayrade.com/public/stylesheets/uploads/nester-prod.pdf';
const PDFF: string = 'https://know.dayrade.com/public/stylesheets/uploads/testing.pdf';
// const PDFF: string = 'https://know.dayrade.com/public/stylesheets/uploads/LandscapeTest.pdf';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

// Dynamically import HTMLFlipBook to support SSR
const HTMLFlipBook = dynamic(() => import('react-pageflip'), {
  ssr: false,
});

// Pages Component with React.forwardRef for `react-pageflip`
interface PagesProps {
  number: number;
  children?: React.ReactNode;
}

const Pages = forwardRef<HTMLDivElement, PagesProps>(({ number, children }, ref) => (
  <div ref={ref} className="demoPage">
    {children}
    <p>Page number: {number}</p>
  </div>
));

const Flipbook: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoaded(true);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-900 overflow-hidden pb-64">
      <h1 className="text-3xl text-white text-center font-bold pb-44">FlipBook</h1>

      {/* Load the PDF to determine the number of pages */}
      <Document file={PDFF} onLoadSuccess={onDocumentLoadSuccess} className="hidden" />

      {loaded && (
        <HTMLFlipBook
          width={400}
          height={500}
        //   className="shadow-lg"
          className=""
        //   style={{ border: '1px solid #ddd' }}
          style={{ border: '' }}
          startPage={0}
          size="stretch"
          minWidth={400}
          maxWidth={500}
          minHeight={500}
          maxHeight={1500}
          drawShadow
          flippingTime={600}
          useMouseEvents
          clickEventForward
          usePortrait
          startZIndex={0}
          autoSize
          maxShadowOpacity={1.5}
          showCover={true}
          mobileScrollSupport={true}
          swipeDistance={0}
          showPageCorners={false}
          disableFlipByClick={false}
        >
         {Array.from({ length: numPages }, (_, index) => (
  <Pages key={index} number={index + 1}>
    <Document file={PDFF}>
      <Page
        pageNumber={index + 1}
        width={400}
        renderAnnotationLayer={false}
        renderTextLayer={false}
      />
    </Document>
  </Pages>
))}

        </HTMLFlipBook>
      )}
    </div>
  );
};

export default Flipbook;
