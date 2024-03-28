import { useEffect, useState } from "react"
import "./SubscriptionPlans.css"
import axios from "axios"
import yesFreeIcon from "../../icons/yes_free.svg"
import noFreeIcon from "../../icons/no_free.svg"
import yesProIcon from "../../icons/yes_pro.svg"
import noProIcon from "../../icons/no_pro.svg"
import yesPremiumIcon from "../../icons/yes_premium.svg"
import noPremiumIcon from "../../icons/no_premium.svg"
import { ISubscriptionComponent } from "../../types/types"
axios.defaults.withCredentials = true

export default function SubscriptionPlans({ isProductPage }: ISubscriptionComponent) {
    const [plans, setPlans] = useState<any[]>()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        axios.get("https://rtt-media-api.vercel.app/api/v1/plans", {signal: signal})
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
        !plans ? <></> :
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
                    { isProductPage ? 
                        <div className="row row-buy-now">
                            <div className="rowcell">
                                <span></span>
                            </div>
                            <div className="rowcell">
                                
                            </div>
                            <div className="rowcell buy-now">
                                {<span className="center Pro">Buy Now</span>}
                            </div>
                            <div className="rowcell buy-now">
                                {<span className="center Premium">Buy Now</span>}
                            </div>
                        </div>
                        : ""
                    }
                </div>
            </div>
    )
}
