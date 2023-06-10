import { NavLink, Outlet } from "react-router-dom";
import { calculateNavLinkClass } from "../utils/cssUtils";
import { localStorageSelectedVendor } from "../utils/localStorageUtils";
import { useAppSelector } from "../hooks";
import { selectedVendor } from "../reducers/selectedVendorSlice";

export default function App() {
  let vendor = "McDonalds";
  let stateVendor = useAppSelector(selectedVendor);
  let localStorageVendor = JSON.parse(localStorageSelectedVendor);

  if (stateVendor) {
    vendor = stateVendor;
  }

  if (localStorageVendor) {
    vendor = localStorageVendor;
  }

  return (
    <div className="App">
      <nav className="fixed-top bg-white">
        <div className="container">
          <ul className="nav nav-underline py-2">
            <li className="nav-item">
              <NavLink
                to={`/category/${vendor}`}
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
