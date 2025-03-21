import { useState } from "react";

interface SlideshowProps {
  pictures: string[];
}

export default function Slideshow({ pictures }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="slide" className="slideshow overflow-hidden">
      <div className="slideshow-container relative">
        {pictures.length > 0 && (
          <img
            className="object-cover object-center h-[415px] w-full rounded-3xl"
            src={pictures[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
        )}
        <button
          className="prev absolute left-0 top-50 ms-10 text-6xl text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)]"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <button
          className="next absolute right-0 top-50 me-10 text-6xl text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)]"
          onClick={handleNext}
        >
          &#10095;
        </button>
        <div className="slideshow-indicator absolute w-full flex bottom-0 mb-2 place-content-center text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)]">
          {currentIndex + 1} / {pictures.length}
        </div>
      </div>
    </div>
  );
}
