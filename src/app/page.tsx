import Image from "next/image"
import windowsIcon from "../icons/windows.svg"
import previewIcon from "../icons/preview.svg"
import styles from './page.module.css'
import SubscriptionPlans from "@/Components/SubcriptionPlans/SubscriptionPlans"

export default function Home() {
  return (
    <main className={styles.body}>
      <div className={styles.info}>
        <h1>RTTMedia</h1>
        <p>Provides services for Reddit, Tumblr, and Twitter media downloader.</p>
        <div className={styles.btns}>
          <div className={styles.btn}>
            <Image className={styles.btnIcon} alt="" src={windowsIcon} />
            <span>Free download</span>
          </div>
          <a href="#subscription-plans"><div className={styles.btnSub}>
            <span>Subscription Plans</span>
          </div></a>
        </div>
      </div>
      <div className={styles.preview}>
        <Image alt="" src={previewIcon} />
      </div>
      <div id="subscription-plans" className={styles.SubcriptionPlansWrapper}>
          <SubscriptionPlans />
        </div>
    </main>
  )
}
