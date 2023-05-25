import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

export default function Menu() {
  const items = useLoaderData();

  return (
    <main>
      <div className="row">
        {items.map((item) => (
          <MenuItem key={item.id} info={item} />
        ))}
      </div>
    </main>
  );
}
