import { useCartContext } from '../../context/CartContext';
import { TProduct } from '../../lib/types';

type CartItemProps = {
  product: TProduct;
  qty: number;
};

const CartItem = (props: CartItemProps) => {
  const { product, qty } = props;
  const { id, productName, productImage, price } = product;

  const { addToCart, removeFromCart } = useCartContext();

  return (
    <div className="card">
      <div className="row">
        <div className="col-4 col-md-2">
          <img
            src={productImage}
            className="img-fluid rounded-start"
            alt={productName}
          />
        </div>
        <div className="col-8 col-md-4">
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
                  value={qty}
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
  );
};

export default CartItem;
