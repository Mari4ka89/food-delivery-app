import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { calculateNavLinkClass } from "../utils/cssUtils";
import "../../css/Vendor.css";

export default function Vendor({ name }) {
  const selectedVendor = useAppSelector((state) => state.selectedVendor);

  function getClassName({ isActive, isPending }) {
    return selectedVendor && selectedVendor !== name
      ? "nav-link disabled"
      : calculateNavLinkClass({ isActive, isPending });
  }

  return (
    <li className="Vendor border rounded nav-item my-2 p-2">
      <NavLink to={`category/${name}`} className={getClassName}>
        {name}
      </NavLink>
    </li>
  );
}
