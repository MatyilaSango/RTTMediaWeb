import { useEffect, useState } from "react"
import "./SubscriptionPlans.css"
import axios from "axios"
import yesFreeIcon from "../../icons/yes_free.svg"
import noFreeIcon from "../../icons/no_free.svg"
import yesProIcon from "../../icons/yes_pro.svg"
import noProIcon from "../../icons/no_pro.svg"
import yesPremiumIcon from "../../icons/yes_premium.svg"
import noPremiumIcon from "../../icons/no_premium.svg"

export default function SubscriptionPlans() {
    const [plans, setPlans] = useState<any[]>()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        axios.get("https://rrt-media-server-api.vercel.app/api/v1/plans/all", {signal: signal})
            .then(data => data.data)
            .then(data => {
                if(data.ok) setPlans(prev => prev = data.data)
                return () => {
                    abortController.abort()
                }
            }) 
            .catch(error => {})   
    }, [])

    return (
        <div className="subscription-table">
            {plans && plans.map(plan => 
            (plan.Feature === "Price") ?
            <div className="head" key={plan.Feature}>
                <div className="cellHead">
                    <span>Compare Plans</span>        
                </div>
                <div className="cellHead">
                    <div className="headPlanName">Free</div>
                    <div className="headCellPrice Free">{plan.Free}</div>
                </div>
                <div className="cellHead">
                    <div className="headPlanName">Pro</div>
                    <div className="headCellPrice Pro">{plan.Pro}</div>
                </div>
                <div className="cellHead">
                    <div className="headPlanName">Premiun</div>
                    <div className="headCellPrice Premium">{plan.Premium}</div>
                </div>
            </div> : "")
            }
            <div className="subscription-body">
                {plans && plans.map(plan => 
                    (plan.Feature !== "Price") ? 
                    <div className="row" key={plan.Feature}>
                        <div className="rowcell">
                            <span>{plan.Feature}</span>
                        </div>
                        <div className="rowcell">
                            {plan.Free === "Yes" ? (<img alt="yes" src={yesFreeIcon} />) : plan.Free === "No" ? (<img alt="no" src={noFreeIcon} />) : <span>{plan.Free}</span>}
                        </div>
                        <div className="rowcell">
                            {plan.Pro === "Yes" ? (<img alt="yes" src={yesProIcon} />) : plan.Pro === "No" ? (<img alt="no" src={noProIcon} />) : <span>{plan.Pro}</span>}
                        </div>
                        <div className="rowcell">
                            {plan.Premium === "Yes" ? (<img alt="yes" src={yesPremiumIcon} />) : plan.Premium === "No" ? (<img alt="no" src={noPremiumIcon} />) : <span>{plan.Premium}</span>}
                        </div>
                    </div>
                    : ""
                )}
            </div>
        </div>
    )
}
