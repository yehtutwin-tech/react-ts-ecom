import { PRODUCTS } from "../../assets/products/products"
import { useCartContext } from "../../context/CartContext"
import ProductItem from "../product/ProductItem"

const Favorite = () => {
  const { favoriteIds } = useCartContext();

  return (
    <>
      <h3>Favorite Product Listing</h3>
      <div className="d-flex flex-wrap gap-2">
        {favoriteIds.map(fid => {
          const product = PRODUCTS.find(product => product.id === fid);
          if (product) {
            return (
              <ProductItem key={product.id} product={product} />
            )
          }
        })}
      </div>
    </>
  )
}

export default Favorite