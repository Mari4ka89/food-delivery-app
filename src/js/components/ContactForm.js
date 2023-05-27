import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { string, number, object } from "yup";
import { EMPTY_CART, RESET_SELECTED_VENDOR } from "../constants/actionTypes";

const ContactForm = forwardRef(function ContactForm(props, ref) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { lat, lng } = useSelector((state) => state.mapLocation);
  const geolocation = { lat, long: lng };
  const products = cart.map(({ productId, quantity }) => ({
    productId,
    quantity,
  }));

  return (
    <Formik
      innerRef={ref}
      initialValues={{
        username: "",
        email: "",
        phone: "",
        address: "",
      }}
      onSubmit={async (values) => {
        try {
          await fetch("http://fake-store-api.eu-4.evennode.com/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...values, products, geolocation }),
          });

          alert("Order was placed successfully!");
          dispatch({
            type: RESET_SELECTED_VENDOR,
          });
          dispatch({
            type: EMPTY_CART,
          });
        } catch (err) {
          alert("Please try to place order later.");
        }
      }}
      validationSchema={object().shape({
        username: string().required("Required"),
        email: string().email().required("Required"),
        phone: number().required("Required"),
        address: string().required("Required"),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="John Doe"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username && (
                <div className="validation-error">{errors.username}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jdoe@gmail.com"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className="validation-error">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="0958761234"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone && (
                <div className="validation-error">{errors.phone}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="7835 New R oad"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              {errors.address && touched.address && (
                <div className="validation-error">{errors.address}</div>
              )}
            </div>
          </form>
        );
      }}
    </Formik>
  );
});

export default ContactForm;
