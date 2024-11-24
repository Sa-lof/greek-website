import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Importa imágenes locales para las miniaturas
import thumbnail1 from "../../assets/images/youtube/YT1.jpg";
import thumbnail2 from "../../assets/images/youtube/YT2.jpg";
import thumbnail3 from "../../assets/images/youtube/YT3.jpg"; // Puedes dejar esta vacía si no hay imagen
import thumbnail4 from "../../assets/images/youtube/ppyt.jpg"; // Lo mismo aquí

const Profile: React.FC = () => {
  // Array de videos con enlaces, títulos y miniaturas
  const videos = [
    { title: "Video 1", link: "https://www.youtube.com/watch?v=XMX_gCHcfg4", thumbnail: thumbnail1 },
    { title: "Video 2", link: "https://www.youtube.com/watch?v=WtG2EKzRL-A&t=17s", thumbnail: thumbnail2 },
    { title: "Video 3", link: "", thumbnail: thumbnail3 }, // Sin miniatura ni enlace
    { title: "Video 4", link: "", thumbnail: thumbnail4 }, // Sin miniatura ni enlace
  ];

  return (
    <Box
      sx={{
        color: "#fff",
        textAlign: "center",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#32CD32",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          margin: "0 auto",
        }}
      ></Box>
      <Typography variant="h4" sx={{ marginTop: "20px", fontWeight: "bold" }}>
        DJ GREEK
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={4}>
          <Typography>40K Suscriptores</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>140 Videos</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>20M Vistas</Typography>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<YouTubeIcon />}
        sx={{
          marginTop: "20px",
          backgroundColor: "#fff",
          color: "#000",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        YouTube
      </Button>

      <Grid container spacing={4} sx={{ marginTop: "20px" }}>
        {videos.map((video, index) => (
          <Grid key={index} item xs={12} sm={6} md={6} lg={6}>
            {video.thumbnail ? (
              // Mostrar miniatura si hay una imagen disponible
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              </a>
            ) : (
              // Mostrar fondo verde con texto "Coming Soon" si no hay miniatura
              <Box
                sx={{
                  backgroundColor: "#32CD32",
                  height: "250px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#000", fontWeight: "bold" }}
                >
                  Coming Soon
                </Typography>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Profile;
