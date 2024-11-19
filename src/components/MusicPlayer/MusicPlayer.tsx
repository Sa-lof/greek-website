import React, { useState, useRef } from "react";
import { Box, Typography, IconButton, Slider } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import sample from "../../assets/music/sample.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio(sample));

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((currentTime / duration) * 100);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  audioRef.current.ontimeupdate = handleTimeUpdate;

  return (
    <Box display="flex" justifyContent="center">
      <Box
        display="flex"
        alignItems="center"
        bgcolor="#D9D9D9"
        p={3}
        borderRadius={"10px"}
        sx={{ width: { xs: "100%", sm: "80%", md: "60%" } }}
      >
        <Box
          bgcolor="#cfcfcf"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={80}
          height={80}
          mr={4}
          borderRadius={2}
          overflow="hidden"
        >
          <img
            src="/path/to/your-image.jpg"
            alt="Cover"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Box flex={1} display="flex" flexDirection="column">
          <Typography variant="h6" fontWeight="bold">
            SHOT
          </Typography>
          <Typography variant="body2" color="textSecondary">
            DJ GREEK
          </Typography>
          <Box display="flex" alignItems="center" mt={1} gap={1}>
            <Slider
              value={progress}
              onChange={(e, newValue) => setProgress(newValue as number)}
              sx={{ color: "green", height: 2, flex: 1 }}
              aria-labelledby="progress-slider"
            />
            <Typography variant="body2" color="textSecondary" ml={2}>
              {formatTime(audioRef.current.currentTime || 0)} /{" "}
              {formatTime(audioRef.current.duration || 0)}
            </Typography>
            <IconButton onClick={() => (audioRef.current.currentTime -= 10)}>
              <SkipPreviousIcon />
            </IconButton>
            <IconButton onClick={togglePlayPause}>
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <IconButton onClick={() => (audioRef.current.currentTime += 10)}>
              <SkipNextIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MusicPlayer;
