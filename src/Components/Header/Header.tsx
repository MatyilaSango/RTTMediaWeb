import styles from "./Header.module.css"
import logoIcon from "../../icons/RRTMedia.png"
import Image from "next/image"

export default function Header() {
  return (
    <div className={styles.header}>
        <a href="/">
            <Image className={styles.logo} alt="" src={logoIcon} />
        </a>
        <a className={styles.toLink} href="/products">Products</a>
    </div>
  )
}
