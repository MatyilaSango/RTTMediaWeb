import { IStepCard } from "../../types/types"
import "./StepCard.css"

export default function StepCard({previewShot, heading, body}: IStepCard) {
  return (
    <div className="StepCard--wrapper">
        <div className="StepCard--wrapper__img-wrapper">
          <img alt="" src={previewShot} />
        </div>
        <h4 className="center">{heading}</h4>
        <p>{body}</p>
    </div>
  )
}