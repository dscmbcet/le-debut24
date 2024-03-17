import './Footer.css'
import FooterImg from '../assets/footer_image.png'
import FooterLogo from '../assets/footer_logo.png'

export default function Footer() {
  return (
    <div className='footer'>
      <img className='footer_bg' src={FooterImg} alt="footer_img" />
      <img className='footer_logo' src={FooterLogo} alt="footer_logo_img" />
      <div className="footer_links">
        <div className="link_section">
          <p>In Page</p>
          <a href="#about">About</a>
          <a href="#about">Speakers</a>
          <a href="#about">Previous Reviews</a>
          <a href="#about">FAQs</a>
        </div>
        <div className="link_section">
          <p>Social Handles</p>
          <a href="#about">Insta</a>
          <a href="#about">Twitter</a>
          <a href="#about">LinkedIn</a>
        </div>
        <div className="link_section">
          <p>Additional</p>
          <a href="">Photos(coming soon)</a>
        </div>
      </div>
    </div>
  )
}
