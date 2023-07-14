import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Image src='/img/logo.svg' width={300} height={40} alt='Imagen logotipo'/>

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
      </div>
    </header>
  )
}
