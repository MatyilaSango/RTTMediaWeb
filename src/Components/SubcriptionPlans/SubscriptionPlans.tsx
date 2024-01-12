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
            <div className={styles.head}>
                <div className={styles.cell}>
                    <span>Compare Plans</span>
                </div>
                <div className={styles.cell}>
                    <span>Free</span>
                </div>
                <div className={styles.cell}>
                    <span>Pro</span>
                </div>
                <div className={styles.cell}>
                    <span>Life Time</span>
                </div>
            </div>
            <div className={styles.body}>
                {plans && plans.map(plan => 
                    <div className={styles.row}>
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
                )}
            </div>
        </div>
    )
}
