import './WhyUs.css'

const features = [
  {
    icon: '🌿',
    title: 'Expertly Grown',
    description: 'Every plant is nurtured by certified growers with decades of experience.',
  },
  {
    icon: '📦',
    title: 'Safe Delivery',
    description: 'Custom packaging keeps your plants secure and stress-free in transit.',
  },
  {
    icon: '📖',
    title: 'Care Guides',
    description: 'Detailed care instructions tailored to each plant and your environment.',
  },
  {
    icon: '💚',
    title: '30-Day Guarantee',
    description: 'Not thriving? We\'ll replace it or refund you — no questions asked.',
  },
]

export default function WhyUs() {
  return (
    <section id="about" className="why-us">
      <div className="container why-us__inner">
        <div className="why-us__content">
          <h2 className="section-title">Why plant parents choose YoSeeds</h2>
          <p className="section-subtitle">
            We're more than a plant shop — we're your partner in creating a greener, happier home.
          </p>
        </div>

        <div className="why-us__grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-card__icon">{feature.icon}</span>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
