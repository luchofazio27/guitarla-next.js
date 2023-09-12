import Layout from "@/components/layout"
import styles from "../styles/cart.module.css"

export default function Cart() {
  return (
    <Layout title="Carrito de compras">
      <main className="container">
        <h1 className="heading">Carrito</h1>

        <div className={styles.content}>
            <div className={styles.cart}>
                <h2>Articulos</h2>
            </div>

            <aside className={styles.summary}>
                <h3>Resumen del Pedido</h3>
                <p>Total a pagar: </p>
            </aside>
        </div>
      </main>
    </Layout>
  )
}
