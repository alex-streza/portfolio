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
    <div className="rounded-8 md:max-w-[340px] dark:bg-gray-hex dark:bg-opacity-100 bg-light-gray-hex bg-opacity-50 backdrop-blur-sm">
      <div className="bg-no-repeat w-full h-[191px] rounded-t relative overflow-hidden mb-6 mt-0 ">
        <img
          className="hover:scale-110 absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover rounded-t-8"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-5 pt-0">
        <div className="flex mb-4 gap-5">{children}</div>
        <h2 className="!text-4xl !mb-2.5 !font-serif">{title}</h2>
        <p className="!my-0 leading-8 text-gray-25">{description}</p>
        {link && (
          <Button className="mt-6 md:mt-8 !p-0 !pl-5 !h-fit !gap-1">
            <a
              href={link}
              className="reset-link !text-gray-1000"
              target="_blank"
              rel="noreferrer"
            >
              Check out
            </a>
            <span className="block m-2">
              <BrowserIcon />
            </span>
          </Button>
        )}
      </div>
    </div>
  )
}

export default DesignProjectCard
