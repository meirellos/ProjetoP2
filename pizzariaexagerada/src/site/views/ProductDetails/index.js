import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../components/Header";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/produtos/${id}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Obter o carrinho da sessionStorage ou criar um novo array vazio
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // Adicionar o produto atual ao carrinho
    cart.push({
      id: product._id,
      name: product.product_name,
      desc: product.product_desc,
      price: product.product_price,
      img: product.product_img,
      // Adicione outros campos do produto conforme necessário
    });

    // Salvar o carrinho de volta na sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(cart));

    // Exemplo de notificação após adicionar ao carrinho
    toast.success("Produto adicionado ao carrinho!");

    // Redirecionar para a view do carrinho
    navigate("/cart");
  };

  if (!product) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <div style={{ width: "100%", marginTop: "-30px" }}>
        <Header />
      </div>
      <h1 style={{textAlign: 'center', color: '#393939'}}>Detalhes do Produto</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 35,
          border: "1px solid #dedede",
          borderRadius: 15,
          margin: 20,
          fontSize: 20,
          fontWeight: "bold",
          padding: 10
        }}
      >
        <img
          src={product.product_img}
          alt={product.product_desc}
          style={{ width: "150px", height: "auto" }}
        />
        <h1 style={{ fontSize: "24px" }}>{product.product_name}</h1>
        <p style={{ fontSize: "16px" }}>{product.product_desc}</p>
        <p style={{ fontSize: "18px" }}>R$ {product.product_price}</p>

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          style={{
            fontSize: "16px",
            padding: "10px 20px",
            background: 'linear-gradient(to right, #59038f, #b239ff)',
          }}
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
