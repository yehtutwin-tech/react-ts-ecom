import { Link, useParams } from "react-router-dom"
import { PRODUCTS } from "../../assets/products/products";
import { TProduct } from "../../lib/types";
import { useCartContext } from "../../context/CartContext";

const ProductDetail = () => {
  const params = useParams();

  const product = PRODUCTS.find(product => product.id === Number(params.id)) as TProduct;

  const { id, productName, productImage, price } = product;

  const { getItemQty, addToCart, removeFromCart } = useCartContext();

  const realtedItems = PRODUCTS.filter(product => product.id !== id);

  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-4">
            <img
              src={productImage}
              className="img-fluid rounded-start"
              alt={productName}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5>{productName}</h5>
              <p className="card-text">${price}</p>
              <div className="card-text">
                <div className="input-group" style={{ width: '150px' }}>
                  <div
                    className="btn btn-outline-secondary"
                    onClick={() => removeFromCart(id)}
                  >
                    -
                  </div>
                  <input
                    type="text"
                    className="form-control border-secondary text-center"
                    disabled
                    value={getItemQty(id) || 0}
                  />
                  <div
                    className="btn btn-outline-secondary"
                    onClick={() => addToCart(id)}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-5 mb-2">Related Products</h3>
      <div className="d-flex gap-2">
        {realtedItems.map(product => (
          <div key={product.id} className="card">
            <img
              src={product.productImage}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/product/${product.id}`}>
                  {product.productName}
                </Link>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductDetail