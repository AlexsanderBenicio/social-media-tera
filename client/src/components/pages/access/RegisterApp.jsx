import React, { useState } from "react";
import axios from "axios";
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
// import { useEffect } from "react";

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

const RegisterApp = () => {
  const [name, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");

  const [status, setStatus] = useState({
    type: true,
    message: "",
  });

  const handleUserInputChange = (event) => setUserName(event.target.value);
  const handleEmailInputChange = (event) => setUserEmail(event.target.value);
  const handlePasswordInputChange = (event) =>
    setUserPassword(event.target.value);

  async function fetchData() {
    axios
      .post("http://localhost:8080/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then(({ data }) => {
        console.log(data);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log("Erro ao cadastrar usuário", error);
        setStatus({
          type: false,
          message: "Erro ao cadastrar usuário",
        });
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && password !== "") {
      fetchData();
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
              sx={{ marginBottom: 1, textAlign: "center" }}
            >
              Cadastrar
              {status.type === false ? (
                <p style={{ color: "red", fontSize: 15, marginBottom: 0 }}>
                  {status.message}
                </p>
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
              height: "70%",
              padding: 2,
            }}
          >
            <Grid sx={{ textAlign: "center", marginBottom: 1 }}>
              <TextField
                id="name"
                label="Nome Completo"
                variant="filled"
                size="small"
                fullWidth
                required
                type="text"
                value={name}
                onChange={handleUserInputChange}
              />
            </Grid>
            <Grid sx={{ textAlign: "center", marginBottom: 1 }}>
              <TextField
                id="email"
                label="E-mail"
                variant="filled"
                size="small"
                fullWidth
                required
                type="email"
                value={email}
                onChange={handleEmailInputChange}
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
                value={password}
                onChange={handlePasswordInputChange}
              />
            </Grid>
            <Grid>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Aceitar todos os Termos de uso"
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
                Cadastrar
              </Button>
            </Grid>
            <Grid sx={{ marginTop: 1 }}>
              <Typography>
                Já possui uma conta? <Link to="/login">Faça o login</Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};

export default RegisterApp;

// import React, { useState } from "react";
// import axios from "axios";
// // import { useEffect } from "react";

// const RegisterApp = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [status, setStatus] = useState({
//     type: true,
//     message: "",
//   });

//   async function fetchData() {
//     axios
//       .post("http://localhost:8080/signup", {
//         name: user.name,
//         email: user.email,
//         password: user.password,
//       })
//       .then(({ data }) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log("Erro ao cadastrar usuário", error);
//         setStatus({
//           type: false,
//           message: "Erro ao cadastrar usuário",
//         });
//       });
//   }

//   const valueInput = (e) =>
//     setUser({ ...user, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (user.name && user.email && user.password !== "") {
//       fetchData();
//       alert(JSON.stringify(user));
//     }
//     setUser({
//       name: "",
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <div>
//       <div>
//         <h1>Cadastre-se</h1>
//         {status.type === false ? (
//           <p style={{ color: "red" }}>{status.message}</p>
//         ) : (
//           ""
//         )}
//       </div>
//       <form>
//         <div>
//           <label htmlFor="">Nome</label>
//           <br />
//           <input
//             type="text"
//             placeholder="Digite seu nome"
//             value={user.name}
//             name="name"
//             onChange={valueInput}
//           />
//         </div>
//         <div>
//           <label htmlFor="">Email</label>
//           <br />
//           <input
//             type="email"
//             placeholder="Digite seu nome"
//             value={user.email}
//             name="email"
//             onChange={valueInput}
//           />
//         </div>
//         <div>
//           <label htmlFor="">Senha</label>
//           <br />
//           <input
//             type="password"
//             placeholder="Digite seu nome"
//             value={user.password}
//             name="password"
//             onChange={valueInput}
//           />
//         </div>
//         <div>
//           <button onClick={handleSubmit}>Registrar-se</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RegisterApp;
