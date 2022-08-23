import Button from '@components/button/Button'
import BrowserIcon from '@components/icons/Browser'
import { ReactNode } from 'react'

interface DesignProjectCardProps {
  title: string
  description: string
  image: string
  children: ReactNode
  link?: string
}

const DesignProjectCard = ({
  title,
  description,
  image,
  link,
  children,
}: DesignProjectCardProps) => {
  return (
    <div className="design-project-card">
      <img className="mb-6 w-full mt-0 rounded-t-8" src={image} alt={title} />
      <div className="p-5 pt-0">
        <div className="flex mb-5 gap-5">{children}</div>
        <h3 className="design-project-card__title">{title}</h3>
        <p className="!my-0">{description}</p>
        {link && (
          <Button className="mt-5 primary">
            <BrowserIcon />
            <a href={link} className="reset-link !text-gray-1000">
              Check out
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

export default DesignProjectCard
