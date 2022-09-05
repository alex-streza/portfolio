import { ReactNode } from 'react'

interface BlogImageProps {
  src?: string
  alt?: string
  children: ReactNode
  loading?: 'lazy' | 'eager'
}
const BlogImage = (props: BlogImageProps) => {
  if (props.children !== undefined) {
    return (
      <figure>
        <img
          src={props.src}
          alt={props.alt ?? 'a glorious image'}
          loading={props.loading ?? 'lazy'}
          width={652}
          height={242}
        />
        <figcaption>{props.children}</figcaption>
      </figure>
    )
  } else {
    return (
      <img
        src={props.src}
        alt={props.alt ?? 'a glorious image'}
        loading={props.loading ?? 'lazy'}
        width={652}
        height={242}
      />
    )
  }
}

export default BlogImage
