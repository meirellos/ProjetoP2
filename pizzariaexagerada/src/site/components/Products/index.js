import React, { useState, useEffect } from "react";
import { myTheme } from "../../../theme";
import { ThemeProvider } from "@mui/material/styles";
import ListProducts from "../ListProducts";
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Função para buscar os produtos da API
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/produtos");
        const data = await response.json();
        console.log("Produtos brutos do servidor:", data);
        
        //Mapear os produtos e convertes o __id para string
        const products = data.map((product) => ({
          ...product,
          _id: product._id.$oid, //Acessar a propriedade $oid do objeto _id
        }));
    
        console.log("Produtos após conversão de ID:", products);
        setProducts(products);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    // Chamada da função
    fetchProducts();
  }, []); // O segundo argumento vazio significa que a chamada será feita apenas uma vez, ao montar o componente

  const navigate = useNavigate();

  const handleDetail = (value) => {
    console.log("ID do produto selecionado:", value.id);
    navigate(`/product/${value.id}`);
  };

  const renderProducts = () => {
    if (products && products.length > 0) {
      return <ListProducts handleDetail={handleDetail} products={products} />;
    }
    return <p>Nenhum produto encontrado.</p>;
  };

  return (
    <ThemeProvider theme={myTheme}>
      <span style={{ fontSize: 30, color: "#393939", fontWeight: "bold" }}>
        Produtos
      </span>
      <div
        style={{
          borderBottom: "1px solid #a860f0",
          display: "flex",
          justifyContent: "center", marginBottom: 50
        }}
      >
        {renderProducts()}
      </div>

      <span style={{ fontSize: 30, color: "#393939", fontWeight: "bold" }}>
        Combos
      </span>
      <div
        style={{
          borderBottom: "1px solid #a860f0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {renderProducts()}
      </div>
    </ThemeProvider>
  );
};

export default Products; 