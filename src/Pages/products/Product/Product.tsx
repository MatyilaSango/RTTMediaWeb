import Feature from "../../../Components/Feature/Feature"
import SubscriptionPlans from "../../../Components/SubcriptionPlans/SubscriptionPlans"
import { MoreAmazingFeauterData } from "../../../Data/data"
import { IProduct } from "../../../types/types"
import "./Product.css"

export default function Product({ dispatch, productName, data }: IProduct) {
  return (
    <div className="page-body page-height">
      <div className="Product-wrapper page-max-width">
        <h1>
          <span className="Product-wrapper__h1" style={{ backgroundColor: `${data.color}50` }}>{productName}</span>
        </h1>
        <div className="Product-wrapper__product-info center">
          <div className="Product-wrapper__logo">
            <img alt="" src={data.logo} />
          </div>
          <div className="Product-wrapper__product-info__description center">
            <div className="Product-wrapper__product-info__description-text">
              <span>{data.description}</span>
            </div>
          </div>
        </div>
        <div className="Product-wrapper__preview">
          {/* // To do */}
        </div>
        <div className="Product-wrapper__more-amazing-features-wrapper center">
          <div className="Product-wrapper__more-amazing-features">
            <h2 className="Product-wrapper__more-amazing-features__head center">More Amazing Features</h2>
            <div className="Product-wrapper__more-amazing-features__features">
              {MoreAmazingFeauterData.map((featureData, indx: number) => <Feature key={indx} image={featureData.image} head={featureData.head} body={featureData.body} />)}
            </div>
          </div>
        </div>

        <div id="subscription-plans" className="SubcriptionPlansWrapper SubcriptionPlansWrapper-product">
          <div className="SubcriptionPlansWrapper__head-text center">
            <span>Compare And Choose a Plan</span>
          </div>
          <SubscriptionPlans isProductPage={true} />
        </div>
      </div>
    </div>
  )
}