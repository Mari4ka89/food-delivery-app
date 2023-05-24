import Vendors from "./Vendors";
import Menu from "./Menu";

export default function Shop() {
  return (
    <div className="row">
      <div className="col-3">
        <Vendors />
      </div>
      <div className="col-9">
        <Menu />
      </div>
    </div>
  );
}
