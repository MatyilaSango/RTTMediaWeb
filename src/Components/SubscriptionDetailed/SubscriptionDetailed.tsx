import "./SubscriptionDetailed.css"
import { ISubscriptionDetailed } from '../../types/types'
import Item from "./Item/Item"
import axios from "axios"
axios.defaults.withCredentials = true

export default function SubscriptionDetailed({userSubscription, setSubscriptions}: ISubscriptionDetailed) {

  const handleDeleteSubscription = () => {
      axios.delete(`https://rtt-media-api.vercel.app/api/v1/subscriptions/${userSubscription.Uid}`)
        .then(data => data.data)
        .then(data => {
          if(!data.ok) return;
          // eslint-disable-next-line array-callback-return
          setSubscriptions(prev => prev = prev.filter(_subscription => {
            if(_subscription.Id !== userSubscription.Id) return _subscription
          }))
        }) 
        .catch(error => {})  
  }
  
  return (
    <div className="SubscriptionDetailed-wrapper">
        <div className="SubscriptionDetailed-wrapper__details-head">
            <span>Details</span>
            <div className="subscriptiondelete-btn center" onClick={() => handleDeleteSubscription()}>Delete</div>
        </div>
        <div className="SubscriptionDetailed-wrapper__items">
          {Object.entries(userSubscription).map((entry: string[], indx: number) => <Item key={entry[0]} name={entry[0]} detail={entry[1]} />)}
        </div>  
    </div>
  )
}
