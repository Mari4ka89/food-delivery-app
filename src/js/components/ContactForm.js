export default function ContactForm() {
  return (
    <form>
      <div className="mb-3">
        <label for="username" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="username" />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label for="phone" className="form-label">
          Phone
        </label>
        <input type="number" className="form-control" id="phone" />
      </div>
      <div className="mb-3">
        <label for="address" className="form-label">
          Address
        </label>
        <input type="text" className="form-control" id="address" />
      </div>
    </form>
  );
}
