import NewsletterForm from '@components/forms/NewsletterForm'

const NewsletterCard = () => {
  return (
    <div className="dark:bg-gray-900 bg-light-gray-600 p-5 w-full mt-10 rounded">
      <h3 className="text-2xl">Subscribe to my newsletter</h3>
      <p className="mb-7 mt-5">
        Get email from me about my ideas, frontend development resources and
        tips as well as exclusive previews of upcoming articles.
      </p>
      <NewsletterForm />
    </div>
  )
}

export default NewsletterCard
