import "./SignIn.css"
import exitIcon from "../../icons/close.svg"
import loadingIcon from "../../icons/update.svg"
import { useEffect, useState } from "react"
import { ISignIn } from "../../types/types"
import { Link } from "react-router-dom"
import { ACCOUNT } from "../../enums/enum"

export default function SignIn({dispatch}: ISignIn) {
    const [isSignInLoading, setIsSignInLoading] = useState<boolean>(false)

    useEffect(() => {
        dispatch({type: ACCOUNT.SignIn_Or_SignUp, payload: true})
    }, [dispatch])

    const handleFormDetails = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isSignInLoading) {
            const inputValues = Array.from(e.currentTarget)
            //@ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const username: string = inputValues[0].value
            //@ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const password: string = inputValues[1].value
            setIsSignInLoading(prev => prev = true)
        }
    }

    const exitSignIn = () => {
    }

    return (
        <div className="page-body">
            <div className="SignInWrapperCon page-max-width">
                <div className="SignIn_wrapper">
                    <div className="SignIn_wrapper__head center">
                        <Link to="/">
                            <img className="SignIn_wrapper__head__exit" src={exitIcon} alt="" onClick={() => exitSignIn()} />
                        </Link>
                    </div>
                    <div className="SignIn_wrapper__body">
                        <div className="SignIn_wrapper__body_name">
                            <span>Sign in to RTTMedia</span>
                        </div>
                        <form onSubmit={(e) => handleFormDetails(e)} className="SignIn_wrapper__body_form_wrapper">
                            <input type="text" required placeholder="Username" name="username" />
                            <input type="password" required placeholder="Password" name="password" />
                            <div className="SignIn_wrapper__body_form_wrapper__incorrect_signin_details">Incrorrect username or password</div>
                            <button className="SignIn_wrapper__body_form_wrapper_sign_in_btn" type="submit">
                                {isSignInLoading ? <img className="loading" alt="" src={loadingIcon} /> : "Sign in"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
