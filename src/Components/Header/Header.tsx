'use client'
import styles from "./Header.module.css"
import logoIcon from "../../icons/RRTMedia.png"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isSignInSinUp, setIsSignInSinUp] = useState<boolean>(false)

  useEffect(() => {
    if(window.document.URL.includes("sign-")) return setIsSignInSinUp(prev => prev = false)
    return setIsSignInSinUp(prev => prev = true)
  }, [window.document.URL])

  return (
    <div className={styles.header}>
      <div className={styles.logoNavWrapper}>
        <Link href="/">
          <Image className={styles.logo} alt="" src={logoIcon} />
        </Link>
        <Link className={styles.toLink} href="/products">Products</Link>
      </div>

    {isSignInSinUp ?
      <div className={styles.signInSignUpWrapper}>
        <div className={styles.signInWrapper}>
          <Link href="/sign-in">
            <span>Sign In</span>
          </Link>
        </div>
        <div className={styles.signUpWrapper}>
          <Link href="/sign-up">
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
      : ""}
    </div>
  )
}
