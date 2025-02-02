
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Navbar/Nav'
import Footer from './Components/Footer/Footer'
import { createContext, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';



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
    // alert("Product added to cart");
    toast.success('Product added to Cart 🛒', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  };

  // --------------------------------------------------------------- Add to wishlist function ----------------------------------------------------
  const addToWishlist = (product) => {
    // console.log(product.product_id);
    const exist = wishlistProduct.find((x) => x.product_id === product.product_id);
    // console.log(exist);

    if (exist) {
      // return alert("Product already in wishlist");
      return toast.error('Product already in Wishlist ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setWishlistProduct([...wishlistProduct, product]);
      toast.success('Product added to Wishlist 💖', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // --------------------------------------------------------------- Remove from cart function ----------------------------------------------------
  const removeFromCart = (product) => {
    setCartProduct(cartProduct.filter((x) => x.product_id !== product.product_id));
    toast.error('Product removed from Cart ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  // --------------------------------------------------------------- Wishlist to cart function ----------------------------------------------------
  const wishlistToAddCart = (product) => {
    setCartProduct([...cartProduct, product]);
    const updatedWishlist = wishlistProduct.filter((x) => x.product_id !== product.product_id);
    setWishlistProduct(updatedWishlist);
    toast.success('Added to Cart from Wishlist! 🛒', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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
      <ToastContainer />
      <ProductContext.Provider value={contextInfo}>
        <Nav />
        <Outlet />
        <Footer />
      </ProductContext.Provider>
    </>
  )
}

export default App
