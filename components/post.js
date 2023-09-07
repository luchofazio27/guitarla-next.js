import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/utils/helpers"
import styles from "../styles/blog.module.css"

export default function Post({post}) {
    
    const { content, image, title, url, publishedAt } = post

  return (
    <article>
      <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen blog ${title}`}/>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{formatDate(publishedAt)}</p>
        <p className={styles.summary}>{content}</p>
        <Link href={`/blog/${url}`} className={styles.link}>
        Leer Post
        </Link>
      </div>
    </article>
  )
}
