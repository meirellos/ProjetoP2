import React, { useState } from "react";
import Header from "../../components/Header";
import Products from "../../components/Products";
import LoadingSite from "../../components/Loading";
const Home = () => {
  const [loading, setLoading] = useState(false);

  const renderContent = () => {
    if (loading) return <LoadingSite marginTop={25} />;

    return (
      <>
        <div style={{ borderBottom: "1px solid white" }}></div>
        <div style={{ marginTop: 50 }}></div>
        <Products />
      </>
    );
  };

  return (
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
      <div style={{ width: "70%", marginTop: "-30px" }}>{renderContent()}</div>
    </div>
  );
};

export default Home;
