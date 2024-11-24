import React from "react";
import { Box, Typography } from "@mui/material";
import imagen1 from "../../assets/images/footer/c0afae1d-18fd-476d-a449-254e82a44f37.jpg";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "#fff",
        textAlign: "center",
        width: "100%",
        height: "400px",
        backgroundImage: `url(${imagen1})`, // Corregido: Asegúrate de usar `url()`
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "48px", md: "80px" },
            fontWeight: "bold",
            color: "transparent",
            WebkitTextStroke: "2px #32CD32",
            textTransform: "uppercase",
          }}
        >
          Greek
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          color: "#fff",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: "14px" }}>
          © 2024 DJ Greek
        </Typography>

        <Typography variant="body2" sx={{ fontSize: "14px" }}>
          Desarrollado por Amoxil Web Developers
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Política de Privacidad
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
