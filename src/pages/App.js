import { useSelector } from "react-redux";
import Link from "next/link";
import { calculateNavLinkClass } from "../js/utils/cssUtils";
import { localStorageSelectedVendor } from "../js/utils/localStorageUtils";
// import "../../styles/Home.css";

export default function App({ Component, pageProps }) {
  let selectedVendor = "McDonalds";
  let stateVendor = useSelector((state) => state.selectedVendor);
  let localStorageVendor =
    localStorageSelectedVendor && JSON.parse(localStorageSelectedVendor);

  if (stateVendor) {
    selectedVendor = stateVendor;
  }

  if (localStorageVendor) {
    selectedVendor = localStorageVendor;
  }
  // href={`/category/${selectedVendor}`}
  /* {{
                  pathname: "/shop",
                  query: { vendorId: selectedVendor },
                }} */
  return (
    <div className="App">
      <nav className="fixed-top bg-white">
        <div className="container">
          <ul className="nav nav-underline py-2">
            <li className="nav-item">
              <Link href="/shop" className={calculateNavLinkClass}>
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <div className="container">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

/*
            <li className="nav-item px-3 border-start">
              <Link href="/cart" className={calculateNavLinkClass}>
                Shopping Cart
              </Link>
            </li>
            */
