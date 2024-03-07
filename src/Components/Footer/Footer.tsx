import "./Footer.css"
import logoIcon from "../../icons/RTTMedia-splash.png"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="page-body">
        <div className="Footer ">
            <div className=" FooterCon page-max-width">
                <div className="FooterComName">RTTMedia</div>
                <div className="FooterContentsWrapper">
                    <div className="FooterContentsStart">
                        <div className="FooterContentBox">
                            <h3>Products</h3><br />
                            <Link to="/products-ReddderDownloader">
                                <p>ReddderDownloader</p><br />
                            </Link>
                            <Link to="/products-TumMedia">
                                <p>TumMedia</p><br />
                            </Link>
                            <Link to="/products-TwiMedia">
                                <p>TwiMedia</p>
                            </Link>
                        </div>
                        <div className="FooterContentBox">
                            <h3>Help</h3><br />
                            <h4>How to use:</h4><br />
                            <Link to="/how-to-use-reddderdownloader">
                                <p>ReddderDownloader</p><br />
                            </Link>
                            <Link to="/how-to-use-twimedia">
                                <p>TwiMedia</p><br />
                            </Link>
                            <Link to="/how-to-use-tummedia">
                                <p>TumMedia</p><br />
                            </Link>
                        </div>
                        <div className="FooterContentBox">
                            <h3>Legal</h3><br />
                            <p>Terms of User</p><br />
                            <p>Privacy Policy</p>
                        </div>
                        <div className="FooterContentBox">
                            <h3>Company</h3><br />
                            <p>About Us</p><br />
                            <p>Contact us</p>
                        </div>
                    </div>
                    <div className="FooterContentsEnd">
                        <img className="Footerlogo" alt="" src={logoIcon} />
                    </div>
                </div>
            </div>
            <div className="FooterCopyRight">
                <span>© {new Date().getUTCFullYear()} RTTMedia. All rights reserved</span>
            </div>
        </div>
    </div>
  )
}
