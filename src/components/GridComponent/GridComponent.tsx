import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import imagen1 from "../../assets/images/gallery/09b0fd5e-e2d1-4101-acfc-cb9a2dec2798.jpg";
import imagen2 from "../../assets/images/gallery/2DCE3297-0E47-48D5-AF40-C2DCE000BF70.jpg";
import imagen3 from "../../assets/images/gallery/B0FE001D-0B0C-43E7-A3B9-847EC672C7F9.jpg";
import imagen4 from "../../assets/images/gallery/BF506E87-4E94-45C2-BA34-0A8EA275C14A.jpg";
import imagen5 from "../../assets/images/gallery/DD53F2AD-2D98-4C53-ACA4-88DD1335BEA1.jpg";
import imagen6 from "../../assets/images/gallery/d20d41f3-0ce1-4310-8a42-619a6c78f885.jpg";
import imagen7 from "../../assets/images/gallery/Grik-44.jpeg";
import imagen8 from "../../assets/images/gallery/Grik-34.jpeg";
import imagen9 from "../../assets/images/gallery/Grik-43.jpeg";
import imagen10 from "../../assets/images/gallery/g-47.jpeg";
import imagen11 from "../../assets/images/gallery/IMG_0323.jpg";
import imagen12 from "../../assets/images/gallery/IMG_0321.jpg";
import imagen13 from "../../assets/images/gallery/IMG_0597.jpg";
import imagen14 from "../../assets/images/gallery/IMG_1761.jpg";
import imagen15 from "../../assets/images/gallery/IMG_1960.jpg";
import imagen16 from "../../assets/images/gallery/IMG_2148.jpg";
import imagen17 from "../../assets/images/gallery/IMG_2149.jpg";
import imagen18 from "../../assets/images/gallery/IMG_1763.jpg";
import imagen19 from "../../assets/images/gallery/IMG_4040.jpg";
import imagen20 from "../../assets/images/gallery/IMG_4042.jpg";
import imagen21 from "../../assets/images/gallery/IMG_7151.jpg";
import imagen22 from "../../assets/images/gallery/IMG_9097.jpg";
import imagen23 from "../../assets/images/gallery/IMG_9122.jpg";
import imagen24 from "../../assets/images/gallery/IMG_9344.jpg";

interface Image {
  src: string;
  title: string;
  description: string;
}

const firstSet: Image[] = [
  { src: imagen1, title: "Evento 1", description: "Descripción del evento 1" },
  { src: imagen2, title: "Evento 2", description: "Descripción del evento 2" },
  { src: imagen3, title: "Evento 3", description: "Descripción del evento 3" },
  { src: imagen4, title: "Evento 4", description: "Descripción del evento 4" },
  { src: imagen5, title: "Evento 5", description: "Descripción del evento 5" },
  { src: imagen6, title: "Evento 6", description: "Descripción del evento 6" },
];

const secondSet: Image[] = [
  { src: imagen7, title: "Evento 7", description: "Descripción del evento 7" },
  { src: imagen8, title: "Evento 8", description: "Descripción del evento 8" },
  { src: imagen9, title: "Evento 9", description: "Descripción del evento 9" },
  { src: imagen10, title: "Evento 10", description: "Descripción del evento 10" },
  { src: imagen11, title: "Evento 11", description: "Descripción del evento 11" },
  { src: imagen12, title: "Evento 12", description: "Descripción del evento 12" },
];

const thirdSet: Image[] = [
  { src: imagen13, title: "Evento 13", description: "Descripción del evento 13" },
  { src: imagen14, title: "Evento 14", description: "Descripción del evento 14" },
  { src: imagen15, title: "Evento 15", description: "Descripción del evento 15" },
  { src: imagen16, title: "Evento 16", description: "Descripción del evento 16" },
  { src: imagen17, title: "Evento 17", description: "Descripción del evento 17" },
  { src: imagen18, title: "Evento 18", description: "Descripción del evento 18" },
];

const fourthSet: Image[] = [
  { src: imagen19, title: "Evento 19", description: "Descripción del evento 19" },
  { src: imagen20, title: "Evento 20", description: "Descripción del evento 20" },
  { src: imagen21, title: "Evento 21", description: "Descripción del evento 21" },
  { src: imagen22, title: "Evento 22", description: "Descripción del evento 22" },
  { src: imagen23, title: "Evento 23", description: "Descripción del evento 23" },
  { src: imagen24, title: "Evento 24", description: "Descripción del evento 24" },
];


const GridComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentSet, setCurrentSet] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para loader

  const handleOpen = (image: Image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleNextSet = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % 4);
      setIsLoading(false);
    }, 500); // Simula un retraso (500ms)
  };

  const handlePreviousSet = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentSet((prevSet) => (prevSet - 1 + 4) % 4);
      setIsLoading(false);
    }, 500); // Simula un retraso (500ms)
  };

  const imagesToDisplay =
    currentSet === 0
      ? firstSet
      : currentSet === 1
      ? secondSet
      : currentSet === 2
      ? thirdSet
      : fourthSet;

  return (
    <Box bgcolor="#000000" color="#fff" py={4} px={4}>
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="400px">
          <CircularProgress size={60} sx={{ color: "#32CD32" }} />
        </Box>
      ) : (
        <Grid container spacing={2} justifyContent="center">
          {imagesToDisplay.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: "30px", overflow: "hidden" }}>
                <CardActionArea onClick={() => handleOpen(image)}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={image.src}
                    alt={image.title}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Box textAlign="center" mt={4} display="flex" justifyContent="center" gap={2}>
        <IconButton
          onClick={handlePreviousSet}
          disabled={isLoading} // Deshabilita durante el cambio
          sx={{
            backgroundColor: "#32CD32",
            color: "#000",
            ":hover": { backgroundColor: "#2FD510" },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          onClick={handleNextSet}
          disabled={isLoading} // Deshabilita durante el cambio
          sx={{
            backgroundColor: "#32CD32",
            color: "#000",
            ":hover": { backgroundColor: "#2FD510" },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {selectedImage && (
          <DialogContent
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#FFFFFF",
              height: "400px",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${selectedImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              p: 2,
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                color: "#FFFFFF",
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box
              sx={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <Typography variant="h5" fontWeight="bold" color="#2FD510" mb={1}>
                {selectedImage.title}
              </Typography>
              <Typography variant="body1" color="#FFFFFF">
                {selectedImage.description}
              </Typography>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default GridComponent;
