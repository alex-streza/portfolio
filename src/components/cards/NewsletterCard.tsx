import NewsletterForm from '@components/forms/NewsletterForm'

const NewsletterCard = () => {
  return (
    <div className="newsletter-card">
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
