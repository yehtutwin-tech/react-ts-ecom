import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartContext } from '../../context/CartContext';
import { TProduct } from '../../lib/types';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type ProductItemProps = {
  product: TProduct;
};

const ProductItem = (props: ProductItemProps) => {
  const { product } = props;
  const { id, productName, productImage, price } = product;

  const { getItemQty, addToCart, isFavorite, toggleFavorite } = useCartContext();

  return (
    <div className="card" style={{ width: '220px'}}>
      <img src={productImage} className='card-img-top' />
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/product/${id}`} className='text-decoration-none'>
            {productName}
          </Link>
        </h5>
        <p className="card-text">${price}</p>
        <button
          className='btn btn-primary position-relative'
          onClick={() => addToCart(id)}
        >
          <FontAwesomeIcon icon={faCartShopping} className='me-2' />
          Add to Cart
          <span className="badge position-absolute rounded-pill top-0 start-100 translate-middle bg-danger">
            {getItemQty(id)}
          </span>
        </button>
        <button
          className={'btn btn-outline-primary ms-2 ' + (isFavorite(id) && 'text-danger')}
          onClick={() => toggleFavorite(id)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
