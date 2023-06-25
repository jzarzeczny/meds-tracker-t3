import { Container, Grid } from "@mui/material";
import Image from "next/image";

export default function KidPage() {
  return (
    <Container
      sx={{
        marginLeft: "auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid xs={6}>
          <div>hi</div>
          <div>Name</div>
          <div>Birth date</div>
          <div>weight</div>
          <div>height</div>
        </Grid>
        <Grid xs={6}>
          <Image width={300} height={300} src="/face.jpeg" alt="" />
        </Grid>
        <Grid xs={12}>
          <div>Information about constantyl take meds</div>
        </Grid>
        <Grid xs={12}>
          <div>informatino about sometime taken Meds</div>
        </Grid>
      </Grid>
    </Container>
  );
}
