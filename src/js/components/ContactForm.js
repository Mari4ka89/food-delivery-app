import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import { string, number, object } from "yup";
import { fetchLocation } from "../api/fetchLocation";
import GMap from "./GMap";
import { EMPTY_CART, RESET_SELECTED_VENDOR } from "../constants/actionTypes";
import { CENTER } from "../constants/mapLocations";

const initialValues = {
  geolocation: CENTER,
  username: "",
  email: "",
  phone: "",
  address: "",
};

const ContactForm = forwardRef(function ContactForm(props, ref) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const products = cart.map(({ productId, quantity }) => ({
    productId,
    quantity,
  }));

  function handleLocationUpdated(form, location) {
    form.setFieldValue("geolocation", location);

    fetchLocation(location).then(({ results }) => {
      form.setFieldValue("address", results[0].formatted_address);
    });
  }

  function handleAddressChange(event) {
    console.log("event.target.value", event.target.value);

    debugger;
  }

  return (
    <Formik
      innerRef={ref}
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={async (values) => {
        const {
          geolocation: { lat, lng },
        } = values;
        let response = await fetch(
          "http://fake-store-api.eu-4.evennode.com/orders",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...values,
              ...{ lat, long: lng },
              products,
            }),
          }
        );

        if (response.status === 200) {
          alert("Order was placed successfully!");
          dispatch({
            type: RESET_SELECTED_VENDOR,
          });
          dispatch({
            type: EMPTY_CART,
          });
        } else {
          alert("Try to place order later.");
          throw new Error(`${response.status} for ${response.url}`);
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
          <form className="h-100" onSubmit={handleSubmit}>
            <div className="w-100 h-50">
              <Field
                name="geolocation"
                component={GMap}
                onLocationUpdated={handleLocationUpdated}
              />
            </div>
            <div className="mb-1">
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
            <div className="mb-1">
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
            <div className="mb-1">
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
            <div className="mb-1">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <Field
                id="address"
                name="address"
                placeholder="7835 New Road"
                className="form-control"
                onBlur={handleAddressChange}
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
