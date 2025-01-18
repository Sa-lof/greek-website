import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

type PodcastCardProps = {
  name: string;
  description: string;
  logoUrl: string;
  spotifyUrl: string;
  youtubeUrl: string;
};

const SpotifyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 168 168"
    style={{ width: "100px", height: "100px" }}
  >
    <path
      d="M84 0C37.548 0 0 37.548 0 84s37.548 84 84 84 84-37.548 84-84S130.452 0 84 0zm38.337 121.286a5.383 5.383 0 0 1-7.334 1.89c-20.06-12.295-45.36-15.064-75.142-8.21a5.383 5.383 0 1 1-2.336-10.529c31.996-7.106 59.634-4.038 82.514 9.13a5.383 5.383 0 0 1 2.298 7.72zm10.657-21.97a6.729 6.729 0 0 1-9.177 2.368c-23.005-14.097-57.986-18.203-84.927-9.933a6.729 6.729 0 0 1-4.006-12.808c29.878-9.343 68.638-4.816 94.208 11.278a6.73 6.73 0 0 1 2.368 9.095zm1.678-23.302c-27.024-16.155-71.59-17.618-97.053-9.623a8.074 8.074 0 0 1-5.04-15.358c28.802-9.457 78.228-7.778 109.662 11.335a8.074 8.074 0 0 1-8.57 13.646z"
      fill="currentColor"
    />
  </svg>
);

const YouTubeIconSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{ width: "100px", height: "100px" }}
  >
    <path
      fill="currentColor"
      d="M23.498 6.186a2.998 2.998 0 0 0-2.11-2.11C19.763 3.5 12 3.5 12 3.5s-7.763 0-9.388.576a2.998 2.998 0 0 0-2.11 2.11C0 7.811 0 12 0 12s0 4.189.502 5.814a2.998 2.998 0 0 0 2.11 2.11C4.237 20.5 12 20.5 12 20.5s7.763 0 9.388-.576a2.998 2.998 0 0 0 2.11-2.11C24 16.189 24 12 24 12s0-4.189-.502-5.814zM9.75 15.02V8.98L15.25 12l-5.5 3.02z"
    />
  </svg>
);

const PodcastCard: React.FC<PodcastCardProps> = ({
  name,
  description,
  logoUrl,
  spotifyUrl,
  youtubeUrl,
}) => {
  return (
    <Box
      sx={{
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        mb: 6,
        maxWidth: "90%",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "28px", sm: "36px", md: "48px" },
          color: "#fff",
          textAlign: "center",
          marginBottom: { xs: "15px", sm: "25px", md: "35px" },
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="body1"
        color="#FFFFFF"
        fontSize={{ xs: "14px", sm: "18px", md: "20px" }}
        px={{ xs: 2, sm: 4, md: 6 }}
        sx={{ maxWidth: 900, margin: "0 auto" }}
      >
        {description}
      </Typography>
      <Box
        component="img"
        src={logoUrl}
        alt="Podcast Logo"
        sx={{
          width: { xs: 200, sm: 250, md: 300 },
          height: { xs: 200, sm: 250, md: 300 },
          borderRadius: "20px",
          marginBottom: 2,
          mt: 4,
        }}
      />
      <Box mt={4} display="flex" justifyContent="center" gap={14}>
        <IconButton
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          aria-label="Spotify"
          size="large"
          sx={{ fontSize: "32px" }}
        >
          <SpotifyIcon />
        </IconButton>
        <IconButton
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          aria-label="YouTube"
          size="large"
          sx={{ fontSize: "32px" }}
        >
          <YouTubeIconSVG />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PodcastCard;
