// Slides.tsx
import React from "react";
import { Grid, Typography, Button, Card, CardContent } from "@mui/material";

interface SlidesProps {
  alignment?: "right" | "left";
  imageSrc: string;
}

const cardData = {
  title: "DJ GREEK",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit feugiat dignissim. Nam commodo aliquet dolor quis vestibulum. Sed quis porttitor arcu.",
  buttonText: "Conóceme",
};

const Slides: React.FC<SlidesProps> = ({ alignment = "left", imageSrc }) => {
  const isLeftAligned = alignment === "left";

  return (
    <Grid container spacing={2} alignItems="center" height={"auto"}>
  <Grid
    item
    xs={12}
    sm={6}
    md={6}
    order={{ xs: 2, sm: isLeftAligned ? 1 : 2 }}
    sx={{
      textAlign: isLeftAligned ? "left" : "right",
      justifyContent: isLeftAligned ? "flex-start" : "flex-end",
      padding: "16px", // Espaciado en móviles
    }}
  >
    <Card
      sx={{
        backgroundColor: "inherit",
        color: "#32CD32",
        fontFamily: "Jost, sans-serif",
        boxShadow: "none",
        padding: 4,
        maxWidth: "800px",
        width: "100%",
      }}
    >
      <CardContent>
        <Typography
          variant="h1"
          fontWeight={900}
          sx={{
            fontSize: { xs: "70px", sm: "80px", md: "90px", lg: "100px" },
          }}
          gutterBottom
        >
          {cardData.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#FBFBFB",
            fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
            mb: 4,
            fontWeight: 500,
          }}
        >
          {cardData.description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FBFBFB",
            color: "#121212",
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "bold",
            borderRadius: "10px",
            ":hover": { backgroundColor: "#ddd" },
          }}
        >
          {cardData.buttonText}
        </Button>
      </CardContent>
    </Card>
  </Grid>

  <Grid
    item
    xs={12}
    sm={6}
    md={6}
    order={{ xs: 1, sm: isLeftAligned ? 2 : 1 }}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "16px",
    }}
  >
    <img
      src={imageSrc}
      alt="DJ GREEK"
      style={{
        borderRadius: "8px",
        objectFit: "cover",
        width: "100%",
        maxWidth: "500px",
        height: "auto",
      }}
    />
  </Grid>
</Grid>
  );
};

export default Slides;



