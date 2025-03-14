"use client"

import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material"
import type { Car } from "@/types/car"

interface CarCardProps {
  car: Car
  onClick: () => void
}

export default function CarCard({ car, onClick }: CarCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea onClick={onClick} sx={{ flexGrow: 1 }}>
        <CardMedia component="img" height="200" image={car.imageUrl} alt={car.name} sx={{ objectFit: "cover" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {car.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {car.description}
          </Typography>
          <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
            {car.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

