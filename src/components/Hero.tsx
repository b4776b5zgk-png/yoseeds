import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const CO2_PER_TREE_KG = 22
const INITIAL_TREES = 12847
const COUNT_DURATION = 2200

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
  const [treesPlanted, setTreesPlanted] = useState(INITIAL_TREES)
  const animatedTrees = useCountUp(treesPlanted)
  const co2Reduced = animatedTrees * CO2_PER_TREE_KG

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTreesPlanted((prev) => prev + 1)
    }, 14000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Growing a greener planet, one tree at a time</span>
          <h1 className="hero__title">
            Plant today,
            <em> breathe tomorrow</em>
          </h1>
          <p className="hero__description">
            Every plant you buy helps restore our planet. Join thousands of people
            planting trees and reducing carbon emissions around the world.
          </p>

          <div className="hero__impact">
            <div className="hero__counter">
              <span className="hero__counter-value">{formatNumber(animatedTrees)}</span>
              <span className="hero__counter-label">Trees Planted</span>
            </div>
            <div className="hero__counter-divider" aria-hidden="true" />
            <div className="hero__counter">
              <span className="hero__counter-value">{formatNumber(co2Reduced)} kg</span>
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

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1466692476869-aef1dfb1e735?w=700&h=800&fit=crop"
              alt="Lush green indoor plants in a bright living room"
              className="hero__image"
            />
            <div className="hero__floating-card">
              <span className="hero__floating-icon">🌳</span>
              <div>
                <strong>1 Tree Planted</strong>
                <span>With every order you place</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
