import { IHowToUseItemCard } from "../../types/types"
import StepCard from "../StepCard/StepCard"
import "./HowToUseItemCard.css"

export default function HowToUseItemCard({title, steps}: IHowToUseItemCard) {
  return (
    <div className="HowToUseItemCard--wrapper">
        <div className='HowToUseItemCard--wrapper__title center'>{title}</div>
        <div className='HowToUseItemCard__steps-wrapper'>
            {steps.map(step => 
                <StepCard 
                    previewShot={step.previewShot} 
                    heading={step.heading}
                    body={step.body} 
                />
            )}
        </div>
    </div>
  )
}