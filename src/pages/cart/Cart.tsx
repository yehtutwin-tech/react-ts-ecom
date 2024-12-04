import { PRODUCTS } from "../../assets/products/products";
import { useCartContext } from "../../context/CartContext"
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, getTotalAmount } = useCartContext();

  return (
    <>
      <h3>Your Cart Items</h3>
      <h5>Total Amount: $ {getTotalAmount()}</h5>
      <div className="d-flex flex-column gap-2">
        {cartItems.map(item => {
          const product = PRODUCTS.find(product => product.id === item.id);
          if (product) {
            return (
              <CartItem
                key={product.id}
                product={product}
                qty={item.qty}
              />
            )
          }
        })}
      </div>
    </>
  )
}

export default Cart