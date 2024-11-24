import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Slides from "../../components/Slides/Slides";
import SlideCenter from "../../components/SlideCenter/SlideCenter";

interface CarouselProps {
  currentIndex: number; // Índice sincronizado con el fondo
}

const Carousel: React.FC<CarouselProps> = ({ currentIndex }) => {
  const cardComponents = [
    <Slides alignment="left" />,
    <SlideCenter />,
    <Slides alignment="right" />,
  ];

  return (
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
  );
};

export default Carousel;
