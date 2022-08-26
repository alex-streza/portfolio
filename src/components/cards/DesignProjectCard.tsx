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
    <div className="rounded-8 md:max-w-[480px] dark:bg-gray-hex dark:bg-opacity-100 bg-light-gray-hex bg-opacity-50 md:shadow-main shadow-none backdrop-blur-sm">
      <img className="mb-6 w-full mt-0 rounded-t-8" src={image} alt={title} />
      <div className="p-5 pt-0">
        <div className="flex mb-5 gap-5">{children}</div>
        <h3 className="!text-4xl !mb-4 !font-serif">{title}</h3>
        <p className="!my-0">{description}</p>
        {link && (
          <Button className="mt-5">
            <BrowserIcon />
            <a
              href={link}
              className="reset-link !text-gray-1000"
              target="_blank"
              rel="noreferrer"
            >
              Check out
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

export default DesignProjectCard
