import Button from '@components/button/Button'
import Medium from '@components/icons/Medium'
import Twitter from '@components/icons/Twitter'

const NewsletterForm = () => {
  return (
    <div className="flex gap-3 items-center">
      {/* <Input name="email" label="Email" placeholder="cool@cooler.com" /> */}
      <Button className="primary w-auto">
        <Medium />
        <a
          className="!text-gray-1000 no-underline font-semibold"
          href="https://medium.com/subscribe/@alex.streza"
        >
          Subscribe on Medium
        </a>
      </Button>
      <a
        href="https://twitter.com/alex_streza"
        className="dark:text-white text-gray-1000 transition-all hover:rotate-12 hover:scale-105 hover:text-main dark:hover:text-main"
      >
        <Twitter width={40} />
      </a>
    </div>
  )
}

export default NewsletterForm
