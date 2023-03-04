import { Link } from 'react-router-dom';

const Navigation = () => (
  <header className="d-flex">
    <nav className="d-flex">
      <a href="/"><h3 className="header-title">Bookstore CMS</h3></a>
      <ul className="navbar-ul d-flex">
        <li><Link to="/" className="nav-link project-main-txt-color">Books</Link></li>
        <li><Link to="/categories" className="nav-link dark-gret-txt">Categories</Link></li>
      </ul>
    </nav>
    <i className="fa-regular fa-circle-user fa-2x user-icon" />
  </header>
);

export default Navigation;
