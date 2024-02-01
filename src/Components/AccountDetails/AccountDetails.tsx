import "./AccountDetails.css"
import { IAccountDetails } from '../../types/types'

export default function AccountDetails({ title, object }: IAccountDetails) {

    return (
        <div className="AccountDetails-wrapper">
            <h3 className="AccountDetails__heading">{title}</h3>
            <form>

            </form>
        </div>

    )
}
