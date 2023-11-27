import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginAdmin from "../admin/views/Login";
import AlterarAdmin from "../admin/views/Alterar";
import CadastrarAdmin from "../admin/views/Cadastrar";
import ListarAdmin from "../admin/views/ListarProdutos";
import LoginSite from '../site/views/Login'
import HomeSite from '../site/views/Home'
import MyAccount from "../site/views/MyAccount";
import ProductDetail from "../site/views/ProductDetails";
import HistoricoVendas from "../admin/views/HistoricoVendas";
import Carrinho from "../site/views/Carrinho";
import Payment from "../site/views/Payment";
import { useNavigate } from 'react-router-dom';


const isAuth = () => {
    var isValid = sessionStorage.getItem("tokenAdmin");
    return !!isValid
}

const isAuthSite = () => {
    var isValid = sessionStorage.getItem("tokenSite");
    return !!isValid
}

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <LoginAdmin />
    },
    {
        path: "/admin/alterar/:id",
        element: isAuth() ? <AlterarAdmin /> : 'Não foi possível acessar esta rota, contate um administrador.'
    },
    {
        path: "/admin/cadastrar",
        element: isAuth() ? <CadastrarAdmin /> : 'Não foi possível acessar esta rota, contate um administrador.'
    },
    {
        path: "/admin/produtos",
        element: isAuth() ? <ListarAdmin /> : 'Não foi possível acessar esta rota, contate um administrador.'
    },
    {
        path: "/admin/historico-vendas",
        element: isAuth() ? <HistoricoVendas /> : 'Não foi possível acessar esta rota, contate um administrador.'
    },
    {
        path: "/login",
        element: <LoginSite /> 
    },
    {
        path: "/",
        element: <HomeSite /> 
    },
    {
        path: "/home",
        element: <HomeSite /> 
    },
    {
        path: "/myaccount",
        element: isAuthSite() ? <MyAccount /> : <LoginSite />
    },
    {
        path: "/product/:id",
        element: <ProductDetail />
    },
    {
        path: "/cart",
        element:  <Carrinho /> 
    },
    {
        path: "/payment",
        element: <Payment/>
    }
]);


const Rota = () => {
    return <RouterProvider router={router} />
}

export default Rota