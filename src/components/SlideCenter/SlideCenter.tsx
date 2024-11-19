// SlideCenter.tsx
import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

interface SlideCenterProps {
  backgroundImage: string;
}

const cardData = {
  title: "DJ GREEK",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit feugiat dignissim. Nam commodo aliquet dolor quis vestibulum. Sed quis porttitor arcu.",
  buttonText: "Conóceme",
};

const SlideCenter: React.FC<SlideCenterProps> = ({ backgroundImage }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#FBFBFB",
        textAlign: "center",
        height:"70vh"
      }}
    >
      <Card
        sx={{
          backgroundColor: "inherit",
          color: "#32CD32",
          fontFamily: "Jost, sans-serif",
          boxShadow: "none",
          padding: 4,
        }}
      >
        <CardContent>
          <Typography
            variant="h1"
            fontWeight={900}
            fontSize={"128px"}
            gutterBottom
          >
            {cardData.title}
          </Typography>
          <Typography
            variant="body1"
            fontSize={"28px"}
            sx={{ color: "#FBFBFB", mb: 4, fontWeight: 500 }}
          >
            {cardData.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FBFBFB",
              color: "#121212",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "10px",
              ":hover": { backgroundColor: "#ddd" },
            }}
          >
            {cardData.buttonText}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SlideCenter;
