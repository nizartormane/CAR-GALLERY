"use client"

import { useState } from "react"
import { Grid, Dialog, DialogContent, IconButton, Box } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import CarCard from "./car-card"
import type { Car } from "@/types/car"
import Image from "next/image"

interface CarGridProps {
  cars: Car[]
}

export default function CarGrid({ cars }: CarGridProps) {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)

  const handleOpenDialog = (car: Car) => {
    setSelectedCar(car)
  }

  const handleCloseDialog = () => {
    setSelectedCar(null)
  }

  return (
    <>
      <Grid container spacing={3}>
        {cars.map((car) => (
          <Grid item key={car.id} xs={12} sm={6} md={4}>
            <CarCard car={car} onClick={() => handleOpenDialog(car)} />
          </Grid>
        ))}
      </Grid>

      <Dialog open={!!selectedCar} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        {selectedCar && (
          <DialogContent sx={{ p: 0, position: "relative" }}>
            <IconButton
              onClick={handleCloseDialog}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "white",
                bgcolor: "rgba(0,0,0,0.5)",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.7)",
                },
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
              <Image
                src={selectedCar.imageUrl || "/placeholder.svg"}
                alt={selectedCar.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

