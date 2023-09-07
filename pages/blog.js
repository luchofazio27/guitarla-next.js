import Layout from "@/components/layout";
import Post from "@/components/post";
import styles from "../styles/grid.module.css"

export default function Blog({posts}) {
  return (
    <Layout
    title={'Blog'}
    description={'Blog de música, venta de guitarras, consejos, GuitarLA'}
    >
      <main className="container">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts?.map(post => (
            <Post key={post.id} post={post.attributes}/>
          ))}
        </div>
      </main>
    </Layout>
    
  )
}

 export async function getStaticProps() {
   const answer = await fetch(`${process.env.API_URL}/posts?populate=*`)
   const {data: posts} = await answer.json()
 return {
     props: {
       posts
     }
   }
 }