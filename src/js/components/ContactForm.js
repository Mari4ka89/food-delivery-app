export default function ContactForm() {
  return (
    <form>
      <div class="mb-3">
        <label for="username" class="form-label">
          Name
        </label>
        <input type="text" class="form-control" id="username" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">
          Email
        </label>
        <input type="email" class="form-control" id="email" />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">
          Phone
        </label>
        <input type="number" class="form-control" id="phone" />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">
          Address
        </label>
        <input type="text" class="form-control" id="address" />
      </div>
    </form>
  );
}
