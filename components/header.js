import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href={"/"}>
          <Image
            src="/img/logo.svg"
            width={300}
            height={40}
            alt="Imagen logotipo"
          />
        </Link>

        <nav className={styles.navigation}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Inicio
          </Link>

          <Link
            href="/we"
            className={router.pathname === "/we" ? styles.active : ""}
          >
            Nosotros
          </Link>

          <Link
            href="/store"
            className={router.pathname === "/store" ? styles.active : ""}
          >
            Tienda
          </Link>

          <Link
            href="/blog"
            className={router.pathname === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>

          <Link href="/cart" className={router.pathname === "/blog" ? styles.active : ""}>
            <Image
              src="/img/carrito.png"
              width={25}
              height={25}
              alt="Imagen carrito"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
