"use client";

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent",
        transition: "background-color 0.3s",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Typography variant="h6">
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            Travel & Study
          </Link>
        </Typography>

        {/* Десктопное меню */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Button color="inherit" component={Link} href="/" sx={{ color: "white" }}>
            Главная
          </Button>
          <Button color="inherit" component={Link} href="/about" sx={{ color: "white" }}>
            О компании
          </Button>
          <Button
            color="inherit"
            onClick={handleMenuOpen}
            sx={{ color: "white" }}
            endIcon={<span>▼</span>}
          >
            Наши услуги
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                color: "white",
                borderRadius: "5px",
                minWidth: "200px",
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href="/visa_services" style={{ textDecoration: "none", color: "white" }}>
                Визовые услуги
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/educational_programs" style={{ textDecoration: "none", color: "white" }}>
                Образовательные программы
              </Link>
            </MenuItem>
          </Menu>
        </div>

        {/* Мобильное меню */}
        <IconButton
          color="inherit"
          onClick={toggleMobileMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} />
        </IconButton>

        {mobileMenuOpen && (
          <div
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Button
              color="inherit"
              component={Link}
              href="/"
              sx={{ color: "white", marginBottom: "10px" }}
              onClick={toggleMobileMenu}
            >
              Главная
            </Button>
            <Button
              color="inherit"
              component={Link}
              href="/about"
              sx={{ color: "white", marginBottom: "10px" }}
              onClick={toggleMobileMenu}
            >
              О компании
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
