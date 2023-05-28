import { useRef } from "react";
import ContactForm from "./ContactForm";
import SelectedItems from "./SelectedItems";
import TotalPrice from "./TotalPrice";
import GMap from "./GMap";
import "../../css/ShoppingCart.css";

export default function ShoppingCart() {
  const formRef = useRef();

  function handleSubmit() {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  }

  return (
    <div className="ShoppingCart">
      <div className="row">
        <div className="col">
          <div className="border rounded p-3 content-body">
            <div className="w-100 h-50">
              <GMap />
            </div>
            <ContactForm ref={formRef} />
          </div>
        </div>
        <div className="col">
          <div className="content-body d-flex selected-items">
            <div className="border rounded flex-grow-1 overflow-auto p-3">
              <SelectedItems />
            </div>
            <div className="my-3 d-flex justify-content-end">
              <TotalPrice />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
