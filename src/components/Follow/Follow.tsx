import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import TikTokIcon from "@mui/icons-material/MusicVideo";
const SpotifyIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 168 168"
      fill="#32CD32"
      style={{ width: "24px", height: "24px" }}
    >
      <path d="M84 0C37.548 0 0 37.548 0 84s37.548 84 84 84 84-37.548 84-84S130.452 0 84 0zm38.337 121.286a5.383 5.383 0 0 1-7.334 1.89c-20.06-12.295-45.36-15.064-75.142-8.21a5.383 5.383 0 1 1-2.336-10.529c31.996-7.106 59.634-4.038 82.514 9.13a5.383 5.383 0 0 1 2.298 7.72zm10.657-21.97a6.729 6.729 0 0 1-9.177 2.368c-23.005-14.097-57.986-18.203-84.927-9.933a6.729 6.729 0 0 1-4.006-12.808c29.878-9.343 68.638-4.816 94.208 11.278a6.73 6.73 0 0 1 2.368 9.095zm1.678-23.302c-27.024-16.155-71.59-17.618-97.053-9.623a8.074 8.074 0 0 1-5.04-15.358c28.802-9.457 78.228-7.778 109.662 11.335a8.074 8.074 0 0 1-8.57 13.646z" />
    </svg>
  );
  
const FollowMe: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "50px 20px",
        color: "#fff",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          fontSize: "64px",
          color: "#fff",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Follow me
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {[
          { icon: <YouTubeIcon />, link: "https://www.youtube.com" },
          { icon: <InstagramIcon />, link: "https://www.instagram.com" },
          { icon: <SpotifyIcon />, link: "https://www.spotify.com" },
          { icon: <AppleIcon />, link: "https://www.apple.com/music" },
          { icon: <TikTokIcon />, link: "https://www.tiktok.com" },
          { icon: <FacebookIcon />, link: "https://www.facebook.com" },
        ].map((social, index) => (
          <Grid item key={index}>
            <IconButton
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: "70px",
                height: "70px",
                border: "2px solid #32CD32",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#32CD32",
                "&:hover": {
                  backgroundColor: "#32CD32",
                  color: "#000",
                },
              }}
            >
              {social.icon}
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FollowMe;
