import styles from "./Footer.module.css"
import logoIcon from "../../icons/RRTMedia.png"
import Image from "next/image"

export default function Footer() {
  return (
    <div className={styles.Footer}>
        <div className={styles.FooterCon}>
            <div className={styles.FooterComName}>RTTMedia</div>
            <div className={styles.FooterContentsWrapper}>
                <div className={styles.FooterContentsStart}>
                    <div className={styles.FooterContentBox}>
                        <h3>Products</h3><br />
                        <p>ReddderDownloader</p><br />
                        <p>TumMedia</p><br />
                        <p>TwiMedia</p>
                    </div>
                    <div className={styles.FooterContentBox}>
                        <h3>Legal</h3><br />
                        <p>Terms of User</p><br />
                        <p>Privacy Policy</p>
                    </div>
                    <div className={styles.FooterContentBox}>
                        <h3>Company</h3><br />
                        <p>About Us</p>
                    </div>
                </div>
                <div className={styles.FooterContentsEnd}>
                    <Image className={styles.Footerlogo} alt="" src={logoIcon} />
                </div>
            </div>
        </div>
        <div className={styles.FooterCopyRight}>
            <span>© {new Date().getUTCFullYear()} RTTMedia. All rights reserved</span>
        </div>
        
    </div>
  )
}
