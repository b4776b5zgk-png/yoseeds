import { useEffect, useState } from 'react'
import { wasfiTalImages } from '../data/wasfiTal'
import { publicAsset } from '../utils/publicAsset'
import './HelpEnvironment.css'

const SLIDE_INTERVAL = 4500
const FADE_DURATION = 1500

export default function HelpEnvironment() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % wasfiTalImages.length)
    }, SLIDE_INTERVAL)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="about" className="help-env">
      <div className="container help-env__inner">
        <div className="help-env__slideshow">
          <div className="help-env__slides">
            {wasfiTalImages.map((image, index) => (
              <img
                key={image.src}
                src={publicAsset(image.src)}
                alt={image.alt}
                className={`help-env__slide${index === activeIndex ? ' help-env__slide--active' : ''}`}
                style={{ transitionDuration: `${FADE_DURATION}ms` }}
              />
            ))}
          </div>
          <div className="help-env__slide-meta">
            <span className={`help-env__era help-env__era--${wasfiTalImages[activeIndex].era.toLowerCase()}`}>
              {wasfiTalImages[activeIndex].era}
            </span>
            <div className="help-env__dots" role="tablist" aria-label="Forest timeline">
              {wasfiTalImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Show image ${index + 1}`}
                  className={`help-env__dot${index === activeIndex ? ' help-env__dot--active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="help-env__content">
          <span className="help-env__eyebrow">Forests that are Disappearing ! </span>
          <h2 className="section-title">Wasfi Al-Tal Forest is disappearing</h2>
          <p className="help-env__lead">
            In the hills of Balqa, Wasfi Al-Tal Forest was once one of Jordan&apos;s largest and
            most beloved green sanctuaries — a living refuge of oak, pine, and wildflowers where
            families hiked, birds nested, and the air felt alive.
          </p>
          <p>
            Today, that same forest is under pressure. Years of drought, uncontrolled picnicking,
            litter, fire risk, and the wider strain on Jordan&apos;s woodlands — which cover barely
            1% of the country — have left scars across the landscape. Soil erodes, tree cover thins,
            and the ecosystem that once cooled the land and held water in the ground is fading.
          </p>
          <p>
            This is not just the story of one forest. Across Jordan, deforestation, overgrazing, and
            climate change are pushing natural habitats toward collapse. Initiatives like the
            ecological park opened in Wasfi Al-Tal show that recovery is possible — but only if we
            act together.
          </p>
          <p className="help-env__cta-text">
            Every plant you grow helps put life back into the earth. Join us in reversing the damage
            — one tree, one garden, one forest at a time.
          </p>
          <a href="#shop" className="btn btn-primary">Plant for the Planet</a>
        </div>
      </div>
    </section>
  )
}
