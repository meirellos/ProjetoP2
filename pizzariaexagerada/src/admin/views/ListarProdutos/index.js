import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListProducts from '../../components/ListProducts';
import LoadingAdmin from '../../components/Loading'
import DrawerPrincipal from '../../components/AdminTheme';
const Listar = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])


  useEffect(() => {
    getProducts()
}, [])

  const getProducts = async ()=>{
    const res = await axios.get(`http://127.0.0.1:5000/api/produtos`)
    setProducts(res.data);
  }

  const handleDelete = async (value) => {
    try {
      const res = await axios.delete(`http://127.0.0.1:5000/api/produtos/${value._id.$oid}`)
      if (res) {
        window.location.href = '/admin/produtos'
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (value) => {
    window.location.href = `/admin/alterar/${value._id.$oid}`
  }

  const renderContent = () => {
    if (loading) return <LoadingAdmin />
    return renderProducts()
  }

  const renderProducts = () => {
    if (products && products.length > 0) {
      return <ListProducts handleChange={handleChange} products={products} handleDelete={handleDelete} />
    }
  }

  return <DrawerPrincipal  content={renderContent()} />
}

export default Listar


