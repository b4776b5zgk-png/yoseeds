import { bundles } from '../data/plants'
import './Categories.css'

export default function Categories() {
  return (
    <section id="bundles" className="categories">
      <div className="container">
        <div className="categories__header">
          <h2 className="section-title">Bundles</h2>
          <p className="section-subtitle">
            Simple, affordable seed bundles to start your indoor and outdoor garden.
          </p>
        </div>

        <div className="categories__grid">
          {bundles.map((bundle) => (
            <a key={bundle.name} href="#bundles" className="category-card">
              <img src={bundle.image} alt={bundle.name} className="category-card__image" />
              <div className="category-card__overlay">
                <h3 className="category-card__name">{bundle.name}</h3>
                <p className="category-card__description">{bundle.description}</p>
                <span className="category-card__count">{bundle.price} JD</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
