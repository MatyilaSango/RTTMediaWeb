import "./Header.css"
import { Link } from "react-router-dom"
import logoIcon from "../../icons/RRTMedia.png"
import { IHeader } from "../../types/types"

export default function Header({isSignInSinUp}: IHeader) {
  return (
    <div className="header">
      <div className="logoNavWrapper">
        <Link to="/">
          <img className="logo" alt="" src={logoIcon} />
        </Link>
        <Link to="/products">
          <span className="toLink">Products</span>
        </Link>
      </div>

    {!isSignInSinUp ?
      <div className="signInSignUpWrapper">
        <div className="signInWrapper">
          <Link to="/sign-in">
            <span>Sign In</span>
          </Link>
        </div>
        <div className="signUpWrapper">
          <Link to="/sign-up">
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
      : ""}
    </div>
  )
}
