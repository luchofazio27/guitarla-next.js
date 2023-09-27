import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/cart.module.css";

export default function Cart({ cart, updateAmount, deleteProduct }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalCalculation = cart.reduce(
      (total, product) => total + product.amount * product.price,
      0
    );
    setTotal(totalCalculation);
  }, [cart]);

  return (
    <Layout title="Carrito de compras">
      <main className="container">
        <h1 className="heading">Carrito</h1>

        <div className={styles.content}>
          <div className={styles.cart}>
            <h2>Articulos</h2>

            {cart.length === 0
              ? "Carrito Vacio"
              : cart.map((product) => (
                  <div key={product.id} className={styles.product}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                    <div>
                      <p className={styles.name}>{product.name}</p>

                      <div className={styles.amount}>
                        <p>Cantidad:</p>

                        <select
                          className={styles.select}
                          onChange={(e) =>
                            updateAmount({
                              id: product.id,
                              amount: e.target.value,
                            })
                          }
                          value={product.amount}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <p className={styles.price}>
                        $<span>{product.price}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $<span>{product.amount * product.price}</span>
                      </p>
                    </div>

                    <button className={styles.delete} type="button" onClick={() => deleteProduct(product.id)}>
                      X
                    </button>
                  </div>
                ))}
          </div>

          <aside className={styles.summary}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
