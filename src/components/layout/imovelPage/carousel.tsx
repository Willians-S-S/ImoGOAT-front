"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface CarouselProps {
  images: { url: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Índice da imagem atual
  const [isFullScreen, setIsFullScreen] = useState(false); // Controle da tela cheia
  const [zoom, setZoom] = useState(1); // Nível de zoom
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // Offset da imagem para arrastar
  const [isGrabbing, setIsGrabbing] = useState(false); // Controle do cursor de arrasto
  const isDragging = useRef(false); // Controle do estado de arrasto
  const dragStart = useRef({ x: 0, y: 0 }); // Posição inicial do mouse ao iniciar o arrasto

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetZoomAndOffset();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetZoomAndOffset();
  };

  const openFullScreenGallery = () => {
    setIsFullScreen(true);
  };

  const closeFullScreenGallery = () => {
    setIsFullScreen(false);
    resetZoomAndOffset();
  };

  const resetZoomAndOffset = () => {
    setZoom(1); // Resetar o zoom
    setOffset({ x: 0, y: 0 }); // Resetar o deslocamento
  };

  const increaseZoom = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.5, 3)); // Limitar zoom máximo a 3
  };

  const decreaseZoom = () => {
    setZoom((prevZoom) => {
      const newZoom = Math.max(prevZoom - 0.5, 1); // Limitar zoom mínimo a 1

      // Recentraliza gradualmente a imagem
      if (newZoom === 1) {
        setOffset({ x: 0, y: 0 }); // Recentralizar completamente no nível de zoom mínimo
      } else {
        setOffset((prevOffset) => ({
          x: prevOffset.x * (newZoom / prevZoom),
          y: prevOffset.y * (newZoom / prevZoom),
        }));
      }

      return newZoom;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      isDragging.current = true;
      setIsGrabbing(true); // Ativa o cursor "grabbing"
      dragStart.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;

      dragStart.current = { x: e.clientX, y: e.clientY };

      setOffset((prevOffset) => ({
        x: prevOffset.x + deltaX,
        y: prevOffset.y + deltaY,
      }));
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsGrabbing(false); // Desativa o cursor "grabbing"
  };

  return (
    <>
      {/* Tela cheia da galeria */}
      {isFullScreen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            style={{
              cursor: zoom > 1 ? (isGrabbing ? "grabbing" : "grab") : "default",
            }} // Define o cursor com base no estado de zoom e arrasto
          >
            <div
              className="relative"
              style={{
                transform: `scale(${zoom}) translate(${offset.x}px, ${offset.y}px)`,
                transition: isDragging.current ? "none" : "transform 0.2s ease-out",
                width: "100%",
                height: "100%",
              }}
              onMouseDown={handleMouseDown}
            >
              {/* Imagem atual */}
              <Image
                src={images[currentIndex].url}
                alt={`Imagem ${currentIndex + 1}`}
                layout="fill"
                objectFit="contain"
                draggable={false} // Desativa comportamento padrão de arrasto
              />
            </div>

            {/* Botão anterior */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full"
            >
              ◀
            </button>

            {/* Botão próximo */}
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full"
            >
              ▶
            </button>

            {/* Botão fechar */}
            <button
              type="button"
              onClick={closeFullScreenGallery}
              className="absolute top-4 right-4 bg-white/30 text-white p-4 rounded-full"
            >
              ✕
            </button>

            {/* Botões de zoom */}
            <div className="absolute top-20 right-4 flex flex-col items-center space-y-2 bg-white/30 rounded-full p-2">
              <button
                type="button"
                onClick={increaseZoom}
                className={`material-icons w-8 h-8 flex items-center justify-center text-white rounded-full transition ${
                  zoom >= 3 ? "opacity-50 cursor-not-allowed" : "hover:bg-white/50"
                }`}
                disabled={zoom >= 3}
              >
                zoom_in
              </button>
              <button
                type="button"
                onClick={decreaseZoom}
                className={`material-icons w-8 h-8 flex items-center justify-center text-white rounded-full transition ${
                  zoom <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-white/50"
                }`}
                disabled={zoom <= 1}
              >
                zoom_out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Carrossel normal */}
      <div className="relative w-full" id="gallery">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 duration-700 ease-in-out transform ${
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <Image
                src={image.url}
                alt={`Imagem ${index + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg cursor-pointer"
                onClick={openFullScreenGallery}
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 z-30 flex items-center justify-center 
            h-full px-4 group focus:outline-none">
            <button
            type="button"
            onClick={prevSlide}
            className="material-icons cursor-pointer p-2 rounded-full bg-white/40"
            >
            arrow_back_ios_new
            </button>
        </div>
        <div className="absolute top-0 right-0 z-30 flex items-center justify-center 
            h-full px-4 group focus:outline-none">
            <button
            type="button"
            onClick={nextSlide}
            className="material-icons cursor-pointer p-2 rounded-full bg-white/40"
            >
            arrow_forward_ios
            </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
