import Link from "next/link";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout 
      title={'Inicio'}
      description={'Blog de música. venta de guitarras y mas'}
      >
        <h1>Hola mundo en next</h1>

        <Link href="/we">Nosotros</Link>
      </Layout>
    </>
  );
}
