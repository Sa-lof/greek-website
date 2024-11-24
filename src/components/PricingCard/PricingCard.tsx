import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import AddBoxIcon from "@mui/icons-material/AddBox";

interface PricingCardProps {
  imageUrl: string;
  price: string;
  items: string[];
  packageName: string;
  djName: string;
  audioSrc: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  imageUrl,
  price,
  items,
  packageName,
  djName,
  audioSrc,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
  
    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateProgress);
      audioElement.addEventListener("loadedmetadata", updateProgress);
    }
  
    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", updateProgress);
        audioElement.removeEventListener("loadedmetadata", updateProgress);
      }
    };
  }, []);  

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{
        padding: { xs: 2, sm: 3, md: 5 },
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      {/* Left Side Card */}
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        justifyContent="center"
        sx={{ padding: { xs: 2, sm: 3 } }}
      >
        <Card
          sx={{
            backgroundColor: "#121212",
            border: "2px solid #2FD510",
            borderRadius: "20px",
            width: { xs: "100%", sm: "80%", md: "70%" },
            padding: 2,
          }}
        >
          <CardMedia
            component="img"
            image={imageUrl}
            alt="Package Image"
            sx={{
              height: { xs: 200, sm: 250, md: 300 },
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#fff",
                fontSize: { xs: "24px", sm: "28px", md: "32px" },
                textAlign: "center",
              }}
            >
              {price}/MXN
            </Typography>
            <Button
              variant="text"
              sx={{
                color: "#ffffff",
                fontSize: { xs: "14px", sm: "15px" },
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "#121212",
                  color: "#2FD510",
                },
              }}
            >
              Agregar
              <AddBoxIcon sx={{ marginLeft: 0.5, fontSize: "18px" }} />
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Right Side Content Section */}
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {items.map((item, index) => (
            <Typography
              key={index}
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                color: index % 2 === 0 ? "#2FD510" : "#fff",
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
              }}
            >
              {index + 1}. {item}
            </Typography>
          ))}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              marginTop: "10px",
              fontSize: { xs: "18px", sm: "22px", md: "24px" },
            }}
          >
            {packageName}
          </Typography>

          {/* Audio Player */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <audio ref={audioRef} src={audioSrc} />
            <Typography variant="body2" sx={{ fontSize: "12px" }}>
              {new Date(currentTime * 1000).toISOString().substr(14, 5)} /{" "}
              {new Date(duration * 1000).toISOString().substr(14, 5)}
            </Typography>
            <IconButton
              onClick={() =>
                audioRef.current && (audioRef.current.currentTime -= 10)
              }
              sx={{ padding: "4px" }}
            >
              <SkipPreviousIcon sx={{ color: "#fff", fontSize: "20px" }} />
            </IconButton>
            <IconButton onClick={togglePlay} sx={{ padding: "4px" }}>
              {isPlaying ? (
                <PauseIcon sx={{ color: "#fff", fontSize: "20px" }} />
              ) : (
                <PlayArrowIcon sx={{ color: "#fff", fontSize: "20px" }} />
              )}
            </IconButton>
            <IconButton
              onClick={() =>
                audioRef.current && (audioRef.current.currentTime += 10)
              }
              sx={{ padding: "4px" }}
            >
              <SkipNextIcon sx={{ color: "#fff", fontSize: "20px" }} />
            </IconButton>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box
              component="progress"
              value={currentTime}
              max={duration}
              sx={{
                width: "100%",
                height: "3px",
                appearance: "none",
                "&::-webkit-progress-bar": {
                  backgroundColor: "#555",
                  borderRadius: "2px",
                },
                "&::-webkit-progress-value": {
                  backgroundColor: "#2FD510",
                  borderRadius: "2px",
                },
                "&::-moz-progress-bar": {
                  backgroundColor: "#2FD510",
                  borderRadius: "2px",
                },
              }}
            />
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#FFFFFF", fontSize: "13px" }}
          >
            {djName}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PricingCard;
