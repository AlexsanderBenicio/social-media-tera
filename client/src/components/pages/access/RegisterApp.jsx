import React, { useState } from "react";
import axios from "axios";
// import { useEffect } from "react";

const RegisterApp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    type: true,
    message: "",
  });

  async function fetchData() {
    axios
      .post("http://localhost:8080/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Erro ao cadastrar usuário", error);
        setStatus({
          type: false,
          message: "Erro ao cadastrar usuário",
        });
      });
  }

  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setUser({
      name: "",
      email: "",
      password: "",
    });
    if (user.name && user.email && user.password !== "") {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div>
      <div>
        <h1>Cadastre-se</h1>
        {status.type === false ? (
          <p style={{ color: "red" }}>{status.message}</p>
        ) : (
          ""
        )}
      </div>
      <form action="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Nome</label>
          <br />
          <input
            type="text"
            placeholder="Digite seu nome"
            value={user.name}
            name="name"
            onChange={valueInput}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input
            type="email"
            placeholder="Digite seu nome"
            value={user.email}
            name="email"
            onChange={valueInput}
          />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <br />
          <input
            type="password"
            placeholder="Digite seu nome"
            value={user.password}
            name="password"
            onChange={valueInput}
          />
        </div>
        <div>
          <button>Registrar-se</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterApp;
