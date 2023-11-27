import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card } from "@mui/material";
import Button from "@mui/material/Button";

export default function ListProducts({ products }) {
  console.log("Produtos recebidos:", products);
  return (
    <Grid
      container
      style={{ display: "flex", justifyContent: "flex-start", height: "100%" }}
    >
      {products.map((product) => (
        <Card
          key={product._id}
          sx={{ width: 100, height: 220 }}
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            padding: "15px 50px",
            borderRadius: 15,
            margin: 15,
            height: "100%",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div>
            <img
              src={product.product_img}
              alt={product.product_desc}
              width={180}
              height={180}
              style={{ borderRadius: "15px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{ fontSize: 25, fontWeight: "bold", color: "#393939" }}
            >
              {product.product_name}
            </span>
            <span style={{ fontSize: 12, color: "#393939", marginTop: 10 }}>
              {product.product_desc}
            </span>
            <span
              style={{
                fontSize: 15,
                color: "#8c8c8c",
                marginTop: 10,
                textDecoration: "line-through",
              }}
            >
              R$ {product.product_price * 1.2}
            </span>
            <span
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#393939",
              }}
            >
              R$ {product.product_price}
            </span>
            <Button
              variant="contained"              
              style={{ marginTop: 10, height: 45, background: 'linear-gradient(to right, #59038f, #b239ff)', }}
              component={Link}
              to={`/product/${product._id.toString()}`}
            >
              Detalhes
            </Button>
          </div>
        </Card>
      ))}
    </Grid>
  );
}
