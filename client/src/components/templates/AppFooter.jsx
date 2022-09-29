import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../Typograph";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="/">
        Social Media Tera
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex", flexDirection: "column" }}>
        <Grid
          container
          spacing={5}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Typography variant="h6" marked="left" gutterBottom>
                  Website
                </Typography>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box
              component="ul"
              sx={{
                m: 0,
                listStyle: "none",
                p: 0,
                display: "flex",
              }}
            >
              <Box component="li" sx={{ pt: 2 }}>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  href="/"
                >
                  Terms
                </Link>
              </Box>
              <Box component="li" sx={{ pt: 2, pl: 2 }}>
                <Link sx={{ textDecoration: "none", color: "black" }} href="/">
                  Privacy
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
          sx={{ height: 100 }}
        >
          <Typography
            variant="caption"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              href="https://www.freepik.com"
              rel="sponsored"
              title="Freepik"
              sx={{
                textDecoration: "none",
                color: "#00F",
              }}
            >
              Icons made by Freepik from www.flaticon.com is licensed by CC 3.0
              BY
            </Link>
          </Typography>
        </Grid>
      </Container>
    </Typography>
  );
}
