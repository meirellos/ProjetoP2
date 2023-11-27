import React, { useState, useEffect } from 'react'
import input from '../../components/Input'
import InputLogin from '../../components/InputLogin'
import ButtonLogin from '../../components/Button'
import '../../../app.css';
import Logo from '../../../images/maxxis.jpg';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  /*
  useEffect(() => {
    console.log(user)
    console.log(password)
  }, [user, password]) */


  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user,
          senha: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        //Logou
        sessionStorage.setItem('tokenSite', JSON.stringify(data.token));
        window.location.href = '/';
      } else {
        //Erro
        console.error('Erro no login:', data.message);
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(71deg, rgba(84, 37, 131, 1) 0%, rgba(168, 96, 240, 1) 100%)', backgroundColor: '#181818', minHeight: '100vh', flexDirection: 'column' }}>
      <div style={{ backgroundColor: '#fff', padding: 50, width: 676, height: 528, borderRadius: 10, flexDirection: 'column', display: 'flex', justifyContent: 'center' }}>
      
      <Link to="/home" style={{ color: '#393939', textDecoration: 'none'}}>
        <KeyboardBackspaceIcon style={{ width: 50, height: 35 }} />
      </Link>
      <img src={Logo} style={{ width: '200px', height: '200px',placeSelf: 'center'  }}></img>
      <a href='/' style={{ fontSize: 44, fontWeight: 'bold',textAlign: 'center', textDecoration: 'none', marginBottom: 20 }}><span style={{ color: '#393939' }}>Pizzaria</span> <span style={{ color: '#a860f0 ' }}>Maxxis</span></a>
        <InputLogin
          label='Usuário'
          placeholder='Digite seu usuário.'
          setText={setUser}
          style={{ marginTop: 20, width: '400px', placeSelf: 'center' }}
        />

        <InputLogin
          type='password'
          label='Senha'
          placeholder='Digite sua senha.'
          setText={setPassword}
          style={{  marginTop: 20, width: '400px', placeSelf: 'center'  }}
        />
        <ButtonLogin variant="contained" click={handleLogin} text='Login' style={{ marginTop: 30, width: '400px', placeSelf: 'center'  }} />
      </div>
    </div>
  )
}

export default Login


