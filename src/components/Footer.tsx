import './Footer.css'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <Logo variant="footer" />
            </a>
            <p className="footer__tagline">
              Helping you grow something beautiful, one plant at a time.
            </p>
          </div>

          <div className="footer__links-group">
            <h4>Shop</h4>
            <ul>
              <li><a href="#shop">All Plants</a></li>
              <li><a href="#categories">Indoor</a></li>
              <li><a href="#categories">Outdoor</a></li>
              <li><a href="#categories">Succulents</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">Plant Care</a></li>
              <li><a href="#about">Sustainability</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">FAQ</a></li>
              <li><a href="#contact">Shipping</a></li>
              <li><a href="#contact">Returns</a></li>
              <li><a href="#contact">Track Order</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} YoSeeds. All rights reserved.</p>
          <div className="footer__social">
            <a
              href="https://www.instagram.com/yoseeds_plants/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/yousef-obeidat-76a4593a2?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
