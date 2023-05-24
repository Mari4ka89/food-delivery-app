import { useSelector } from "react-redux";
import Vendor from "./Vendor";

export default function Vendors() {
  const vendors = useSelector((state) => state.vendors);

  return (
    <aside className="border rounded text-center px-5 py-2">
      <h2>Shops:</h2>
      <ul className="list-unstyled">
        {vendors.map((vendor) => (
          <Vendor key={vendor} name={vendor} />
        ))}
      </ul>
    </aside>
  );
}
