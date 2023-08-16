import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram }  from'@fontawesome/free-brands-svg-icons'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-spacewhite">
            <div className="footer-container">
            <div className="footerIconDiv">
                  <Link to='mailto:languedulc@gmail.com' className='footerIcon' >
                        <FontAwesomeIcon  className='footerIcon-icon' icon={faEnvelope} ></FontAwesomeIcon>
                  </Link>
                  {/* <Link to='https://www.instagram.com/langue' target='_blank' className='footerIcon' >
                        <FontAwesomeIcon  className='footerIcon-icon' icon={faInstagram} ></FontAwesomeIcon>
                  </Link> */}
                  <Link to='tel:07 12 32 23 23' target='_blank' className='footerIcon' >
                        <FontAwesomeIcon  className='footerIcon-icon' icon={faPhone} ></FontAwesomeIcon>
                  </Link>
              </div>
              <div className="adress-time">
                  <div className="adress">
                      <p>3, rue de l'industrie <br/> 75001 Paris</p>
                  </div>
                  <div className="time">
                      <p>Lundi - Vendredi 08:00 - 17:30 <br/> Samedi 08:00 - 17:00</p>
                  </div>
              </div>
            </div>
            </div>
        </div>
    )
}

export default Footer