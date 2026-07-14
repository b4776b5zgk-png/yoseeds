import './Logo.css'
import { publicAsset } from '../utils/publicAsset'

interface LogoProps {
  variant?: 'header' | 'footer'
}

export default function Logo({ variant = 'header' }: LogoProps) {
  return (
    <div className={`logo logo--${variant}`}>
      <img
        src={publicAsset('yoseeds_logo.png')}
        alt=""
        className="logo__mark"
        aria-hidden="true"
      />
      <img
        src={publicAsset('Yoseeds.png')}
        alt="Yoseeds — Plants, Seeds, Grow"
        className="logo__wordmark"
      />
    </div>
  )
}
