import { bundles } from '../data/plants'
import './Categories.css'
import './FeaturedPlants.css'

export default function Categories() {
  return (
    <section id="bundles" className="categories">
      <div className="container">
        <div className="categories__header">
          <h2 className="section-title">Seed Bundles</h2>
          <p className="section-subtitle">
            Simple, affordable starter packs with indoor and outdoor seeds for every grower.
          </p>
        </div>

        <div className="categories__grid">
          {bundles.map((bundle) => (
            <article key={bundle.id} className="plant-card">
              <div className="plant-card__image-wrap">
                <img src={bundle.image} alt={bundle.name} className="plant-card__image" />
                {bundle.badge && (
                  <span className="plant-card__badge">{bundle.badge}</span>
                )}
                <button className="plant-card__quick-add btn btn-primary">
                  Add to Cart
                </button>
              </div>
              <div className="plant-card__body">
                <div className="plant-card__meta">
                  <span className="plant-card__category">{bundle.category}</span>
                  <span className="plant-card__difficulty">{bundle.difficulty}</span>
                </div>
                <h3 className="plant-card__name">{bundle.name}</h3>
                <p className="plant-card__scientific">{bundle.scientificName}</p>
                <p className="plant-card__price">{bundle.price} JD</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
