import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <div className="header-logo">
          <Link className="nav-logo" to="/">
            <h3>BookStore CMS</h3>
          </Link>
        </div>
        <nav>
          <ul className="nav-links-list">
            <li key="books"><Link to="/" className="nav-link" activeClassName="active-link">Books</Link></li>
            <li key="categories"><Link to="/categories" className="nav-link">Categories</Link></li>
          </ul>
          <img src="https://nduatikagiri.co.ke/bookstore/user.png" alt="" />
        </nav>
      </header>
    );
  }
}
export default Header;
