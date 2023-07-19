import Link from "next/link"
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
      <nav className={styles.navigation}>
            <Link href='/'>
                Inicio
            </Link>

            <Link href='/we'>
                Nosotros
            </Link>

            <Link href='/blog'>
                Blog
            </Link>

            <Link href='/store'>
                Tienda
            </Link>
        </nav>

        <p className={styles.copyright}>Todos los derechos reservados { new Date().getFullYear() }</p>
      </div>
    </footer>
  )
}
