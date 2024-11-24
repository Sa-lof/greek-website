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
import pricing1 from "./assets/images/pricing/privado.jpg"
import pricing2 from "./assets/images/pricing/club2.jpg"
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
    backgroundSize: { xs: "contain", sm: "cover" }, // Cambiado a 'cover' para un ajuste más responsivo
    backgroundPosition: "center", // Centrado por defecto
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: { xs: "105vh", sm: "105vh", md: "100vh", lg:"100vh" }, // Ajusta la altura en pantallas pequeñas
    display: "flex", // Asegura que los hijos estén alineados
    flexDirection: "column", // Apila los elementos verticalmente
    alignItems: "center", // Centra horizontalmente
    justifyContent: "center", // Centra verticalmente
    padding: { xs: 2, md: 0 }, // Espaciado interno para pantallas pequeñas
  }}
>
  <Carousel currentIndex={currentIndex} />
  <Box
    sx={{
      width: { xs: "100%", sm: "80%", md: "100%" }, // Ancho responsivo para el reproductor
      marginTop: { xs: 2, md: 4 }, // Margen superior para espaciado
    }}
  >
    <MusicPlayer />
  </Box>
</Box>
      <About />
      <GridComponent />

      <Box mt={15} mb={10}>
  {/* Primer carrusel siempre visible */}
  <CitySlider
    cities={[
      "Apotheke",
      "LooLoo",
      "Cincodoce",
      "Standard Gold",
      "Belive Acapulco",
      "Hart",
      "Florida Nightclub",
      "Foro Escarabajo",
      "Atenea Barcelona",
      "La Cuspide",
      "CLUBBING",
      "OUTSIDE",
      "Elements Sessions",
      "School Of Beats",
      "Casa Roma",
      "+30 eventos privados",
    ]}
  />

  {/* Segundo carrusel oculto en pantallas pequeñas */}
  <Box
    sx={{
      display: { xs: "none", md: "block" }, // Ocultar en xs y sm, mostrar en md y superior
    }}
  >
    <CitySlider
      cities={[
        "Florida Nightclub",
        "Foro Escarabajo",
        "Casa Roma",
        "+30 eventos privados",
        "Atenea Barcelona",
        "OUTSIDE",
        "Apotheke",
        "LooLoo",
        "Cincodoce",
        "Standard Gold",
        "Belive Acapulco",
        "Hart",
        "Elements Sessions",
        "School Of Beats",
        "La Cuspide",
        "CLUBBING",
      ]}
    />
  </Box>
</Box>


      <Pricing
        pricingData={[
          {
            imageUrl: pricing1,
            price: "$300",
            items: [
              "Ideal para reuniones exclusivas, o celebraciones privadas.",
              "Greek se encarga de todo: música, luces y sonido para crear una atmósfera personalizada.",
              "Perfecto para hasta 120 personas, garantizando un ambiente lleno de energía.",
              "Flexibilidad para adaptar la música a tu gusto con posibilidad de enviar una lista previa.",
            ],
            packageName: "GREEK EXCLUSIVE",
            djName: "DJ GREEK",
            audioSrc: "path/to/audio1.mp3",
          },
          {
            imageUrl: pricing2,
            price: "$300",
            items: [
              "Diseñado para el ambiente electrizante de los clubes.",
              "Greek crea un set que mantiene a la multitud en movimiento toda la noche.",
              "Interacción directa con la audiencia para mantener la pista de baile llena.",
            ],
            packageName: "CLUB ENERGY",
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
