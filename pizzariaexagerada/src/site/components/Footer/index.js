import React from 'react'
import { myTheme } from '../../../theme'
import { ThemeProvider } from '@mui/material/styles';

const Footer = () => {
    return (
        <ThemeProvider theme={myTheme}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: 170, marginBottom: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 22, color: '#a860f0' }}>FORMAS DE PAGAMENTO</span>
                    <span style={{ fontSize: 18, color: '#707070'}}>Cartão de crédito</span>
                    <span style={{ fontSize: 18, color: '#707070'}}>Cartão de débito</span>
                    <span style={{ fontSize: 18, color: '#707070'}}>VA / VR</span>
                    <span style={{ fontSize: 18, color: '#707070'}}>Pix</span>
                    <span style={{ fontSize: 18, color: '#707070'}}>Dinheiro</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 22, color: '#a860f0'}}>FALE CONOSCO</span>
                    <span style={{ fontSize: 18, color: '#707070'}}>(14) 3276-2150</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 22, color: '#a860f0'}}>ENDEREÇO</span>
                    <span style={{ fontSize: 18, color: '#707070'}}> Av. Castelo Branco, 20-86</span>
                </div>
               
            </div>
        </ThemeProvider>
    )
}

export default Footer



