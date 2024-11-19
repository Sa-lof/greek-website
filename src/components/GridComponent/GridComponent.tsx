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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const images = [
  {
    src: "https://via.placeholder.com/600x400",
    title: "Evento 1",
    description: "Descripción del evento 1",
  },
  {
    src: "https://via.placeholder.com/600x400",
    title: "Evento 2",
    description: "Descripción del evento 2",
  },
  {
    src: "https://via.placeholder.com/200x400",
    title: "Evento 3",
    description: "Descripción del evento 3",
  },
  {
    src: "https://via.placeholder.com/200x400",
    title: "Evento 4",
    description: "Descripción del evento 4",
  },
  {
    src: "https://via.placeholder.com/800x400",
    title: "Evento 5",
    description: "Descripción del evento 5",
  },
  {
    src: "https://via.placeholder.com/600x400",
    title: "Evento 6",
    description: "Descripción del evento 6",
  },
];

const GridComponent = () => {
  const [open, setOpen] = useState(false);

  interface Image {
    src: string;
    title: string;
    description: string;
  }

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleOpen = (image: Image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box bgcolor="#121212" color="#fff" py={4} px={4}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "30px", overflow: "hidden" }}>
            <CardActionArea onClick={() => handleOpen(images[0])}>
              <CardMedia
                component="img"
                height="400"
                image={images[0].src}
                alt={images[0].title}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "30px", overflow: "hidden" }}>
            <CardActionArea onClick={() => handleOpen(images[1])}>
              <CardMedia
                component="img"
                height="400"
                image={images[1].src}
                alt={images[1].title}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Card sx={{ borderRadius: "30px", overflow: "hidden" }}>
            <CardActionArea onClick={() => handleOpen(images[2])}>
              <CardMedia
                component="img"
                height="400"
                image={images[2].src}
                alt={images[2].title}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Card sx={{ borderRadius: "30px", overflow: "hidden" }}>
            <CardActionArea onClick={() => handleOpen(images[3])}>
              <CardMedia
                component="img"
                height="400"
                image={images[3].src}
                alt={images[3].title}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Card sx={{ borderRadius: "30px", overflow: "hidden" }}>
            <CardActionArea onClick={() => handleOpen(images[4])}>
              <CardMedia
                component="img"
                height="400"
                image={images[4].src}
                alt={images[4].title}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "30px", overflow: "hidden" }}>
            <CardActionArea onClick={() => handleOpen(images[5])}>
              <CardMedia
                component="img"
                height="400"
                image={images[5].src}
                alt={images[5].title}
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

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
