import Image from "next/image";
import Layout from "@/components/layout";
import styles from '../styles/we.module.css'

export default function We() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de música"}
    >
      <main className="container">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.content}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
          <div>
            <p>
              Nam molestie mattis sapien nec scelerisque. Donec sed turpis in
              erat ultrices suscipit nec et orci. Praesent finibus purus vel
              lacinia volutpat. Fusce vestibulum est eu dictum condimentum.
              Proin dictum ipsum at mi suscipit sodales. Vivamus et tempus enim.
              Sed nulla enim, cursus eu scelerisque ut, ultricies vel velit. Sed
              hendrerit arcu leo, nec sollicitudin lacus cursus at.
            </p>

            <p>
              Mauris orci justo, pellentesque in justo in, gravida rutrum lacus.
              Pellentesque quam mi, volutpat id pharetra ac, tempor lobortis
              lectus. Vivamus ultricies mollis malesuada. Donec malesuada nisl
              vitae mauris lacinia rutrum. Nullam at condimentum magna, non
              ornare libero. Nulla facilisi. Sed dapibus, diam in rhoncus
              suscipit, purus mauris consectetur dui, ut suscipit urna turpis
              quis purus.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
