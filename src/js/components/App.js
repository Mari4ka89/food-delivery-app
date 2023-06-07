import { NavLink, Outlet } from "react-router-dom";
import { calculateNavLinkClass } from "../utils/cssUtils";
import { localStorageSelectedVendor } from "../utils/localStorageUtils";
import { useAppSelector } from "../hooks";

export default function App() {
  let selectedVendor = "McDonalds";
  let stateVendor = useAppSelector((state) => state.selectedVendor);
  let localStorageVendor = JSON.parse(localStorageSelectedVendor);

  if (stateVendor) {
    selectedVendor = stateVendor;
  }

  if (localStorageVendor) {
    selectedVendor = localStorageVendor;
  }

  return (
    <div className="App">
      <nav className="fixed-top bg-white">
        <div className="container">
          <ul className="nav nav-underline py-2">
            <li className="nav-item">
              <NavLink
                to={`/category/${selectedVendor}`}
                className={calculateNavLinkClass}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item px-3 border-start">
              <NavLink to="/cart" className={calculateNavLinkClass}>
                Shopping Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
