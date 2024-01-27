import { useEffect } from "react"
import { IProducts } from "../../types/types"
import "./Products.css"
import { ACCOUNT } from "../../enums/enum"

export default function Products({ dispatch }: IProducts) {

  useEffect(() => {
    dispatch({ type: ACCOUNT.SignIn_Or_SignUp, payload: false })
  }, [dispatch])

  return (
    <main className="Products">
      <span>Products</span>
    </main>
  )
}