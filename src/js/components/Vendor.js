import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { calculateNavLinkClass } from "./../utils/cssUtils";
import "../../css/Vendor.css";

export default function Vendor({ name, id }) {
  const selectedVendorId = useSelector((state) => state.vendorId);

  return (
    <li
      className={`Vendor border rounded nav-item my-2 p-2 ${
        selectedVendorId === id ? "disaled" : ""
      }`}
    >
      <NavLink to={`category/${name}`} className={calculateNavLinkClass}>
        {name}
      </NavLink>
    </li>
  );
}
