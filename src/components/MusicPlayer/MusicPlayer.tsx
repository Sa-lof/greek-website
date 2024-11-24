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
    <Box display="flex" justifyContent="center" sx={{ px: 2, py: 4 }}>
      <Box
        display="flex"
        alignItems="center"
        bgcolor="#D9D9D9"
        p={3}
        borderRadius={"10px"}
        sx={{
          width: { xs: "100%", sm: "80%", md: "60%", lg: "60%" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          bgcolor="#cfcfcf"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={{ xs: "100%", sm: 80 }}
          height={80}
          mb={{ xs: 2, sm: 0 }}
          mr={{ xs: 0, sm: 4 }}
          borderRadius={2}
          overflow="hidden"
        >
          <img
            src="/path/to/your-image.jpg"
            alt="Cover"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Box flex={1} display="flex" flexDirection="column" gap={1}>
          <Typography
            variant="h6"
            fontWeight="bold"
            textAlign={{ xs: "center", sm: "left" }}
          >
            SHOT
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            textAlign={{ xs: "center", sm: "left" }}
          >
            DJ GREEK
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            flexWrap="wrap"
            sx={{
              mt: 1,
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Slider
              value={progress}
              onChange={(e, newValue) => setProgress(newValue as number)}
              sx={{ color: "green", height: 2, flex: 1, minWidth: "150px" }}
              aria-labelledby="progress-slider"
            />
            <Typography variant="body2" color="textSecondary">
              {formatTime(audioRef.current.currentTime || 0)} /{" "}
              {formatTime(audioRef.current.duration || 0)}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <IconButton
              onClick={() => (audioRef.current.currentTime -= 10)}
              size="small"
            >
              <SkipPreviousIcon />
            </IconButton>
            <IconButton onClick={togglePlayPause} size="small">
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <IconButton
              onClick={() => (audioRef.current.currentTime += 10)}
              size="small"
            >
              <SkipNextIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MusicPlayer;
