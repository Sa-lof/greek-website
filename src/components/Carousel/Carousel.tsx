import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Slides from "../../components/Slides/Slides";
import SlideCenter from "../../components/SlideCenter/SlideCenter";
import ContactModal from "../../components/Contact/Contact";

interface CarouselProps {
  currentIndex: number; // Índice sincronizado con el fondo
  setCurrentIndex: (index: number) => void; // Permitir cambiar el índice desde App
}

const Carousel: React.FC<CarouselProps> = ({ currentIndex, setCurrentIndex }) => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleContactButtonClick = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  // Manejar el inicio del deslizamiento
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Manejar el movimiento del deslizamiento
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Manejar el final del deslizamiento y calcular la dirección
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchStartX.current - touchEndX.current;

      // Cambiar a la diapositiva anterior o siguiente dependiendo de la dirección
      if (deltaX > 50) {
        // Desliza a la izquierda
        setCurrentIndex((currentIndex + 1) % 3); // Ajusta según el número de diapositivas
      } else if (deltaX < -50) {
        // Desliza a la derecha
        setCurrentIndex((currentIndex - 1 + 3) % 3); // Ajusta según el número de diapositivas
      }
    }
    // Resetear los valores
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const cardComponents = [
    <Slides alignment="left" onContactClick={handleContactButtonClick} />,
    <SlideCenter onContactClick={handleContactButtonClick} />,
    <Slides alignment="right" onContactClick={handleContactButtonClick} />,
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "105vh",
            sm: "70vh",
            md: "60vh",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", height: "100%" }}
        >
          {cardComponents[currentIndex]}
        </motion.div>
      </Box>
      <ContactModal open={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
};

export default Carousel;
