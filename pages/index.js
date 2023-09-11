import Layout from "@/components/layout";
import GuitarList from "@/components/guitar-list";
import Post from "@/components/post";
import Course from "@/components/course";
import styles from "../styles/grid.module.css"

export default function Home({guitars, posts, course}) {
  return (
    <>
      <Layout 
      title={'Inicio'}
      description={'Blog de música. venta de guitarras y mas'}
      >
        <main className="container">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
          {guitars?.map((guitar) => (
            <GuitarList key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
        </main>

        <Course course={course}/>

        <section className="container">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
          {posts?.map(post => (
            <Post key={post.id} post={post.attributes}/>
          ))}
        </div>
        </section>
        
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitars = `${process.env.API_URL}/guitars?populate=*`
  const urlPosts = `${process.env.API_URL}/posts?populate=*`
  const urlCourse = `${process.env.API_URL}/course?populate=*`

  const [ ansGuitars, ansPosts, ansCourse] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlCourse)
  ])

  const [{data: guitars}, {data: posts}, {data: course}] = await Promise.all([
    ansGuitars.json(),
    ansPosts.json(),
    ansCourse.json()
  ])

  return {
    props: {
      guitars,
      posts,
      course
    }
  }
}
