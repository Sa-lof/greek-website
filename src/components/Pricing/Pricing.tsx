import React from "react";
import { Box, Typography } from "@mui/material";
import PricingCard from "../PricingCard/PricingCard";

interface PricingData {
  imageUrl: string;
  price: string;
  items: string[];
  packageName: string;
  djName: string;
  audioSrc: string;
}

interface PricingProps {
  pricingData: PricingData[];
}

const Pricing: React.FC<PricingProps> = ({ pricingData }) => {
  return (
    <Box
      sx={{
        backgroundColor: "inherit",
        color: "#fff",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
      }}
    >
      {/* Title */}
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
        PARTY WITH <span style={{ color: "#2FD510" }}>GREEK</span>
      </Typography>

      {/* Pricing Cards */}
      {pricingData.map((data, index) => (
        <PricingCard
          key={index}
          imageUrl={data.imageUrl}
          price={data.price}
          items={data.items}
          packageName={data.packageName}
          djName={data.djName}
          audioSrc={data.audioSrc}
        />
      ))}
    </Box>
  );
};

export default Pricing;
