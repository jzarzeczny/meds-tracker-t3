import { Box, Container } from "@mui/material";
import SpeedDialTooltipOpen from "~/components/AddButton";
import KidCard from "~/components/KidCard";

export default function Dashboard() {
  return (
    <>
      <Container component="main">
        <Box
          sx={{
            m: 2,
          }}
        >
          <KidCard />
        </Box>

        <SpeedDialTooltipOpen />
      </Container>
    </>
  );
}
