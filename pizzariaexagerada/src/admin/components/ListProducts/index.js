import React from "react";
import Button from "@mui/material/Button";
import { Grid, Card } from "@mui/material";

export default function ListProducts({ handleChange, products, handleDelete }) {
  return (
    <>
      <h1 style={{fontSize: 40, color: "#393939", textAlign: 'center' }}>Listagem de Produtos</h1>
      <Grid container style={{ display: "flex", justifyContent: "flex-start" }}>
        {products.map((p, i) => (
          <Card
            sx={{ maxWidth: 400, height: 450 }}
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              backgroundColor: "#FFF",
              padding: "0px 50px",
              borderRadius: 10,
              margin: 15,
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            }}
          >
            <h1>{p.product_name}</h1>
            <img
              src={p.product_img}
              alt={p.product_desc}
              width={150}
              height={150}
              style={{ borderRadius: 15 }}
            />
            <h4 style={{ color: "#393939", fontWeight: "regular" }}>
              {p.product_desc}
            </h4>
            <span
              style={{
                fontSize: 15,
                color: "#8c8c8c",
                marginTop: 10,
                textDecoration: "line-through",
              }}
            >
              R$ {p.product_price * 1.2}
            </span>
            <span
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#393939",
              }}
            >
              R$ {p.product_price}
            </span>
            <div style={{ display: "flex", marginBottom: 10 }}>
              <Button
                style={{
                  background: 'linear-gradient(to right, #59038f, #b239ff)',
                  width: 100,
                  height: 40,
                  fontWeight: "bold",
                }}
                variant="contained"
                onClick={() => handleChange(p)}
              >
                Alterar
              </Button>
              <Button
                variant="text"
                onClick={() => handleDelete(p)}
                style={{
                  color: "#fff",
                  backgroundColor: "#ff0000",
                  marginLeft: 10,
                  width: 100,
                  height: 40,
                  fontWeight: "bold",
                }}
              >
                Excluir
              </Button>
            </div>
          </Card>
        ))}
      </Grid>
    </>
  );
}
