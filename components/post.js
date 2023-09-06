import Image from "next/image"
import Link from "next/link"

export default function Post({post}) {
    
    const { content, image, title, url, publishedAt } = post

  return (
    <article>
      <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen blog ${title}`}/>

      <div>
        <h3>{title}</h3>
        <p>{publishedAt}</p>
        <p>{content}</p>
        <Link href={`/blog/${url}`}>
        Leer Post
        </Link>
      </div>
    </article>
  )
}
