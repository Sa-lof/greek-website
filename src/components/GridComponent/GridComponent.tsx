import React, { useState, useEffect, useMemo, useCallback } from "react";
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
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import { createClient } from "@supabase/supabase-js";

// Configuración del cliente Supabase
const supabaseUrl = "https://jwmxsbmdesknvugepyub.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3bXhzYm1kZXNrbnZ1Z2VweXViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NzMwMTUsImV4cCI6MjA0ODA0OTAxNX0.wTrC0J1El7KTYBzaCMgo95c0w8umlwrj1ZhJlq7JLVI";
const supabase = createClient(supabaseUrl, supabaseKey);

interface Image {
  src: string;
  title: string;
  description: string;
}

const GridComponent = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentSet, setCurrentSet] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSetLoading, setIsSetLoading] = useState(false);

  // Detectar si la pantalla es pequeña
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const fetchImages = useCallback(async () => {
    try {
      const { data, error } = await supabase.storage
        .from("Greek")
        .list("Gallery", { limit: 1000 });

      if (error) {
        console.error("Error al obtener imágenes:", error);
        return [];
      }

      const validFiles = data.filter(
        (file) => file.name !== ".emptyFolderPlaceholder"
      );

      const imagePromises = validFiles.map(async (file) => {
        const { data: publicUrlData } = await supabase.storage
          .from("Greek")
          .getPublicUrl(`Gallery/${file.name}`);

        return {
          src: publicUrlData?.publicUrl || "",
          title: file.name,
          description: "",
        };
      });

      return Promise.all(imagePromises);
    } catch (err) {
      console.error("Error en fetchImages:", err);
      return [];
    }
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      const imagesFromBucket = await fetchImages();
      setImages(imagesFromBucket as Image[]);
      setIsLoading(false);
    };
    loadImages();
  }, [fetchImages]);

  const handleOpen = (image: Image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleNextSet = () => {
    setIsSetLoading(true);
    setTimeout(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % Math.ceil(images.length / 6));
      setIsSetLoading(false);
    }, 300);
  };

  const handlePreviousSet = () => {
    setIsSetLoading(true);
    setTimeout(() => {
      setCurrentSet((prevSet) => (prevSet - 1 + Math.ceil(images.length / 6)) % Math.ceil(images.length / 6));
      setIsSetLoading(false);
    }, 300);
  };

  const imagesToDisplay = useMemo(
    () => images.slice(currentSet * 6, (currentSet + 1) * 6),
    [images, currentSet]
  );

  const handleNext = () => {
    setCurrentSet((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentSet((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box bgcolor="#000000" color="#fff" py={4} px={4}>
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="400px">
          <CircularProgress size={60} sx={{ color: "#32CD32" }} />
        </Box>
      ) : images.length === 0 ? (
        <Typography variant="h6" color="#fff" textAlign="center">
          No se encontraron imágenes disponibles.
        </Typography>
      ) : isSmallScreen ? (
        // Carrusel en pantallas pequeñas
        <Box position="relative" width="100%" height="400px">
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              color: "#FFFFFF",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              ":hover": { backgroundColor: "rgba(255, 255, 255, 0.5)" },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Box
            component="img"
            src={images[currentSet]?.src}
            alt={images[currentSet]?.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            onClick={() => handleOpen(images[currentSet])}
          />
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              color: "#FFFFFF",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              ":hover": { backgroundColor: "rgba(255, 255, 255, 0.5)" },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      ) : (
        // Cuadrícula con paginación en pantallas grandes
        <>
          <Grid container spacing={2} justifyContent="center">
            {imagesToDisplay.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ borderRadius: "20px", overflow: "hidden" }}>
                  <CardActionArea onClick={() => handleOpen(image)}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={image.src}
                      alt={image.title}
                      sx={{
                        transition: "transform 0.3s ease",
                        ":hover": { transform: "scale(1.05)" },
                      }}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" mt={4} display="flex" justifyContent="center" gap={2}>
            <IconButton
              onClick={handlePreviousSet}
              disabled={isLoading || images.length === 0 || isSetLoading}
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
              disabled={isLoading || images.length === 0 || isSetLoading}
              sx={{
                backgroundColor: "#32CD32",
                color: "#000",
                ":hover": { backgroundColor: "#2FD510" },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </>
      )}

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {selectedImage && (
          <DialogContent
            sx={{
              position: "relative",
              display: "flex",
              justifyContent:"center",
              alignItems: "center",
              textAlign: "center",
              color: "#FFFFFF",
              height: "400px",
              backgroundImage: `url(${selectedImage.src})`,
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
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default GridComponent;
