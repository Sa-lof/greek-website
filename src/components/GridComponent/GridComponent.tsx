import React, { useState, useEffect, useMemo } from "react";
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

  // Función para cargar imágenes desde Supabase
  const fetchImages = async () => {
    const { data, error } = await supabase.storage
      .from("Greek")
      .list("Gallery", { limit: 1000 });

    if (error) {
      console.error("Error al obtener imágenes:", error);
      return [];
    }

    const validFiles = data.filter((file) => file.name !== ".emptyFolderPlaceholder");

    // Generar URLs públicas de manera paralela
    const imagePromises = validFiles.map(async (file) => {
      const { data: publicUrlData } = await supabase.storage
        .from("Greek")
        .getPublicUrl(`Gallery/${file.name}`);
      return {
        src: publicUrlData?.publicUrl || "",
        title: file.name,
        description: `Descripción de ${file.name}`,
      };
    });

    return Promise.all(imagePromises);
  };

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      const imagesFromBucket = await fetchImages();
      setImages(imagesFromBucket as Image[]);
      setIsLoading(false);
    };
    loadImages();
  }, []);

  const handleOpen = (image: Image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleNextSet = () => {
    setCurrentSet((prevSet) => (prevSet + 1) % Math.ceil(images.length / 6));
  };

  const handlePreviousSet = () => {
    setCurrentSet((prevSet) => (prevSet - 1 + Math.ceil(images.length / 6)) % Math.ceil(images.length / 6));
  };

  // Memorización del conjunto actual de imágenes
  const imagesToDisplay = useMemo(
    () => images.slice(currentSet * 6, (currentSet + 1) * 6),
    [images, currentSet]
  );

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
      ) : (
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
      )}

      <Box textAlign="center" mt={4} display="flex" justifyContent="center" gap={2}>
        <IconButton
          onClick={handlePreviousSet}
          disabled={isLoading || images.length === 0}
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
          disabled={isLoading || images.length === 0}
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
            <Box sx={{ position: "relative", zIndex: 1 }}>
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
