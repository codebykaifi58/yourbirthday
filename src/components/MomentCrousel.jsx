import React, { useRef } from "react";
import camera from "../assets/camera.png";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";

const MomentsCarousel = ({ nextStep }) => {
  const photos = [photo1, photo2, photo3, photo4, photo5];
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Mouse Events
  const onMouseDown = (e) => {
    if (!carouselRef.current) return;
    console.log("Mouse Down");
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.cursor = "grabbing";
  };

  const onMouseUp = () => {
    if (!carouselRef.current) return;
    console.log("Mouse Up");
    isDragging.current = false;
    carouselRef.current.style.cursor = "grab";
  };

  const onMouseLeave = () => {
    if (!carouselRef.current) return;
    console.log("Mouse Leave");
    isDragging.current = false;
    carouselRef.current.style.cursor = "grab";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Touch Events (Mobile)
  const onTouchStart = (e) => {
    if (!carouselRef.current) return;
    console.log("Touch Start");
    isDragging.current = true;
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const onTouchEnd = () => {
    console.log("Touch End");
    isDragging.current = false;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="centered">
      <img src={camera} width={80} alt="camera" />
      <h2>📸 Moments with You Alizi</h2>

      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
      >
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo}
            className="carousel-img"
            alt={`moment-${i + 1}`}
            draggable={false}
          />
        ))}
      </div>

      <button className="btn" onClick={nextStep}>
        One Last Time →
      </button>
    </div>
  );
};

export default MomentsCarousel;
