import { PRODUCTS } from "../../assets/products/products"
import ProductItem from "./ProductItem"

const Product = () => {
  return (
    <>
      <h3>Product Listing</h3>
      <div className="d-flex flex-wrap gap-2">
        {PRODUCTS.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Product