import { featuredPlants } from '../data/plants'
import './FeaturedPlants.css'

export default function FeaturedPlants() {
  return (
    <section id="shop" className="featured">
      <div className="container">
        <div className="featured__header">
          <div>
            <h2 className="section-title">Featured Plants</h2>
            <p className="section-subtitle">
              Our most-loved varieties, hand-selected for beauty and easy care.
            </p>
          </div>
          <a href="#shop" className="btn btn-secondary featured__view-all">View All</a>
        </div>

        <div className="featured__grid">
          {featuredPlants.map((plant) => (
            <article key={plant.id} className="plant-card">
              <div className="plant-card__image-wrap">
                <img src={plant.image} alt={plant.name} className="plant-card__image" />
                {plant.badge && (
                  <span className="plant-card__badge">{plant.badge}</span>
                )}
                <button className="plant-card__quick-add btn btn-primary">
                  Add to Cart
                </button>
              </div>
              <div className="plant-card__body">
                <div className="plant-card__meta">
                  <span className="plant-card__category">{plant.category}</span>
                  <span className="plant-card__difficulty">{plant.difficulty}</span>
                </div>
                <h3 className="plant-card__name">{plant.name}</h3>
                <p className="plant-card__scientific">{plant.scientificName}</p>
                <p className="plant-card__price">{plant.price} JD</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
