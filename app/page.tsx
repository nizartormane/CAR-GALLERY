"use client"

import { Container, Typography, Box } from "@mui/material"
import CarGrid from "@/components/car-grid"
import { carsData } from "@/data/cars"

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Car Gallery
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Browse our collection of beautiful cars
        </Typography>
      </Box>
      <CarGrid cars={carsData} />
    </Container>
  )
}

