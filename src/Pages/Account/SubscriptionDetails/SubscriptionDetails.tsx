import { useEffect, useState } from "react"
import Subscription from "../../../Components/Subscription/Subscription"
import { IAccountDetails } from "../../../types/types"
import "./SubscriptionDetails.css"
import axios from "axios"

export default function SubscriptionDetails({ object, dispatch }: IAccountDetails) {
    const [subscriptions, setSubscriptions] = useState([])

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        axios.post("https://rrt-media-server-api.vercel.app/api/v1/subscription-user", {signal: signal})
            .then(data => data.data)
            .then(data => {
                if(data.ok) setSubscriptions(prev => prev = data.data)
                return () => {
                    abortController.abort()
                }
            }) 
            .catch(error => {})   
    }, [])


    return (
        <div className="SubscriptionDetails-wrapper">
            <h3 className="SubscriptionDetails__heading">Subscriptions</h3>
            <div className="SubscriptionDetails__list">
                {subscriptions.map((subscriptionData: {}, indx: number) => <Subscription key={indx} userSubscription={subscriptionData} />)}
            </div>
        </div>
    )
}
