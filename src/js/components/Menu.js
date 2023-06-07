import { useEffect, useState } from "react";
import { menuLoader } from "../loaders/menuLoader";
import MenuItem from "./MenuItem";

export default function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(menuLoader({ params: { vendorId: "McDonalds" } }));
  }, []);

  return (
    <main className="content-body pe-3">
      <div className="row">
        {items.map((item) => (
          <MenuItem key={item.id} info={item} />
        ))}
      </div>
    </main>
  );
}
