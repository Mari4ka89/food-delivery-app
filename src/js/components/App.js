import { NavLink, Outlet } from "react-router-dom";
import { calculateNavLinkClass } from "./../utils/cssUtils";
import "../../css/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <ul className="nav nav-underline py-2">
          <li className="nav-item">
            <NavLink to="/" className={calculateNavLinkClass}>
              Shop
            </NavLink>
          </li>
          <li className="nav-item px-3 border-start">
            <NavLink to="/cart" className={calculateNavLinkClass}>
              Shopping Cart
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}