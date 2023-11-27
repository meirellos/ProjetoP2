import React from 'react'
import TextField from '@mui/material/TextField';
import { myTheme } from '../../../theme'
import { ThemeProvider } from '@mui/material/styles';

const InputAdmin = ({ label, placeholder, setText, value }) => {
    return (
        <div>
            <ThemeProvider theme={myTheme}>
            <TextField
                value={value}
                label={label}
                placeholder={placeholder}
                onChange={(e) => setText(e.target.value)}
                style={{ backgroundColor: '#FFF', color: '#ff0000' }}
            />
            </ThemeProvider>
        </div>
    )
}

export default InputAdmin


