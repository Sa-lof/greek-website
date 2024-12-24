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
import Loader from "./components/Loader/Loader"; // Importa el loader

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const backgroundImages = [background1, background2, background4];

  // Sincronizar cambio de índice
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Simula un tiempo de carga de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Muestra el loader mientras se cargan los datos
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      {/* Fondo dinámico sincronizado */}
      <Box
  sx={{
    backgroundImage: `url(${backgroundImages[currentIndex]})`,
    backgroundSize: { xs: "contain", sm: "contain", md: "cover", }, // Cambiado a 'cover' para un ajuste más responsivo
    backgroundPosition: "center", // Centrado por defecto
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: { xs: "105vh", sm: "105vh", md: "90vh", lg:"90vh" }, // Ajusta la altura en pantallas pequeñas
    display: "flex", // Asegura que los hijos estén alineados
    flexDirection: "column", // Apila los elementos verticalmente
    alignItems: "center", // Centra horizontalmente
    justifyContent: "center", // Centra verticalmente
    padding: { xs: 2, md: 0 }, // Espaciado interno para pantallas pequeñas
  }}
>
<Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
  <Box
    sx={{
      width: { xs: "100%", sm: "100%", md: "100%" }, // Ancho responsivo para el reproductor
      marginTop: { xs: 2, md: 2 }, // Margen superior para espaciado
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
      price: "$1,000 por hora",
      items: [
        "Ideal para reuniones exclusivas, o celebraciones privadas.",
        "Greek se encarga de todo: música, luces y sonido para crear una atmósfera personalizada.",
        "Perfecto para hasta 120 personas, garantizando un ambiente lleno de energía.",
        "Flexibilidad para adaptar la música a tu gusto con posibilidad de enviar una lista previa.",
      ],
      packageName: "GREEK EXCLUSIVE",
      djName: "DJ GREEK",
      audioSrc: "path/to/audio1.mp3",
      moreSpecifications: `
**Servicio Privado**  
El servicio incluye luces, audio y DJ liderado por Greek, con capacidad para hasta 120 personas.  
El número de asistentes no afecta la cotización. Si el cliente desea agregar su propio equipo, se integrará si es compatible, sin alterar el costo total.

**Incluye:**  
- Subwoofer y satélites: 2 unidades  
- Parleds: 4 unidades  
- Láser: 1 unidad (opcional)  
- Máquina de humo: opcional (600 MXN adicionales)  
- Letrero neón Ω: 1 unidad  
- Controlador DJ: 1 unidad  
- Mesa para DJ  

**Tarifas:**  
- $1,000 por hora durante las primeras cinco horas  
- $1,400 por hora a partir de la sexta hora  

**Consideraciones Previas al Evento:**  
- Anticipo: Se requiere un anticipo del 50% del total cotizado para apartar la fecha. Este anticipo es no reembolsable en caso de cancelación. La reprogramación está sujeta a disponibilidad y acuerdo con Greek.  
- Preparación: Greek llega al lugar una hora antes del inicio para instalar y hacer pruebas de audio, y necesita 45 minutos para desmontar al finalizar.  
- Estacionamiento: Se requiere un espacio de estacionamiento reservado para el vehículo de Greek.
- Staff: Greek estará acompañado de 1-3 personas de su staff, quienes actuarán profesionalmente, sin interactuar con los invitados más allá de su función.  
- Playlist: Los clientes pueden enviar una lista de reproducción para orientar la línea musical deseada, incluyendo canciones específicas que quieran escuchar.  
- Liquidación: El evento debe ser liquidado completamente al momento de la llegada de Greek para la instalación. Si no se ha liquidado, el evento no se llevará a cabo y Greek se retirará del lugar.
      `,
    },
    {
      imageUrl: pricing2,
      price: "$4,000 por evento",
      items: [
        "Diseñado para el ambiente electrizante de los clubes.",
        "Greek crea un set que mantiene a la multitud en movimiento toda la noche.",
        "Interacción directa con la audiencia para mantener la pista de baile llena.",
      ],
      packageName: "CLUB ENERGY",
      djName: "DJ GREEK",
      audioSrc: "path/to/audio2.mp3",
      moreSpecifications: `
**Club**  
- **Warm up:** 1,000 MXN (máximo 2 horas)  
- **Main:** 4,000 MXN (máximo 6 horas)  

**Requisitos Técnicos:**  
- Mixer: mínimo dos canales, completamente funcional.
- No Pioneer: Especificar marca y modelo para adaptar la configuración.    

**Requisitos reproductores:**  
  - Preferidos: Modelos CDJ-2000 o posteriores con función de hot cue.  
  - Modelos All In One aceptados: XDJ-RX o controladores de una sola pieza (especificar modelo).  

**Requisitos en la cabina:**  
- Monitor personal necesario.  
- Control de acceso en colaboración con otros DJs, gerentes, RP y Light Jockey.  
- **Cortesía:** Botella de Bacardi blanco o tequila nacional (Main). 

**Consideraciones Previas al Evento:**  
- Anticipo: Se requiere un anticipo del 50% del total cotizado para apartar la fecha. Este anticipo es no reembolsable en caso de cancelación. La reprogramación está sujeta a disponibilidad y acuerdo con Greek.  
- Liquidación: El evento debe ser liquidado completamente al momento de la llegada de Greek para la instalación. Si no se ha liquidado, el evento no se llevará a cabo y Greek se retirará del lugar.
      `,
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
