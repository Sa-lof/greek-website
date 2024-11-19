import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

interface CitySliderProps {
  cities: string[];
}

const CitySlider: React.FC<CitySliderProps> = ({ cities }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    variableWidth: true,
    arrows: false,
  };

  return (
    <Box
      sx={{
        backgroundColor: 'inherit',
        paddingBottom: '40px',
      }}
    >
      <Slider {...settings}>
        {cities.map((city, index) => (
          <Typography
            key={index}
            variant="h4"
            sx={{
              color: '#121212',  // Make text transparent initially
              fontWeight: 700,
              fontSize: '96px',
              padding: '0 20px',
              textShadow: `
                -1px -1px 0 #2FD510,  
                1px -1px 0 #2FD510,
                -1px 1px 0 #2FD510,
                1px 1px 0 #2FD510,
                -2px 0 0 #2FD510,
                2px 0 0 #2FD510,
                0 2px 0 #2FD510,
                0 -2px 0 #2FD510
              `,  // Creates a green outline
              transition: 'color 0.3s ease, text-shadow 0.3s ease',  // Smooth transition for hover effect
              '&:hover': {
                color: '#2FD510',  // Fill text with green on hover
                textShadow: 'none',  // Remove shadow on hover for solid color
              },
            }}
          >
            {city}
          </Typography>
        ))}
      </Slider>
    </Box>
  );
};

export default CitySlider;
