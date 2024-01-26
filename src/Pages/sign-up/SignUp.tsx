import "./SignUp.css"
import exitIcon from "../../icons/close.svg"
import loadingIcon from "../../icons/update.svg"
import { useEffect, useState } from "react"
import { ISignUp } from "../../types/types"
import { Link } from "react-router-dom"

export default function SignUp({setIsSignInSinUp}: ISignUp) {
    const [isSignUpLoading, setIsSignUpLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsSignInSinUp(prev => prev = true)
    }, [setIsSignInSinUp])

    const handleFormDetails = (e: React.FormEvent<HTMLFormElement>) => {
        document.getElementsByClassName("SignUp_wrapper__body_form_wrapper__incorrect_SignUp_details")[0].classList.remove("show")
        e.preventDefault()
        if (!isSignUpLoading) {
            const inputValues = Array.from(e.currentTarget)
            //@ts-ignore
            const firstName: string = inputValues[0].value
            //@ts-ignore
            const lastName: string = inputValues[1].value
            //@ts-ignore
            const email: string = inputValues[2].value
            //@ts-ignore
            const username: string = inputValues[3].value
            //@ts-ignore
            const password: string = inputValues[4].value
            //@ts-ignore
            const reEnteredPassword: string = inputValues[5].value
            if(password !== reEnteredPassword) return document.getElementsByClassName("SignUp_wrapper__body_form_wrapper__incorrect_SignUp_details")[0].classList.add("show")
            console.log({firstName, lastName, email, username, password})
            setIsSignUpLoading(prev => prev = true)
        }
    }

    const exitSignUp = () => {

    }

    return (
        <div className="SignUpWrapperCon">
            <div className="SignUp_wrapper">
                <div className="SignUp_wrapper__head center">
                <Link to="/">
                    <img className="SignUp_wrapper__head__exit" src={exitIcon} alt="" onClick={() => exitSignUp()} />
                </Link>
                </div>
                <div className="SignUp_wrapper__body">
                    <div className="SignUp_wrapper__body_name">
                        <span>Sign up to RTTMedia</span>
                    </div>
                    <form onSubmit={(e) => handleFormDetails(e)} className="SignUp_wrapper__body_form_wrapper">
                        <input type="text" required placeholder="First Name" name="firstName" />
                        <input type="text" required placeholder="Last Name" name="lastName" />
                        <input type="email" required placeholder="Email@mail.com" name="email" />
                        <input type="text" required placeholder="Username" name="username" />
                        <input type="password" required placeholder="Password" name="password" />
                        <input type="password" required placeholder="Re-enter password" name="reEnterPassword" />
                        <div className="SignUp_wrapper__body_form_wrapper__incorrect_SignUp_details">Passwords do not match...</div>
                        <button className="SignUp_wrapper__body_form_wrapper_sign_in_btn" type="submit">
                            {isSignUpLoading ? <img className="loading" alt="" src={loadingIcon} /> : "Sign in"}
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}
