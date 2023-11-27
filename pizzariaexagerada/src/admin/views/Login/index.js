import React, { useState, useEffect } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import axios from "axios";
import Logo from "../../../images/maxxis.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import InputLogin from "../../components/InputLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`http://127.0.0.1:5000/api/admin`, {
        username: user,
        senha: password,
      });

      if (res) {
        sessionStorage.setItem("tokenAdmin", JSON.stringify("tokenAdmin"));
        window.location.href = "/admin/produtos";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(71deg, rgba(84, 37, 131, 1) 0%, rgba(168, 96, 240, 1) 100%)",
        backgroundColor: "#181818",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: 50,
          width: 676,
          height: 528,
          borderRadius: 10,
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/home" style={{ color: "#393939", textDecoration: "none" }}>
          <KeyboardBackspaceIcon style={{ width: 50, height: 35 }} />
        </Link>
        <img
          src={Logo}
          style={{ width: "200px", height: "200px", placeSelf: "center" }}
        ></img>
        <h1 style={{ placeSelf: "center", color: "#393939", marginBottom: 20 }}>
          Painel de Administrador
        </h1>
        <InputLogin
          id="outlined-required"
          label="Usuário"
          setText={setUser}
          placeholder="Digite seu usuário."
          onChange={(e) => setUser(e.target.value)}
          style={{ marginTop: 30, width: "400px", placeSelf: "center" }}
        />
        <InputLogin
          type="password"
          placeholder="Digite sua senha."
          label="Senha"
          setText={setPassword}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginTop: 30, width: "400px", placeSelf: "center" }}
        />
        <Button
          variant="contained"
          onClick={() => handleLogin()}
          style={{ marginTop: 30, background: 'linear-gradient(to right, #59038f, #b239ff)', width: '400px', placeSelf: 'center'  }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
