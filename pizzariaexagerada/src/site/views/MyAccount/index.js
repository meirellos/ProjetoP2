import React from "react";
import Header from "../../components/Header";
import Button from "@mui/material/Button";
import { myTheme } from "../../../theme";
import { ThemeProvider } from "@mui/material/styles";
import EngineeringIcon from '@mui/icons-material/Engineering';

const MyAccount = () => {
  const handleLogout = () => {
    sessionStorage.removeItem("tokenSite");
    window.location.href = "/";
  };

  const purchaseHistoryItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFF",
    width: "100%",
    height: 60,
    marginTop: 25,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    border: "1px solid #dedede",
    padding: 2,
    color: "#393939",
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
          <div style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
          <h1 style={{textAlign: 'center'}}>Em manutenção</h1>
          <EngineeringIcon style={{width: '200px', height:'200px', }}/>
          </div>
          </div>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: 20, display: "flex" }}
            onClick={() => handleLogout()}
          >
            Sair
          </Button>
        </div>
      
    </ThemeProvider>
  );
};

export default MyAccount;
