import windowsIcon from "../../icons/windows.svg"
import previewIcon from "../../icons/preview.svg"
import './Home.css'
import SubscriptionPlans from "../../Components/SubcriptionPlans/SubscriptionPlans"
import { useEffect } from "react"
import { IHome } from "../../types/types"
import { ACCOUNT } from "../../enums/enum"

export default function Home({ dispatch }: IHome) {

  useEffect(() => {
    dispatch({ type: ACCOUNT.SignIn_Or_SignUp, payload: false })
  }, [dispatch])

  return (
    <div className="page-body">
      <main className="body page-max-width">
        <div className="info">
          <h1>RTTMedia</h1>
          <p>Provides services for Reddit, Tumblr, and Twitter media downloader.</p>
          <div className="btns">
            <div className="btn">
              <img className="btnIcon" alt="" src={windowsIcon} />
              <span>Free download</span>
            </div>
            <a href="#subscription-plans">
              <div className="btnSub">
                <span>Subscription Plans</span>
              </div>
            </a>
          </div>
        </div>
        <div className="preview">
          <img alt="" src={previewIcon} />
        </div>
        <div id="subscription-plans" className="SubcriptionPlansWrapper">
          <SubscriptionPlans />
        </div>
      </main>
    </div>
  )
}
