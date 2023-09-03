import Layout from "@/components/layout";
import GuitarList from "@/components/guitar-list";
import styles from '../styles/grid.module.css'

export default function Store({ guitars }) {
  return (
    <Layout
      title={"Tienda virtual"}
      description={"Tienda virtual, venta de guitarras, instrumentos, GuitarLA"}
    >
      <main className="container">
        <h2 className="heading">Nuestra Colección</h2>

        <div className={styles.grid}>
          {guitars?.map((guitar) => (
            <GuitarList key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const answer = await fetch(`${process.env.API_URL}/guitars?populate=*`)
//   const {data: guitars} = await answer.json()
// return {
//     props: {
//       guitars
//     }
//   }
// }

export async function getServerSideProps() {
  const answer = await fetch(`${process.env.API_URL}/guitars?populate=*`);
  const { data: guitars } = await answer.json();
  return {
    props: {
      guitars,
    },
  };
}
