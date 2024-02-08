import { useEffect, useState } from "react"
import "./CookiesDisclaimer.css"

export default function CookiesDisclaimer() {
    const [isMore, setIsMore] = useState<boolean>(false)
    const [areCookiesAccepted, setAreCookiesAccepted] = useState<boolean>(false)

    useEffect(() => {
        const locaStorageCookieAcceptedValue = localStorage.getItem("cookies_accepted")
        if(locaStorageCookieAcceptedValue === "1") setAreCookiesAccepted(prev => prev = true)
    }, [])

    const handleAcceptCookies = () => {
        localStorage.setItem("cookies_accepted", "1")
        setAreCookiesAccepted(prev => prev = true)
    }

    return (
        !areCookiesAccepted ?
        <div className="CookiesDisclaimer-wrapper">
            <p className="CookiesDisclaimer-wrapper__text">
                This website uses cookies to ensure you get the best experience on our site.
            </p>
            <div className="CookiesDisclaimer-wrapper__more">
                {!isMore ? 
                    <span className="CookiesDisclaimer-wrapper__learn-more" onClick={() => {setIsMore(prev => prev = true)}}>Learn more.</span>
                    :
                    <>
                        <p>We store the following in order to boost your experience:</p>
                        <ul className="CookiesDisclaimer-wrapper__more__ul">
                            <li>When you signed in we store a cookie for a limited time in order recorgnise you.</li>
                        </ul>
                    </>
                }
            </div>
            <div className="CookiesDisclaimer-wrapper__bottom">
                <div className="CookiesDisclaimer-wrapper__btn center" onClick={() => {handleAcceptCookies()}}>
                    <span>Got it</span>
                </div>
            </div>
        </div>
        : <></>
    )
}
