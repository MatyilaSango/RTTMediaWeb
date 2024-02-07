import { useEffect } from "react"
import { IAccount } from "../../types/types"
import "./Account.css"
import { ACCOUNT } from "../../enums/enum"
import avatorIcon from "../../icons/user.svg"
import logoutIcon from "../../icons/logout.svg"
import subscriptionIcon from "../../icons/subscription.svg"
import { Link, Outlet, useNavigate } from "react-router-dom"
import axios from "axios"
axios.defaults.withCredentials = true

export default function Account({ dispatch, userAccount }: IAccount) {
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({ type: ACCOUNT.SignIn_Or_SignUp, payload: true })
    if(!userAccount?.Username) navigate("*")
  }, [dispatch])

  const handleLogOut = async () => {
      axios.delete("http://localhost:3001/api/tokens/clear", {
          withCredentials: true,
      })
      .then(promise => promise.data)
      .then(deleteTokenResponse => {
        if(deleteTokenResponse.ok){  
          dispatch({type: "signOut", payload: userAccount})
          navigate("/")
        }
      })
      .catch(eror => {})      
  }

  return (
    <div className="page-body page-height">
      <main className="Account page-max-width">
        <h1 className="Account__heading">
          <span>My Account</span>
        </h1>
        <div className="Account-details-wrapper">
          <div className="Account__menu">
            <nav className="Account-details-wrapper__nav" id="Account-details-wrapper__nav">
              <div className="Account-details-wrapper__nav__avator-username">
                <div className="Account-details-wrapper__nav__avator center">
                  <img alt="avator" src={avatorIcon} />
                </div>
                <div className="Account-details-wrapper__nav__username center">
                  {userAccount?.Username?.toUpperCase()}
                </div>
              </div>
              <div className="Account-details-wrapper__nav__btns-wrapper">
                <Link to="personal-details">
                    <div className="Account-details-wrapper__nav__btns-wrapper__acc-det--sign-out">
                    <span><img alt="icon" className="acc-btn-icon" src={avatorIcon} />Personal Details</span>
                  </div>
                </Link>
                <Link to="subscription-details">
                  <div className="Account-details-wrapper__nav__btns-wrapper__acc-det--sign-out">
                    <span><img alt="icon" className="acc-btn-icon" src={subscriptionIcon} />Subscriptions</span>
                  </div>
                </Link>
                <div className="Account-details-wrapper__nav__btns-wrapper__acc-det--sign-out" onClick={() => {handleLogOut()}}>
                  <span><img alt="icon" className="acc-btn-icon" src={logoutIcon} />Sign Out</span>
                </div>
              </div>
            </nav>
          </div>
          <div className="Account-details-wrapper__details">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}