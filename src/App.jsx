
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Navbar/Nav'
import Footer from './Components/Footer/Footer'
import { createContext, useState } from 'react'

export const ProductContext = createContext(null);

function App() {

  
  const [cartProduct, setCartProduct] = useState([]);
  const [wishlistProduct, setWishlistProduct] = useState([]);

  const addToCart = (product) => {
    console.log(product.product_id);
  };

  const addToWishlist = (product) => {};

  const removeFromCart = (product) => {};

  const wishlistToAddCart = (product) => {};

  const contextInfo = {
    cartProduct,
    wishlistProduct,
    addToCart,
    addToWishlist,
    removeFromCart,
    wishlistToAddCart,
  };


  return (
    <>
      <ProductContext.Provider value={contextInfo}>
      <Nav />
      <Outlet />
      <Footer />
      </ProductContext.Provider>
    </>
  )
}

export default App
