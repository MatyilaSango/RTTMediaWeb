import { ISupportCard } from "../../types/types"
import "./SupportCard.css"

export default function SupportCard({image, description}: ISupportCard) {
  return (
    <div className="SupportCard-card">
        <div className="SupportCard-img-wrapper">
          <img alt="img" src={image} />
        </div>
        <span className="SupportCard-description">{description}</span>
    </div>
  )
}
