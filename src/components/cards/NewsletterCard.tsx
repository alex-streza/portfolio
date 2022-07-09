import Button from '@components/button/Button'
import Input from '@components/input/Input'

const NewsletterCard = () => {
  return (
    <div className="flex gap-3 items-end">
      <Input name="email" label="Email" placeholder="cool@cooler.com" />
      <Button className="primary w-auto">Subscribe</Button>
    </div>
  )
}

export default NewsletterCard
