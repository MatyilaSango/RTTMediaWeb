import { useEffect } from "react"
import { IAccount } from "../../types/types"
import "./Account.css"
import { ACCOUNT } from "../../enums/enum"

export default function Account({ dispatch }: IAccount) {

  useEffect(() => {
    dispatch({ type: ACCOUNT.SignIn_Or_SignUp, payload: false })
  }, [dispatch])

  return (
    <div className="page-body page-height">
      <main className="Account page-max-width">
        <span>Account</span>
      </main>
    </div>
  )
}