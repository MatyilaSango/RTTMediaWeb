import HowToUseItemCard from '../../Components/HowToUseItemCard/HowToUseItemCard'
import { IHowToUse, IHowToUseItemCard } from '../../types/types'
import './HowToUse.css'
import { HowToData } from "../../Data/data"

export default function HowToUse({name, bgColor}: IHowToUse) {
  return (
    <div className='page-body page-height'>
        <div className='HowToUse page-max-width' style={{backgroundColor: `${bgColor}10`}}>
            <h1>{name}</h1>
            {(HowToData as any)[name].map((item: IHowToUseItemCard) => <HowToUseItemCard title={item.title} steps={item.steps} />)}
        </div>
    </div>
  )
}
