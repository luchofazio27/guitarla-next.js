import { useState, useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : []
  const [cart, setCart] = useState(cartLS)
  const [pagOk, setPagOk] = useState(false)

  useEffect(() => {
    setPagOk(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addCart = (guitar) => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      // Iterar para actualizar la cantidad
      const cartUpdated = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          guitarState.amount = guitar.amount;
        }
        return guitarState;
      });
      // Se asigna al array
      setCart([...cartUpdated]);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCart([...cart, guitar]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const deleteProduct = (id) => {
    const cartUpdated = cart.filter((product) => product.id != id);
    setCart(cartUpdated);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateAmount = (guitar) => {
    const cartUpdated = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.amount = parseInt(guitar.amount);
      }
      return guitarState;
    });
    setCart(cartUpdated);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  return pagOk ?
    <Component
      {...pageProps}
      cart={cart}
      addCart={addCart}
      deleteProduct={deleteProduct}
      updateAmount={updateAmount}
    /> : null
  ;
}
