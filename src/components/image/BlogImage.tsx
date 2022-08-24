import { ReactNode } from 'react'

interface BlogImageProps {
  src?: string
  alt?: string
  children: ReactNode
}
const BlogImage = (props: BlogImageProps) => {
  if (props.children !== undefined) {
    return (
      <figure>
        <img src={props.src} alt={props.alt} />
        <figcaption>{props.children}</figcaption>
      </figure>
    )
  } else {
    return <img src={props.src} alt={props.alt} />
  }
}

export default BlogImage
