// Carousel.tsx
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Slides from '../../components/Slides/Slides';
import SlideCenter from '../../components/SlideCenter/SlideCenter';

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const cardComponents = [
    <Slides alignment="left" imageSrc="/path/to/image1.jpg" />,
    <SlideCenter backgroundImage="/path/to/background.jpg" />,
    <Slides alignment="right" imageSrc="/path/to/image2.jpg" />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cardComponents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cardComponents.length]);

  return (
    <Box sx={{ width: "100%" }}>
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {cardComponents[index]}
      </motion.div>
    </Box>
  );
};

export default Carousel;
