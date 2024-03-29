import { useEffect } from "react"
import { IProducts } from "../../types/types"
import "./Products.css"
import { ACCOUNT } from "../../enums/enum"
import ProductCard from "../../Components/ProductCard/ProductCard"
import SupportCard from "../../Components/SupportCard/SupportCard"
import hdIcon from "../../icons/hd-support.svg"
import batchIcon from "../../icons/batch-support.svg"
import fastIcon from "../../icons/fast-support.svg"
import { products } from "../../Data/data"

export default function Products({ dispatch }: IProducts) {

  useEffect(() => {
    dispatch({ type: ACCOUNT.SignIn_Or_SignUp, payload: false })
  }, [dispatch])

  return (
    <div className="page-body">
      <main className="Products page-max-width">
        <h1>Products</h1>
        <div className="Products__media-downloader-wrapper">
          <div className="Products__media-downloader-wrapper__head">
            <div className="Products__media-downloader-wrapper__head-text center">
              Media Downloader
            </div>
          </div>
          <main className="Products__media-downloader-wrapper__products-wrapper">
            <div className="Products__media-products-support">
              <SupportCard image={hdIcon} description="HD media support" />
              <SupportCard image={batchIcon} description="Batch download" />
              <SupportCard image={fastIcon} description="8x fast download" />
            </div>
            {Object.entries(products).map((product) => (
              <ProductCard 
                key={product[0]}
                backgroundColor={product[1].color}
                name={product[1].name}
                image={product[1].image}
                description={product[1].description}
              />
            ))}
          </main>
        </div>
      </main>
    </div>
  )
}