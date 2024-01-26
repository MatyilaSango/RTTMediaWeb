'use client'
import styles from "./SignIn.module.css"
import exitIcon from "../../icons/close.svg"
import loadingIcon from "../../icons/update.svg"
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function SignIn() {
    const [isSignInLoading, setIsSignInLoading] = useState<boolean>(false)
    const router = useRouter()

    const handleFormDetails = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isSignInLoading) {
            const inputValues = Array.from(e.currentTarget)
            //@ts-ignore
            const username: string = inputValues[0].value
            //@ts-ignore
            const password: string = inputValues[1].value
            setIsSignInLoading(prev => prev = true)
        }
    }

    const exitSignIn = () => {
        router.push("/")
    }

    return (
        <div className={styles.SignInWrapperCon}>
            <div className={styles.SignIn_wrapper}>
                <div className={`${styles.SignIn_wrapper__head} ${styles.center}`}>
                    <Image className={styles.SignIn_wrapper__head__exit} src={exitIcon} alt="" onClick={() => exitSignIn()} />
                </div>
                <div className={styles.SignIn_wrapper__body}>
                    <div className={styles.SignIn_wrapper__body_name}>
                        <span>Sign in to RTTMedia</span>
                    </div>
                    <form onSubmit={(e) => handleFormDetails(e)} className={styles.SignIn_wrapper__body_form_wrapper}>
                        <input type="text" required placeholder="Username" name="username" />
                        <input type="password" required placeholder="Password" name="password" />
                        <div className={styles.SignIn_wrapper__body_form_wrapper__incorrect_signin_details}>Incrorrect username or password</div>
                        <button className={styles.SignIn_wrapper__body_form_wrapper_sign_in_btn} type="submit">
                            {isSignInLoading ? <Image className={styles.loading} alt="" src={loadingIcon} /> : "Sign in"}
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}
