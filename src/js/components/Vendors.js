import { useLoaderData } from "react-router-dom";
import Vendor from "./Vendor";
import "../../css/Vendors.css";

export default function Vendors() {
  const vendors = useLoaderData();

  return (
    <aside className="Vendors border rounded text-center px-5 py-2">
      <h2>Shops:</h2>
      <ul className="nav flex-column">
        {vendors.map((vendor) => (
          <Vendor key={vendor.replace(/\s+/g, "")} name={vendor} />
        ))}
      </ul>
    </aside>
  );
}
