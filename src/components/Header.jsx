import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Monkey Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                商品列表
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                登入
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                註冊
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
