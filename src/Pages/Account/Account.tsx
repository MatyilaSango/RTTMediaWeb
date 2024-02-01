import { useEffect, useState } from "react"
import { IAccount } from "../../types/types"
import "./Account.css"
import { ACCOUNT } from "../../enums/enum"
import avatorIcon from "../../icons/user.svg"
import logoutIcon from "../../icons/logout.svg"
import subscriptionIcon from "../../icons/subscription.svg"
import AccountDetails from "../../Components/AccountDetails/AccountDetails"

export default function Account({ dispatch, userAccount }: IAccount) {
  const [currentAccountPage, setCurrentAccountPage] = useState<string>("Personal Details")

  useEffect(() => {
    dispatch({ type: ACCOUNT.SignIn_Or_SignUp, payload: false })
  }, [dispatch])

  return (
    <div className="page-body page-height">
      <main className="Account page-max-width">
        <h1 className="Account__heading">My Account</h1>
        <div className="Account-details-wrapper">
          <nav className="Account-details-wrapper__nav">
            <div className="Account-details-wrapper__nav__avator-username">
              <div className="Account-details-wrapper__nav__avator center">
                <img alt="avator" src={avatorIcon} />
              </div>
              <div className="Account-details-wrapper__nav__username center">
                {userAccount.Username.toUpperCase()}
              </div>
            </div>
            <div className="Account-details-wrapper__nav__btns-wrapper">
              <div className="Account-details-wrapper__nav__btns-wrapper__acc-det--sign-out" onClick={() => {setCurrentAccountPage(prev => prev = "Personal Details")}}>
                <span><img alt="icon" className="acc-btn-icon" src={avatorIcon} />Personal Details</span>
              </div>
              <div className="Account-details-wrapper__nav__btns-wrapper__acc-det--sign-out" onClick={() => {setCurrentAccountPage(prev => prev = "Subscriptions")}}>
                <span><img alt="icon" className="acc-btn-icon" src={subscriptionIcon} />Subscriptions</span>
              </div>
              <div className="Account-details-wrapper__nav__btns-wrapper__acc-det--sign-out">
                <span><img alt="icon" className="acc-btn-icon" src={logoutIcon} />Sign Out</span>
              </div>

            </div>
          </nav>
          <div className="Account-details-wrapper__details">
              <AccountDetails title={currentAccountPage} object={userAccount} />
          </div>
        </div>
      </main>
    </div>
  )
}