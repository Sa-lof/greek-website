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
    dots: false, // Mostrar indicadores de navegación
    infinite: true,
    speed: 500, // Velocidad de transición (ajustada para mejor control manual)
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Autoplay con intervalos de 3 segundos
    cssEase: 'ease', // Animación más natural para manual y automático
    pauseOnHover: true,
    variableWidth: true,
    arrows: true, // Mostrar flechas para navegación manual
    draggable: true, // Permitir arrastre con mouse en desktop
    swipe: true, // Habilitar swipe en dispositivos táctiles
    swipeToSlide: true, // Permitir deslizar directamente a un slide
    responsive: [
      {
        breakpoint: 768, // Configuración para dispositivos móviles
        settings: {
          slidesToShow: 1,
          arrows: false, // Ocultar flechas en pantallas pequeñas
          autoplaySpeed: 2000,
          dots: false,
        },
      },
    ],
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
            color: '#121212',
            fontWeight: 700,
            fontSize: {
              xs: '32px', // Tamaño para pantallas pequeñas (celulares)
              sm: '48px', // Tamaño para pantallas medianas
              md: '72px', // Tamaño para pantallas más grandes
              lg: '96px', // Tamaño original para pantallas grandes
            },
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
            `,
            transition: 'color 0.3s ease, text-shadow 0.3s ease',
            '&:hover': {
              color: '#2FD510',
              textShadow: 'none',
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
