import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const LoginApp = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleUserInputChange = (event) => setUserEmail(event.target.value);
  const handlePasswordInputChange = (event) =>
    setUserPassword(event.target.value);

  const [status, setStatus] = useState({
    type: true,
    message: "",
  });

  const handleSubmit = async () => {
    // e.preventDefault();
    const object = JSON.stringify({
      email: userEmail,
      password: userPassword,
    });
    if (userEmail && userPassword) {
      const isLogged = await fetch("http://localhost:8080/login", {
        method: "post",
        body: object,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const retorno = await isLogged.json();

      if (retorno.token) {
        navigate("/dashboard");
        localStorage.setItem("token", retorno.token);
      } else {
        setStatus({
          type: false,
          message: "Usuário não encontrado!",
        });
      }
    }
  };
  return (
    <Box>
      <Grid>
        <Paper
          elevation={10}
          sx={{
            backgroundColor: bgColor.palette.primary.light,
            paddingTop: 2,
            height: "70vh",
            width: 350,
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
            <Typography
              variant="h4"
              sx={{ marginBottom: 2, textAlign: "center" }}
            >
              Entrar
              {status.type === false ? (
                <p style={{ color: "red", fontSize: 15 }}>{status.message}</p>
              ) : (
                ""
              )}
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
                value={userEmail}
                onChange={handleUserInputChange}
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
                value={userPassword}
                onChange={handlePasswordInputChange}
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
                onClick={handleSubmit}
              >
                Entrar
              </Button>
            </Grid>
            <Grid sx={{ marginTop: 1 }}>
              <Typography>
                <Link to="#">Esqueceu a senha?</Link>
              </Typography>
            </Grid>
            <Grid sx={{ marginTop: 1 }}>
              <Typography>
                Não possui uma conta? <Link to="/signup">Cadastre-se</Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};

export default LoginApp;
