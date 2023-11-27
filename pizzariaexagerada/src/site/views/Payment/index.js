import React from "react";
import Header from "../../components/Header";
import Button from "@mui/material/Button";

const Payment = () => {
  const handleBack = () => {
    sessionStorage.removeItem("tokenSite");
    window.location.href = "/";
  };

  return (
    
    <div>
      <div style={{ width: "100%", marginTop: "-30px" }}>
        <Header />
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Compra efetuada com sucesso!</h1>
        <h5>Quem pagou ta dormindo.</h5>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: 20 }}
          onClick={() => handleBack()}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default Payment;
