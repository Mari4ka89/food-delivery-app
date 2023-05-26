import ContactForm from "./ContactForm";
import SelectedItems from "./SelectedItems";
import TotalPrice from "./TotalPrice";

export default function ShoppingCart() {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="border rounded p-4">
            <ContactForm />
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </footer>
    </>
  );
}
