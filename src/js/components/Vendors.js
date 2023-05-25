import { useLoaderData } from "react-router-dom";
import Vendor from "./Vendor";

export default function Vendors() {
  const vendors = useLoaderData();

  return (
    <aside className="border rounded text-center px-5 py-2">
      <h2>Shops:</h2>
      <ul className="nav flex-column">
        {vendors.map(({ id, vendor }) => (
          <Vendor key={id} name={vendor} id={id} />
        ))}
      </ul>
    </aside>
  );
}
