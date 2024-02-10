import { ISubscription } from "../../types/types"
import "./Subscription.css"

export default function Subscription({userSubscription}: ISubscription) {
  return (
    <div className='Subscribed-Subscription-wrapper'>
        <div className="Subscribed-Subscription__card">
            <div className="Subscribed-Subscription__id">
                <span>ID: {userSubscription.Id}</span>
            </div>
            <div className="Subscribed-Subscription__product-type-startDate">
                <div className="Subscribed-Subscription__product">
                    <span>{userSubscription.Product} {userSubscription.Plan}</span>
                </div>
                <div className="Subscribed-Subscription__startDate">
                    <span>Start date: <br /> {new Date(userSubscription.DateCreated).toDateString()}</span>
                </div>
            </div>
            <div className="Subscribed-Subscription__License-endDate">
                <div className="Subscribed-Subscription__License">
                    <span>License</span>
                </div>
                <div className="Subscribed-Subscription__endDate">
                    <span>Expiry date: <br /> {new Date(userSubscription.ExpiryDate).toDateString()}</span>
                </div>
            </div>
            <div className="Subscribed-Subscription__Validity center">
                <div className="Subscribed-Subscription__state center active">ACTIVE</div>
            </div>
        </div>
    </div>
  )
}
