import { useEffect, useState } from "react"
import "./SubscriptionPlans.css"
import axios from "axios"

export default function SubscriptionPlans() {
    const [plans, setPlans] = useState<any[]>()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        axios.get("https://rrt-media-server-api.vercel.app/api/v1/plans", {signal: signal, headers: {}})
            .then(data => data.data)
            .then(data => {
                setPlans(prev => prev = data)
                return () => {
                    abortController.abort()
                }
            })    
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
                            <span>{plan.Free}</span>
                        </div>
                        <div className="rowcell">
                            <span>{plan.Pro}</span>
                        </div>
                        <div className="rowcell">
                            <span>{plan.Premium}</span>
                        </div>
                    </div>
                    : ""
                )}
            </div>
        </div>
    )
}
