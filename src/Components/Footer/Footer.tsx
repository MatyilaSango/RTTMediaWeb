import "./Footer.css"
import logoIcon from "../../icons/RTTMedia-splash.png"

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
                            <p>ReddderDownloader</p><br />
                            <p>TumMedia</p><br />
                            <p>TwiMedia</p>
                        </div>
                        <div className="FooterContentBox">
                            <h3>Help</h3><br />
                            <p>Tutorial</p><br />
                            <p>Contact us</p>
                        </div>
                        <div className="FooterContentBox">
                            <h3>Legal</h3><br />
                            <p>Terms of User</p><br />
                            <p>Privacy Policy</p>
                        </div>
                        <div className="FooterContentBox">
                            <h3>Company</h3><br />
                            <p>About Us</p>
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
