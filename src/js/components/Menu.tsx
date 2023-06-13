import { useLoaderData } from "react-router-dom";
import MenuItem, { Product } from "./MenuItem";

interface Item extends Product {
  category: "McDonalds";
  id: 16888521932;
}

export default function Menu() {
  const items = useLoaderData() as Item[];

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
