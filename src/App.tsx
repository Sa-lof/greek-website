import React, { useState, useEffect } from "react";
import Navbar from "./components/Nav/Nav";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import Carousel from "./components/Carousel/Carousel";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import About from "./components/About/About";
import GridComponent from "./components/GridComponent/GridComponent";
import CitySlider from "./components/CitySlider/CitySlider";
import Pricing from "./components/Pricing/Pricing";
import Profile from "./components/Profile/Profile";
import FollowMe from "./components/Follow/Follow";
import Footer from "./components/Footer/Footer";

// Importar las imágenes del fondo que se usarán para sincronizar con el carrusel
import background1 from "./assets/images/home/g-31sf-Photoroom.png";
import background2 from "./assets/images/home/g-43sf-Photoroom.png";
import background4 from "./assets/images/home/g-55sf-Photoroom.png";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundImages = [background1, background2, background4];

  // Sincronizar cambio de índice
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      {/* Fondo dinámico sincronizado */}
      <Box
  sx={{
    backgroundImage: `url(${backgroundImages[currentIndex]})`,
    backgroundSize: "contain",
    backgroundPosition:
      backgroundImages[currentIndex] === background1
        ? "right"
        : backgroundImages[currentIndex] === background4
        ? "left"
        : "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
  }}
>
  <Carousel currentIndex={currentIndex} />
  <MusicPlayer />
</Box>

      <About />
      <GridComponent />

      <Box mt={15} mb={10}>
        <CitySlider
          cities={[
            "CMDX",
            "MONTERREY",
            "GUADALAJARA",
            "NUEVA YORK",
            "ORLANDO",
            "PARIS",
          ]}
        />
        <CitySlider
          cities={[
            "CMDX",
            "MONTERREY",
            "GUADALAJARA",
            "NUEVA YORK",
            "ORLANDO",
            "PARIS",
          ]}
        />
      </Box>

      <Pricing
        pricingData={[
          {
            imageUrl: "https://via.placeholder.com/200x200",
            price: "$300",
            items: [
              "Lorem ipsum dolor",
              "Lorem ipsum dolor sit",
              "Lorem ipsum",
              "Lorem ipsum dolor",
            ],
            packageName: "PAQUETE GREEK",
            djName: "DJ GREEK",
            audioSrc: "path/to/audio1.mp3",
          },
          {
            imageUrl: "https://via.placeholder.com/200x200",
            price: "$300",
            items: [
              "Lorem ipsum dolor",
              "Lorem ipsum dolor sit",
              "Lorem ipsum",
              "Lorem ipsum dolor",
            ],
            packageName: "PAQUETE GREEK",
            djName: "DJ GREEK",
            audioSrc: "path/to/audio2.mp3",
          },
        ]}
      />

      <Profile />
      <FollowMe />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
