import React, { useEffect, useState } from "react";
import { myTheme } from "../../../theme";
import { ThemeProvider } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Logo from "../../../images/maxxis.jpg";

const Header = () => {
  const [itensCarrinho, setItensCarrinho] = useState([]);

  useEffect(() => {
    getItens();
  }, [itensCarrinho]);

  const getItens = async () => {
    setItensCarrinho(JSON.parse(await sessionStorage.getItem("itensCarrinho")));
  };

  const isAuth = () => {
    var isValid = sessionStorage.getItem("tokenSite");
    return !!isValid;
  };

  const goToMyAccount = () => {
    if (isAuth()) {
      window.location.href = "/myaccount";
    } else {
      window.location.href = "/login";
    }
  };

  const goToCart = () => {
      window.location.href = "/cart";    
  };

  const renderNumberCartItens = () => {
    if (isAuth()) {
      return (
        <div
          style={{
            border: "1px solid #a860f0",
            borderRadius: 100,
            marginLeft: -5,
            marginTop: 35,
            backgroundColor: "#a860f0",
            width: 20,
            height: 20,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#FFF" }}>
            {(itensCarrinho && itensCarrinho.length) || 0}
          </span>
        </div>
      );
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
          marginBottom: 30,
          background: "linear-gradient(to right, #59038f, #b239ff)",
          height: 150,
        }}
      >
        <a
          href="/"
          style={{
            fontSize: 44,
            textDecoration: "none",
          }}
        >
          <span style={{ color: "#fff" }}>Pizzaria</span>
          <span style={{ color: "#ff0000" }}> Maxxis</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", marginLeft: 20 }}>
          <Button variant="text" onClick={() => goToCart()}>
            <ShoppingCartIcon color="white" fontSize="large" />
            <span style={{ fontSize: 14, color: "#fff", marginLeft: 5 }}>
              Carrinho
            </span>
            {renderNumberCartItens()}
          </Button>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 50 }}>
          <Button variant="text" onClick={() => goToMyAccount()}>
            <AccountCircleIcon color="white" fontSize="large" />
            <span style={{ fontSize: 14, color: "#fff", marginLeft: 5 }}>
              {isAuth() ? "Minha conta" : "Login"}
            </span>
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Header;
