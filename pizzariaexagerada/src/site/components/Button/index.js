import React from 'react'
import Button from '@mui/material/Button'
import { myTheme } from '../../../theme'
import { ThemeProvider } from '@mui/material/styles';
const InputLogin = ({ variant, click, text, style }) => {
    return (
            <ThemeProvider theme={myTheme}>
                <Button variant={variant} onClick={() => click()} color='secondary' style={style}>{text}</Button>
            </ThemeProvider>
    )
}

export default InputLogin



