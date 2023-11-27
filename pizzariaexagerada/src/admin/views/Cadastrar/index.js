import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import InputAdmin from "../../components/InputAdmin";
import DrawerPrincipal from "../../components/AdminTheme";
const Cadastrar = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post(`http://127.0.0.1:5000/api/produtos`, {
        product_name: name,
        product_desc: description,
        product_price: price,
        product_img: image,
      });
      if (res) {
        window.location.href = "/admin/produtos";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderContent = () => {
    return (
      <div>
        <h1 style={{ fontSize: 40, color: "#393939", textAlign: "center" }}>
          Cadastro de produtos
        </h1>
        <Grid
          container
          direction="row"
          style={{
            marginTop: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #dedede",
            borderRadius: 15,
            height: "300px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Grid item ls={3}>
            <InputAdmin
              label="Nome"
              placeholder="Digite o nome do produto"
              setText={setName}
            />
          </Grid>
          <Grid item ls={3} style={{ marginLeft: 10 }}>
            <InputAdmin
              label="Descrição"
              placeholder="Digite a descrição do produto"
              setText={setDescription}
            />
          </Grid>
          <Grid item ls={3} style={{ marginLeft: 10 }}>
            <InputAdmin
              label="Preço"
              placeholder="Digite o preço do produto"
              setText={setPrice}
            />
          </Grid>
          <Grid item ls={3} style={{ marginLeft: 10 }}>
            <InputAdmin
              label="Imagem"
              placeholder="Insira o link da imagem do produto"
              setText={setImage}
            />
          </Grid>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={() => handleRegister()}
              style={{ marginLeft: 20, background: 'linear-gradient(to right, #59038f, #b239ff)', }}
              size="large"
            >
              Salvar
            </Button>
          </div>
        </Grid>
      </div>
    );
  };

  return <DrawerPrincipal content={renderContent()} />;
};

export default Cadastrar;
