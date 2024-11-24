// App.tsx
import React from "react";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Carousel />
      <MusicPlayer />
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
      <Profile></Profile>
      <FollowMe></FollowMe>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
