import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppleIcon from "@mui/icons-material/Apple";
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

const SoundCloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    fill="#32CD32"
    style={{ width: "24px", height: "24px" }}
  >
    <path d="M537.6 250.3c-8.5 0-16.9 1.1-24.9 3.3-6.4-76.1-69.9-135.6-146.7-135.6-26.1 0-50.7 6.8-72.2 18.7-7.5-4.8-16.4-7.4-25.8-7.4-26.4 0-48 21.6-48 48v248h317.6c58.8 0 106.4-47.6 106.4-106.4.1-58.7-47.5-106.6-106.4-106.6zM104 432c-13.2 0-24-10.8-24-24V264c0-13.2 10.8-24 24-24s24 10.8 24 24v144c0 13.2-10.8 24-24 24zm96 0c-13.2 0-24-10.8-24-24V280c0-13.2 10.8-24 24-24s24 10.8 24 24v128c0 13.2-10.8 24-24 24zm96 0c-13.2 0-24-10.8-24-24V296c0-13.2 10.8-24 24-24s24 10.8 24 24v112c0 13.2-10.8 24-24 24z" />
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
          { icon: <YouTubeIcon />, link: "https://youtube.com/@greek6353?si=sAe8UKnaygHFW3Pq" },
          { icon: <InstagramIcon />, link: "https://www.instagram.com/greek.06" },
          { icon: <SpotifyIcon />, link: "https://open.spotify.com/intl-es/artist/71KNSWBRFRbFOLnASreU9K?si=sESDl0HQT3WGknz-0POgtg" },
          { icon: <AppleIcon />, link: "https://music.apple.com/mx/artist/the-greek-%CF%89/1553075862" },
          { icon: <TikTokIcon />, link: "https://www.tiktok.com/@greektheofficial?is_from_webapp=1&sender_device=pc" },
          { icon: <SoundCloudIcon />, link: "https://soundcloud.com/greek06" }, // Reemplazado por SoundCloud
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
