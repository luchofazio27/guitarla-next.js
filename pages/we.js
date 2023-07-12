import Link from "next/link";
import Layout from "@/components/layout";

export default function We() {
  return (
    <Layout
    title={'Nosotros'}
    description={'Sobre nosotros, guitarLA, tienda de música'}
    >
      <Link href="/">Ir al inicio</Link>
    </Layout>
    
  )
}
