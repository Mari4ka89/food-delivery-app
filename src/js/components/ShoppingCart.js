import { useRef } from "react";
import ContactForm from "./ContactForm";
import SelectedItems from "./SelectedItems";
import TotalPrice from "./TotalPrice";

export default function ShoppingCart() {
  const formRef = useRef();

  function handleSubmit() {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="border rounded p-4">
            <ContactForm ref={formRef} />
          </div>
        </div>
        <div className="col">
          <div className="border rounded p-4">
            <SelectedItems />
          </div>
        </div>
      </div>
      <footer className="my-4 d-flex justify-content-end">
        <TotalPrice />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </footer>
    </>
  );
}
