import "./Item.css"
import { IItem } from '../../../types/types'

export default function Item({name, detail}: IItem) {
  return (
    <div className="Item-wrapper">
        <div className="Item-wrapper__name">
            <span>{name}</span>
        </div>
        <div className='Item-wrapper__detail'>
            <span>{detail}</span>
        </div>
    </div>
  )
}
