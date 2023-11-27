import React from "react";
import DrawerPrincipal from "../../components/AdminTheme";
import EngineeringIcon from '@mui/icons-material/Engineering';

const HistoricoVendas = () => {
  const renderContent = () => {
    return (
      <>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <span style={{ fontSize: 40, color: "#393939", fontWeight: 'bold' }}>
            Histórico de Vendas
          </span>
        </div>

        <div style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
          <h1 style={{textAlign: 'center'}}>Em manutenção</h1>
          <EngineeringIcon style={{width: '200px', height:'200px', }}/>
          </div>
          
        
      </>
    );
  };

  return <DrawerPrincipal content={renderContent()} />;
};

export default HistoricoVendas;
