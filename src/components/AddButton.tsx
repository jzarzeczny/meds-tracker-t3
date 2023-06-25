import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { Button } from "@mui/material";

export default function SpeedDialTooltipOpen() {
  return (
    <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          width: 40,
          height: 40,
          minWidth: "unset",
          borderRadius: "50%",
        }}
        onClick={() => console.log("hi")}
      >
        <SpeedDialIcon />
      </Button>
    </Box>
  );
}
