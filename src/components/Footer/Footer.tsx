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
        backgroundImage: `url(${imagen1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden", // Evita contenido fuera de límites
        top:60
      }}
    >
      {/* Overlay oscuro */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Oscurecer la imagen
          zIndex: 1, // Asegúrate de que el texto esté visible encima de este fondo
        }}
      />

      {/* Contenido principal */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2, // Coloca el texto encima del overlay
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "48px", md: "200px" },
            fontWeight: "bold",
            color: "transparent",
            WebkitTextStroke: "2px #32CD32",
            textTransform: "uppercase",
          }}
        >
          Greek
        </Typography>
      </Box>

      {/* Footer inferior */}
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
          zIndex: 2, // Asegúrate de que este texto esté sobre el overlay
        }}
      >
        <Typography variant="body2" sx={{ fontSize: "14px",}}>
          © 2024 DJ Greek
        </Typography>

        <Typography
  variant="body2"
  sx={{ fontSize: "14px", textDecoration: "none", color: "inherit" }}
  component="a"
  href="https://amoxtli.tech/" // Reemplaza con la URL real
  target="_blank"
  rel="noopener noreferrer"
>
  Desarrollado por Amoxil Web Developers
</Typography>

<Typography
  variant="body2"
  sx={{ fontSize: "14px", textDecoration: "none", color: "inherit" }}
  component="a"
  href="https://amoxtli.tech/" // Reemplaza con la URL real
  target="_blank"
  rel="noopener noreferrer"
>
  Aviso de privacidad
</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
