import { Link, useLocation } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Navbar = () => {
  const { pathname } = useLocation();

  const { getTotalQty, favoriteIds } = useCartContext();

  return (
    <div className="container border-bottom">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              to="/"
              className={'nav-link ' + (pathname === '/' && 'active')}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/product"
              className={'nav-link ' + (pathname === '/product' && 'active')}
            >
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cart"
              className={'nav-link ' + (pathname === '/cart' && 'active')}
            >
              Cart
              {getTotalQty() > 0 && (
                <span className="badge rounded-pill bg-danger ms-1">
                  {getTotalQty()}
                </span>
              )}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/favorite"
              className={'nav-link ' + (pathname === '/favorite' && 'active')}
            >
              Favorite
              {
                favoriteIds.length > 0 && (
                  <span className='badge rounded-pill bg-danger ms-1'>
                    {favoriteIds.length}
                  </span>
                )
              }
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
