import './Logo.css'

interface LogoProps {
  variant?: 'header' | 'footer'
}

export default function Logo({ variant = 'header' }: LogoProps) {
  return (
    <div className={`logo logo--${variant}`}>
      <img
        src="/yoseeds_logo.png"
        alt=""
        className="logo__mark"
        aria-hidden="true"
      />
      <img
        src="/Yoseeds.png"
        alt="Yoseeds — Plants, Seeds, Grow"
        className="logo__wordmark"
      />
    </div>
  )
}
