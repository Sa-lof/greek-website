// Slides.tsx
import React from "react";
import { Grid, Typography, Button, Card, CardContent } from "@mui/material";

const leftCardData = {
  title: "DJ GREEK",
  description:
    "Más que música, Greek es un concepto que transforma cada evento. Con un estilo 'Open Format', cada presentación es una experiencia única.",
  buttonText: "Contáctame",
};

const rightCardData = {
  title: "DJ GREEK",
  description:
    "Con seis años de trayectoria y un magnetismo único, Greek es para quienes buscan algo extraordinario. Una experiencia inolvidable.",
  buttonText: "Contáctame",
};

interface SlidesProps {
  alignment?: "right" | "left";
  onContactClick?: () => void; // Nueva prop para manejar el clic
}

const Slides: React.FC<SlidesProps> = ({ alignment = "left", onContactClick }) => {
  const isLeftAligned = alignment === "left";
  const cardData = isLeftAligned ? leftCardData : rightCardData;

  return (
    <Grid container spacing={2} alignItems="center" sx={{ height: "100%" }}>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        order={{ xs: 2, sm: isLeftAligned ? 1 : 2 }}
        sx={{
          textAlign: isLeftAligned ? "left" : "right",
          padding: "16px",
          overflow: "auto",
        }}
      >
        <Card
          sx={{
            backgroundColor: "inherit",
            color: "#32CD32",
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
                fontSize: { xs: "50px", sm: "60px", md: "70px", lg: "80px" },
                lineHeight: 1.2,
              }}
              gutterBottom
            >
              {cardData.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#FBFBFB",
                fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
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
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                fontWeight: "bold",
                borderRadius: "10px",
                ":hover": { backgroundColor: "#ddd" },
              }}
              onClick={onContactClick} // Llama a la función pasada como prop
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
      ></Grid>
    </Grid>
  );
};

export default Slides;
