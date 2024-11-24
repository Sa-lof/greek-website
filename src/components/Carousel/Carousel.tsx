// Carousel.tsx
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Slides from '../../components/Slides/Slides';
import SlideCenter from '../../components/SlideCenter/SlideCenter';
import image1 from '../../assets/images/home/g-31sf-Photoroom.png'
import image2 from '../../assets/images/home/g-43sf-Photoroom.png'
import image3 from '../../assets/images/home/g-55sf-Photoroom.png'

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const cardComponents = [
    <Slides alignment="left" imageSrc={image1} />,
    <SlideCenter backgroundImage={image2} />,
    <Slides alignment="right" imageSrc={image3} />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cardComponents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cardComponents.length]);

  return (
    <Box
  sx={{
    width: "100%",
    height: {
      xs: "50vh", // Altura más pequeña para pantallas móviles
      sm: "70vh", // Altura media para tablets
      md: "60vh", // Altura estándar para pantallas grandes
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", 
  }}
>
  <motion.div
    key={index}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
    style={{ width: "100%", height: "100%" }}
  >
    {cardComponents[index]}
  </motion.div>
</Box>
  );  
};

export default Carousel;
