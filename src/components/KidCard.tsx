import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Link from "next/link";

export default function KidCard() {
  return (
    <Link href="kid/1">
      <Card sx={{ maxWidth: 400 }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CardContent
            sx={{ flex: "0 1 50%", display: "flex", alignItems: "center" }}
          >
            <Typography sx={{ textDecoration: "none" }}>Lisa</Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="100"
            image="/face.jpeg"
            alt="green iguana"
            sx={{ flex: "0 1 50%" }}
          />
        </Box>
      </Card>
    </Link>
  );
}
