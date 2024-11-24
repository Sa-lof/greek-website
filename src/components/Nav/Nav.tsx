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
          <IconButton href="https://www.instagram.com/greek.06" target="_blank" sx={{ color: '#2FD510', fontSize: "30px" }}>
            <AiFillInstagram />
          </IconButton>
          <IconButton href="https://youtube.com/@greek6353?si=sAe8UKnaygHFW3Pq" target="_blank" sx={{ color: '#2FD510', fontSize: "30px"  }}>
            <AiFillYoutube />
          </IconButton>
          <IconButton href="https://www.tiktok.com/@greektheofficial?is_from_webapp=1&sender_device=pc" target="_blank" sx={{ color: '#2FD510', fontSize: "30px"  }}>
            <AiOutlineTikTok />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
