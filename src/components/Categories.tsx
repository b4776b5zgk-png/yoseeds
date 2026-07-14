import { categories } from '../data/plants'
import './Categories.css'

export default function Categories() {
  return (
    <section id="categories" className="categories">
      <div className="container">
        <div className="categories__header">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Whether you're a beginner or a seasoned plant parent, find the perfect match.
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((category) => (
            <a key={category.name} href="#shop" className="category-card">
              <img src={category.image} alt={category.name} className="category-card__image" />
              <div className="category-card__overlay">
                <h3 className="category-card__name">{category.name}</h3>
                <p className="category-card__description">{category.description}</p>
                <span className="category-card__count">{category.count} plants</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
