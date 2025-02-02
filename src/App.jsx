
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Navbar/Nav'
import Footer from './Components/Footer/Footer'
import { createContext, useState } from 'react'

export const ProductContext = createContext(null);

function App() {

  // cart state
  const [cartProduct, setCartProduct] = useState([]);
  console.log(cartProduct);
  // wishlist state
  const [wishlistProduct, setWishlistProduct] = useState([]);

  //------------------------------------------------------------------- Add to cart function ----------------------------------------------------
  const addToCart = (product) => {
    // console.log(product.product_id);
    setCartProduct([...cartProduct, product]);
    alert("Product added to cart");
    
  };

  // --------------------------------------------------------------- Add to wishlist function ----------------------------------------------------
  const addToWishlist = (product) => {
    // console.log(product.product_id);
    const exist = wishlistProduct.find((x) => x.product_id === product.product_id);
    console.log(exist);

    if (exist) {
      return alert("Product already in wishlist");
    } else {
      setWishlistProduct([...wishlistProduct, product]);
    }
  };

  // --------------------------------------------------------------- Remove from cart function ----------------------------------------------------
  const removeFromCart = (product) => {
    setCartProduct(cartProduct.filter((x) => x.product_id !== product.product_id));
    alert("Product removed from cart");
  };

  // --------------------------------------------------------------- Wishlist to cart function ----------------------------------------------------
  const wishlistToAddCart = (product) => {
    setCartProduct([...cartProduct, product]);
    const updatedWishlist = wishlistProduct.filter((x) => x.product_id !== product.product_id);
    setWishlistProduct(updatedWishlist);

  };

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
