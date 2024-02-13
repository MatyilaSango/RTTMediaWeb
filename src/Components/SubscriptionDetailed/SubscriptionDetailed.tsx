import "./SubscriptionDetailed.css"
import { ISubscription } from '../../types/types'
import Item from "./Item/Item"

export default function SubscriptionDetailed({userSubscription}: ISubscription) {
  return (
    <div className="SubscriptionDetailed-wrapper">
        <div className="SubscriptionDetailed-wrapper__details-head">
            <span>Details</span>
        </div>
        <div className="SubscriptionDetailed-wrapper__items">
          {Object.keys(userSubscription).map((key: string, indx: number) => <Item name={key} detail={userSubscription[key]} />)}
        </div>  
    </div>
  )
}
