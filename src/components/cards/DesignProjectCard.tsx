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
    <div className="rounded-8 md:max-w-[340px] dark:bg-gray-hex dark:bg-opacity-100 bg-light-gray-hex bg-opacity-50 md:shadow-main shadow-none backdrop-blur-sm">
      <div className="bg-no-repeat w-full h-[191px] rounded-t relative overflow-hidden mb-6 mt-0 ">
        <img
          className="hover:scale-110 absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover rounded-t-8"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-5 pt-0">
        <div className="flex mb-5 gap-5">{children}</div>
        <h2 className="!text-4xl !mb-4 !font-serif">{title}</h2>
        <p className="!my-0">{description}</p>
        {link && (
          <Button className="mt-5 md:mt-8">
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
