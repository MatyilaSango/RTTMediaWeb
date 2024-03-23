import "./PrivacyPolicy.css"
import { PrivacyPolicyData } from "../../Data/data"

export default function PrivacyPolicy() {
  return (
    <div className="page-body page-height">
      <main className="PrivacyPolicy-wrapper page-max-width">
        <h2 className="PrivacyPolicy-wrapper__heading">PRIVACY POLICY</h2>
        <div className="PrivacyPolicy-wrapper__container">
            {PrivacyPolicyData.map((data, indx) => 
                <div className="PrivacyPolicy-wrapper__item">
                    <h4>{data.head}</h4>
                    <p>{data.text}</p>
                </div>
            )}
        </div>
      </main>
    </div>
  )
}