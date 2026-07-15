import { useEffect, useRef, useState } from 'react'
import './Hero.css'
import { publicAsset } from '../utils/publicAsset'

const INITIAL_TREES = 483
const CO2_REDUCED_TONS = 23
const COUNT_DURATION = 2233

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(Math.round(value))
}

function useCountUp(target: number, duration = COUNT_DURATION) {
  const [value, setValue] = useState(0)
  const prevTargetRef = useRef(0)

  useEffect(() => {
    const from = prevTargetRef.current
    const delta = target - from
    const animDuration = delta <= 1 ? 800 : duration
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / animDuration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(from + delta * eased)

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        prevTargetRef.current = target
      }
    }

    requestAnimationFrame(tick)
  }, [target, duration])

  return value
}

export default function Hero() {
  const animatedTrees = useCountUp(INITIAL_TREES)
  const animatedCo2 = useCountUp(CO2_REDUCED_TONS)

  return (
    <section
      className="hero"
      style={{ '--hero-bg': `url(${publicAsset('forest.svg')})` } as React.CSSProperties}
    >
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__main">
          <span className="hero__eyebrow">Growing a greener planet, one tree at a time</span>
          <h1 className="hero__title">
            Plant today,
            <em> breathe tomorrow</em>
          </h1>
          <p className="hero__description">
            Every plant you buy helps restore our planet. Join thousands of people
            planting trees and reducing carbon emissions around the world.
          </p>
        </div>

        <div className="hero__aside">
          <div className="hero__impact">
            <div className="hero__counter">
              <span className="hero__counter-value">{formatNumber(animatedTrees)}</span>
              <span className="hero__counter-label">Trees Planted</span>
            </div>
            <div className="hero__counter-divider" aria-hidden="true" />
            <div className="hero__counter hero__counter--co2">
              <span className="hero__counter-value">
                {formatNumber(animatedCo2)}
                <span className="hero__counter-unit"> Tons</span>
              </span>
              <span className="hero__counter-label">CO₂ Reduced</span>
            </div>
          </div>

          <p className="hero__impact-note">
            +1 tree planted every time someone shops with YoSeeds
          </p>

          <div className="hero__actions">
            <a href="#shop" className="btn btn-primary">Shop Plants</a>
          </div>
        </div>
      </div>
    </section>
  )
}
