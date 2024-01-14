"use client"

import { useEffect, useState } from "react"
import styles from "./SubscriptionPlans.module.css"
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
        <div className={styles.table}>
            {plans && plans.map(plan => 
            (plan.Feature === "Price") ?
            <div className={styles.head}>
                <div className={styles.cellHead}>
                    <span>Compare Plans</span>        
                </div>
                <div className={styles.cellHead}>
                    <div className={styles.headPlanName}>Free</div>
                    <div className={`${styles.headCellPrice} ${styles.Free}`}>{plan.Free}</div>
                </div>
                <div className={styles.cellHead}>
                    <div className={styles.headPlanName}>Pro</div>
                    <div className={`${styles.headCellPrice} ${styles.Pro}`}>{plan.Pro}</div>
                </div>
                <div className={styles.cellHead}>
                    <div className={styles.headPlanName}>Premiun</div>
                    <div className={`${styles.headCellPrice} ${styles.Premium}`}>{plan.Premium}</div>
                </div>
            </div> : "")
            }
            <div className={styles.body}>
                {plans && plans.map(plan => 
                    (plan.Feature !== "Price") ? 
                    <div className={styles.row} key={plan.Feature}>
                        <div className={styles.rowcell}>
                            <span>{plan.Feature}</span>
                        </div>
                        <div className={styles.rowcell}>
                            <span>{plan.Free}</span>
                        </div>
                        <div className={styles.rowcell}>
                            <span>{plan.Pro}</span>
                        </div>
                        <div className={styles.rowcell}>
                            <span>{plan.Premium}</span>
                        </div>
                    </div>
                    : ""
                )}
            </div>
        </div>
    )
}
