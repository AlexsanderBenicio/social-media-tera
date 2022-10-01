import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

import { Avatar, createTheme, Link, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import purple from "@mui/material/colors/purple";
import blueGrey from "@mui/material/colors/blueGrey";

const bgColor = createTheme({
  palette: {
    primary: {
      light: purple[100],
      main: purple[500],
      dark: purple[700],
    },

    secondary: {
      light: blueGrey[200],
      main: blueGrey[400],
      dark: blueGrey[700],
    },
  },
});

const LoginApp = () => {
  return (
    <Box>
      <Grid>
        <Paper
          elevation={10}
          sx={{
            backgroundColor: bgColor.palette.primary.light,
            paddingTop: 2,
            height: "65vh",
            width: 300,
            margin: "80px auto",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Avatar sx={{ backgroundColor: bgColor.palette.primary.dark }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
              Entrar
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "50%",
              padding: 2,
            }}
          >
            <Grid sx={{ textAlign: "center", marginBottom: 1 }}>
              <TextField
                id="email"
                label="E-mail"
                variant="filled"
                size="small"
                fullWidth
                required
                type="email"
              />
            </Grid>
            <Grid sx={{ textAlign: "center", marginBottom: 1 }}>
              <TextField
                id="password"
                label="Senha"
                variant="filled"
                size="small"
                fullWidth
                required
                type="password"
              />
            </Grid>
            <Grid>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Lembrar-se de mim"
                />
              </FormGroup>
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ backgroundColor: bgColor.palette.primary.main }}
                type="submit"
                fullWidth
                variant="contained"
              >
                Entrar
              </Button>
            </Grid>
            <Grid sx={{ marginTop: 1 }}>
              <Typography>
                <Link href="#">Esqueceu a senha?</Link>
              </Typography>
            </Grid>
            <Grid sx={{ marginTop: 1 }}>
              <Typography>
                Já possui uma conta? <Link href="#">Faça o login</Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};

export default LoginApp;
