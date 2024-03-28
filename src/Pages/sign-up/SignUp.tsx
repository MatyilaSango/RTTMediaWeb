import "./SignUp.css"
import exitIcon from "../../icons/close.svg"
import loadingIcon from "../../icons/update.svg"
import { useEffect, useRef, useState } from "react"
import { ISignUp } from "../../types/types"
import { Link, useNavigate } from "react-router-dom"
import { ACCOUNT } from "../../enums/enum"
import Confirmation from "../../Components/Confirmation/Confirmation"
import axios from "axios"

export default function SignUp({ dispatch }: ISignUp) {
    const [isSignUpLoading, setIsSignUpLoading] = useState<boolean>(false)
    const [isRegistered, setIsRegistered] = useState<boolean>(false)
    const navigate = useNavigate()
    let incorrectPasswordsRef = useRef(false)

    useEffect(() => {
        dispatch({ type: ACCOUNT.SignIn_Or_SignUp, payload: true })
    }, [dispatch])

    const handleFormDetails = async (e: React.FormEvent<HTMLFormElement>) => {
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
            const confirmedPassword: string = inputValues[5].value

            setIsSignUpLoading(prev => prev = true)
            incorrectPasswordsRef.current = false

            if (password !== confirmedPassword) {
                incorrectPasswordsRef.current = true
                setIsSignUpLoading(prev => prev = false)
                return
            }

            const userResponse = await (await axios.post("https://rtt-media-api.vercel.app/api/v1/users/new-user", {
                FirstName: firstName,
                LastName: lastName,
                Username: username,
                Email: email,
                Password: password
            })).data

            if (!userResponse.ok) {
                setIsSignUpLoading(prev => prev = false)
                incorrectPasswordsRef.current = true
                return
            }

            setIsRegistered(prev => prev = true)
        }
    }

    const exitSignUp = () => {
        setIsRegistered(prev => prev = false)
        navigate("/sign-in")
    }

    return (
        <div className="page-body">
            {isRegistered ? <Confirmation message="Signed up successfully." func={exitSignUp} /> : ""}
            <div className="SignUpWrapperCon page-max-width">
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
                            <input type="password" required placeholder="Confirm password" name="confirmedPassword" />
                            <div className={`SignUp_wrapper__body_form_wrapper__incorrect_SignUp_details ${incorrectPasswordsRef.current ? 'show' : ''}`}>Passwords do not match...</div>
                            <button className="SignUp_wrapper__body_form_wrapper_sign_in_btn" type="submit">
                                {isSignUpLoading ? <img className="loading" alt="" src={loadingIcon} /> : "Sign up"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
