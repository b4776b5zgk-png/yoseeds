import './Newsletter.css'

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__card">
          <div className="newsletter__content">
            <h2 className="newsletter__title">Join the YoSeeds community</h2>
            <p className="newsletter__description">
              "Sign in to unlock refined growing guides, early arrivals, and exclusive privileges crafted for our community."  
            </p>
          </div>
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter__input"
              required
            />
            <button type="submit" className="btn btn-accent newsletter__btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
