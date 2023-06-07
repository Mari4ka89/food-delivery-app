import Vendors from "../js/components/Vendors";
import Menu from "../js/components/Menu";

export default function ShopPage() {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <Vendors />
        </div>
        <div className="col-9">
          <Menu />
        </div>
      </div>
    </>
  );
}
