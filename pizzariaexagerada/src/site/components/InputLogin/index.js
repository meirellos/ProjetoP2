import React from 'react'
import TextField from '@mui/material/TextField';

import { myTheme } from '../../../theme'
import { ThemeProvider } from '@mui/material/styles';
const InputLogin = ({ label, placeholder, setText, type, id, color, variant, style }) => {
    return (
        <ThemeProvider theme={myTheme}>
            <TextField
                type={type}
                id={id}
                label={label}
                placeholder={placeholder}
                onChange={(e) => setText(e.target.value)}
                color={color}
                variant={variant}
                style={style}
            />
        </ThemeProvider>
    )
}

export default InputLogin


