import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Slides from "../../components/Slides/Slides";
import SlideCenter from "../../components/SlideCenter/SlideCenter";
import ContactModal from "../../components/Contact/Contact";

interface CarouselProps {
  currentIndex: number; // Índice sincronizado con el fondo
}

const Carousel: React.FC<CarouselProps> = ({ currentIndex }) => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const handleContactButtonClick = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  const cardComponents = [
    <Slides alignment="left" onContactClick={handleContactButtonClick} />,
    <SlideCenter onContactClick={handleContactButtonClick} />, // Aquí pasamos la función
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
