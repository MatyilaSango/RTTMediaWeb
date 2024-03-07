import { Link } from "react-router-dom"
import { IProductCard } from "../../types/types"
import "./ProductCard.css"

export default function ProductCard({backgroundColor, name, description, image}: IProductCard) {
  return (
    <div className="ProductCard-wrapper" style={{backgroundColor: `${backgroundColor}20`}}>
        <div className="ProductCard-wrapper__head center">
            <div className="ProductCard-wrapper__head__product-name center" style={{backgroundColor}}>{name}</div>
        </div>
        <main className="ProductCard-wrapper__body">
            <div className="ProductCard-wrapper__preview-img center">
                <img alt="preview" src={image} />
            </div>
            <div className="ProductCard-wrapper__description center">
                <span>{description}</span>
            </div>
            <div className="ProductCard-wrapper__more">
                <Link to={`${name}`}>
                    <span>{'More >>'}</span>
                </Link>    
            </div>
        </main>
    </div>
  )
}
