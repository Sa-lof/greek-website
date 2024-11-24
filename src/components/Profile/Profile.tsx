import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Profile: React.FC = () => {
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
        {[1, 2, 3, 4].map((video, index) => (
          <Grid key={index} item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                backgroundColor: "#32CD32",
                height: "150px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#000", fontWeight: "bold"}}
              >
                VIDEO
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Profile;
