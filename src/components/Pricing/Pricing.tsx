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
  moreSpecifications: string;
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
    fontSize: { xs: "32px", sm: "48px", md: "64px", lg: "72px" }, // Tamaño responsivo
    color: "#fff",
    textAlign: "center",
    marginBottom: { xs: "20px", sm: "30px", md: "40px" }, // Margen ajustado a breakpoints
  }}
>
  YOUR WAY WITH<span style={{ color: "#2FD510" }}> GREEK</span>
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
          moreSpecifications={data.moreSpecifications}        />
      ))}
    </Box>
  );
};

export default Pricing;
