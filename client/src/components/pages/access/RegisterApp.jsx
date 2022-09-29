import React, { useState, useEffect } from "react";
import axios from "axios";

const RegisterApp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fetchedData, setFetchedData] = useState("");

  async function fetchData() {
    const { data } = await axios.post("http://localhost:8080/signup");
    setFetchedData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form action="post">
        <div>
          <label htmlFor="">Nome</label>
          <br />
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input
            type="email"
            placeholder="Digite seu nome"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <br />
          <input
            type="password"
            placeholder="Digite seu nome"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Registrar-se</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterApp;
