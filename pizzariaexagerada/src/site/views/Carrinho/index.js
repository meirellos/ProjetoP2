import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { myTheme } from "../../../theme";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Carrinho = () => {
  const [itensCarrinho, setItensCarrinho] = useState([]);

  useEffect(() => {
    getItens();
  }, []);

  const getItens = () => {
    const storedItens = JSON.parse(sessionStorage.getItem("cart")) || [];
    setItensCarrinho(storedItens);
  };

  const isAuth = () => {
    var isValid = sessionStorage.getItem("tokenSite");
    return !!isValid;
  };

  const handleBuy = () => {
    
    if (isAuth()) {
      sessionStorage.removeItem("cart");
      window.location.href = "/payment";
    } else {
      window.location.href = "/login";
    }
    
  };

  const handleRemoveItem = (value) => {
    const updatedItens = itensCarrinho.filter((item) => item.id !== value.id);
    setItensCarrinho(updatedItens);
    sessionStorage.setItem("cart", JSON.stringify(updatedItens));
  };

  const renderButtonBuy = () => {
    if (itensCarrinho?.length !== 0)
      return (
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: 20 }}
          onClick={() => handleBuy()}
        >
          Finalizar pagamento
        </Button>
      );
  };

  return (
    <ThemeProvider theme={myTheme}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <div style={{ width: "100%", marginTop: "-30px" }}>
          <Header />
        </div>
        <div style={{ width: "70%", marginTop: "-30px" }}>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
          >
            <span style={{ fontSize: 46, color: "#393939" }}>Meu carrinho</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFF",
              borderRadius: 8,
              marginTop: 25,
              paddingBottom: 25,
            }}
          >
            {itensCarrinho?.length !== 0 &&
              itensCarrinho?.map((value, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: 35,
                    borderRadius: 5,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  <img
                    src={value.img}
                    alt={value.product_desc}
                    width={150}
                    height={150}
                    style={{ margin: 10 }}
                  />
                  <span style={{ color: "#393939", fontSize: 30 }}>
                    {value.name} <br />
                    <span style={{ color: "", fontSize: 12, marginRight: 15 }}>
                      {value.desc}
                    </span>
                  </span>

                  <span style={{ color: "#393939", width: 80 }}>
                    <span
                      style={{
                        color: "#8c8c8c",
                        marginRight: 10,
                        fontSize: 15,
                        textDecoration: "line-through",
                        fontWeight: "regular",
                      }}
                    >
                      R$ {value.price * 1.2}
                    </span>
                    <br />
                    R$ {value.price}
                  </span>
                  <Button
                    style={{ backgroundColor: "#ff0000", marginLeft: 10 }}
                    variant="contained"
                    onClick={() => handleRemoveItem(value)}
                  >
                    Remover
                  </Button>
                </div>
              ))}
            {itensCarrinho?.length === 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <RemoveShoppingCartIcon style={{ width: 100, height: 100, color: '#a6a6a6' }} />
                <span
                  style={{
                    textAlign: "center",
                    marginTop: 20,
                    fontSize: 32,
                    fontWeight: "bold",
                    color: '#a6a6a6'
                  }}
                >
                  Seu carrinho está vazio.
                </span>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 10,
            }}
          >
            <Button
              variant="contained"
              color="white"
              style={{ marginTop: 20, marginRight: 50 }}
              onClick={() => (window.location.href = "/")}
            >
              Continuar comprando
            </Button>
            {renderButtonBuy()}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Carrinho;
