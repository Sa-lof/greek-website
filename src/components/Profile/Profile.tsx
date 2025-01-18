import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import imagen1 from "../../assets/images/youtube/channels4_profile.jpg"
import thumbnail1 from "../../assets/images/youtube/YT1.jpg";
import thumbnail2 from "../../assets/images/youtube/YT2.jpg";
import thumbnail3 from "../../assets/images/youtube/YT3.jpg"; // Puedes dejar esta vacía si no hay imagen
import thumbnail4 from "../../assets/images/youtube/YT4.jpeg"; // Lo mismo aquí

const Profile: React.FC = () => {
  // Array de videos con enlaces, títulos y miniaturas
  const videos = [
    { title: "Video 1", link: "https://www.youtube.com/watch?v=XMX_gCHcfg4", thumbnail: thumbnail1 },
    { title: "Video 2", link: "https://www.youtube.com/watch?v=WtG2EKzRL-A&t=17s", thumbnail: thumbnail2 },
    { title: "Video 3", link: " https://youtu.be/9hbb2W21iSA", thumbnail: thumbnail3 }, // Sin miniatura ni enlace
    { title: "Video 4", link: "https://youtu.be/L1ojZj99VTU?si=QlJxPVHt_6syJPqs", thumbnail: thumbnail4 }, // Sin miniatura ni enlace
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
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      overflow: "hidden",
      margin: "0 auto",
    }}
  >
    <img
      src={imagen1}
      alt="Profile"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </Box>
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
        href="https://youtube.com/@greek6353?si=sAe8UKnaygHFW3Pq"
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
              "&:hover .overlay": {
                opacity: 0.7,
              },
              "&:hover .play-icon": {
                opacity: 1,
                transform: "scale(1.1)",
              },
            }}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            {/* Oscurecer fondo al hacer hover */}
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "black",
                opacity: 0,
                transition: "opacity 0.3s ease",
                borderRadius: "10px",
              }}
            />
            {/* Ícono de reproducción */}
            <Box
              className="play-icon"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(0.9)",
                opacity: 0,
                transition: "opacity 0.3s ease, transform 0.3s ease",
                color: "#32CD32",
                fontSize: "50px",
              }}
            >
              <YouTubeIcon fontSize="inherit" />
            </Box>
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
