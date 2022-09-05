import Button from '@components/button/Button'
import { Medium, Twitter } from '@icons-pack/react-simple-icons'

const NewsletterForm = () => {
  return (
    <div className="flex gap-3 items-center">
      {/* <Input name="email" label="Email" placeholder="cool@cooler.com" /> */}
      <Button className="w-auto">
        <Medium />
        <a
          className="reset-link !text-gray-1000"
          href="https://medium.com/subscribe/@alex.streza"
        >
          Subscribe on Medium
        </a>
      </Button>
      <a
        href="https://twitter.com/alex_streza"
        className="dark:!text-white !text-gray-1000 transition-all hover:rotate-12 hover:scale-105 hover:text-main dark:hover:text-main"
        aria-label="Twitter"
      >
        <Twitter width={40} />
      </a>
    </div>
  )
}

export default NewsletterForm
