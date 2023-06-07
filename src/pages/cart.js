import { useRef } from "react";
import ContactForm from "../js/components/ContactForm";
import SelectedItems from "../js/components/SelectedItems";
import SubmitOrder from "../js/components/SubmitOrder";
// import "../../css/ShoppingCart.css";

export default function CartPage() {
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
            <ContactForm ref={formRef} />
          </div>
        </div>
        <div className="col">
          <div className="content-body d-flex selected-items">
            <div className="border rounded flex-grow-1 overflow-auto p-3">
              <SelectedItems />
            </div>
            <SubmitOrder onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
