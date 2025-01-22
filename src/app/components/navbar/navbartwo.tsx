"use client";

"use client";

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { europeCountries, AmericaCountries } from "@/app/data/CountryData";

const NavbarMUI: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesMenuAnchor, setServicesMenuAnchor] = useState<null | HTMLElement>(null);
  const [visaMenuAnchor, setVisaMenuAnchor] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    setAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  ) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (setAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => {
    setAnchor(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: isScrolled
          ? "linear-gradient(90deg, #742f8b, #000)"
          : "transparent",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: "none",
        zIndex: 1000,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Логотип */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image src="/images/logo.svg" alt="Visa Travels Logo" width={65} height={65} />
        </Link>

        {/* Десктопное меню */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Button
            color="inherit"
            component={Link}
            href="/"
            sx={{
              color: "white",
              textTransform: "none",
              fontWeight: 500,
              fontSize: "14px",
              "&:hover": {
                color: "#ffbd2a",
              },
            }}
          >
            Главная
          </Button>
          <Button
            color="inherit"
            component={Link}
            href="/about_page"
            sx={{
              color: "white",
              textTransform: "none",
              fontWeight: 500,
              fontSize: "14px",
              "&:hover": {
                color: "#ffbd2a",
              },
            }}
          >
            О компании
          </Button>

          <Button
            color="inherit"
            onClick={(e) => handleMenuOpen(e, setServicesMenuAnchor)}
            sx={{
              color: "white",
              textTransform: "none",
              fontWeight: 500,
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              "&:hover": {
                color: "#ffbd2a",
              },
            }}
          >
            Наши услуги <span style={{ fontSize: "16px" }}>▼</span>
          </Button>
          <Menu
            anchorEl={servicesMenuAnchor}
            open={Boolean(servicesMenuAnchor)}
            onClose={() => handleMenuClose(setServicesMenuAnchor)}
            MenuListProps={{
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "white",
              },
            }}
          >
            <MenuItem onClick={() => handleMenuClose(setServicesMenuAnchor)}>
              <Link href="/visa_page" style={{ color: "inherit", textDecoration: "none" }}>
                Визовые услуги
              </Link>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(setServicesMenuAnchor)}>
              <Link
                href="/services_page/study_page"
                style={{ color: "inherit", textDecoration: "none" }}
              >
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
          {mobileMenuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
        </IconButton>

        {mobileMenuOpen && (
          <div
            style={{
              position: "fixed",
              top: "60px",
              left: 0,
              width: "100%",
              background: "linear-gradient(90deg, #742f8b, #000)",
              display: "flex",
              flexDirection: "column",
              padding: "15px",
              zIndex: 1000,
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
              href="/about_page"
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

export default NavbarMUI;