// Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTikTok } from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#000000', boxShadow:"none" }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
        <Typography
          variant="h6"
          sx={{ color: '#2FD510', fontWeight: 'bold', }}
          fontSize={"32px"}
        >
          DJ GREEK
        </Typography>
        <div>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#2FD510', fontSize: "30px" }}>
            <AiFillInstagram />
          </IconButton>
          <IconButton href="https://youtube.com" target="_blank" sx={{ color: '#2FD510', fontSize: "30px"  }}>
            <AiFillYoutube />
          </IconButton>
          <IconButton href="https://tiktok.com" target="_blank" sx={{ color: '#2FD510', fontSize: "30px"  }}>
            <AiOutlineTikTok />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
