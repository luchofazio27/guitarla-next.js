import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/guitars.module.css"
import Layout from "@/components/layout";

export default function Product({ guitar, addCart }) {

  const [amount, setAmount] = useState(0)
  const { name, description, image, price } = guitar[0].attributes

  const handleSubmit = e => {
    e.preventDefault()

    if(amount < 1) {
      alert('Cantidad no válida')
      return
    }

    //Construir un objeto
    const selectedGuitar = {
      id: guitar[0].id,
      image: image.data.attributes.url,
      name,
      price,
      amount
    }
    
    //Pasando la información
    addCart(selectedGuitar)
  }

  return (
    <Layout title={`Guitarra ${name}`}>
    <div className={styles.guitar}>
      <Image src={image.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${name}`}/>

      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="amount">Cantidad:</label>

          <select onChange={ e => setAmount(+e.target.value)} id="amount">
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Agregar al carrito"/>
        </form>
      </div>
    </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const answer = await fetch(`${process.env.API_URL}/guitars`);
  const { data } = await answer.json();

  const paths = data.map((guitar) => ({
    params: {
      url: guitar.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const answer = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const { data: guitar } = await answer.json();
  return {
    props: {
      guitar,
    },
  };
}

// export async function getServerSideProps({ query: { url } }) {
//   const answer = await fetch(
//     `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
//   );
//   const { data: guitar } = await answer.json();

//   return {
//     props: {
//       guitar,
//     },
//   };
// }
