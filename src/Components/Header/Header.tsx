import "./Header.css"
import { Link } from "react-router-dom"
import logoIcon from "../../icons/RTTMedia.png"
import userIcon from "../../icons/user.svg"
import { IHeader } from "../../types/types"

export default function Header({isSignInSinUp, isUserSignedIn}: IHeader) {
  return (
    <div className="page-body box-shadow">
      <div className="header page-max-width">
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
         {!isUserSignedIn ?
         <>
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
          </>
          :
          <div className="Header--account">
            <Link to="/account">
              <img alt="user" src={userIcon} />
              <span>Account</span>
            </Link>
          </div>}
        </div>    
        : ""}
      </div>
    </div>
  )
}
