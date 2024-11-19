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
    <Grid container spacing={2} alignItems="center" height={"70vh"}>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        order={{ xs: 2, sm: isLeftAligned ? 1 : 2 }}
        sx={{
          textAlign: isLeftAligned ? "left" : "right",
          justifyContent: isLeftAligned ? "flex-start" : "flex-end",
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
              sx={{ color: "#FBFBFB", mb: 4, fontWeight: 500  }}
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
        }}
      >
        <img
          src={imageSrc}
          alt="DJ GREEK"
          width="500"
          height="500"
          style={{ borderRadius: "8px", objectFit: "cover" }}
        />
      </Grid>
    </Grid>
  );
};

export default Slides;



