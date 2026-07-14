import './Header.css'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="header__logo">
          <Logo variant="header" />
        </a>

        <nav className="header__nav">
          <div className="header__dropdown">
            <button type="button" className="header__nav-link header__dropdown-toggle">
              Plants
              <svg className="header__dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="header__dropdown-menu">
              <a href="#shop" className="header__dropdown-item">Indoor Plants</a>
              <a href="#categories" className="header__dropdown-item">Outdoor Plants</a>
            </div>
          </div>
          <a href="#categories" className="header__nav-link">Plant the Earth</a>
          <a href="#about" className="header__nav-link">Help the Environment</a>
          <a href="#contact" className="header__nav-link">About Us</a>
        </nav>

        <div className="header__actions">
          <a href="#signin" className="header__auth-btn header__auth-btn--signin">Sign In</a>
          <a href="#signup" className="header__auth-btn header__auth-btn--signup">Sign Up</a>
        </div>
      </div>
    </header>
  )
}
