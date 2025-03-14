"use client";

import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static" color="primary" sx={{ mb: 2 }}>
            <Toolbar>
              <DirectionsCarIcon sx={{ mr: 2 }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Car Gallery
              </Typography>
            </Toolbar>
          </AppBar>
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
