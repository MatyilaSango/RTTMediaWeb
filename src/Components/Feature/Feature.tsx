import { IFeature } from "../../types/types"
import "./Feature.css"

export default function Feature({image, head, body}: IFeature) {
  return (
    <div className="Feature-wrapper">
        <div className="Feature-wrapper__img">
            <img alt="" src={image} />
        </div>
        <div className="Feature-wrapper__head">
            <span>{head}</span>
        </div>
        <div className="Feature-wrapper__body">
            <span>{body}</span>
        </div>
    </div>
  )
}