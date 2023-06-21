import { forwardRef, FocusEvent } from "react";
import { Formik, Field, FormikProps, FormikHelpers } from "formik";
import { string, number, object } from "yup";
import { fetchLocation } from "../api/fetchLocation";
import { placeOrder } from "../api/placeOrder";
import { useAppDispatch, useAppSelector } from "../hooks";
import GMap, { Coordinates } from "./GMap";
import { cartDropped, cart } from "../reducers/cartSlice";
import { vendorReset } from "../reducers/selectedVendorSlice";
import { CENTER } from "../constants/mapLocations";
import { API_KEY } from "../constants/apiKey";

export type FormValues = {
  geolocation: Coordinates;
  username: string;
  email: string;
  phone: string;
  address: string;
};

const initialValues = {
  geolocation: CENTER,
  username: "",
  email: "",
  phone: "",
  address: "",
};
const geoApiUrl = "https://maps.googleapis.com/maps/api/geocode/json";

const ContactForm = forwardRef(function ContactForm(_props, ref) {
  const dispatch = useAppDispatch();
  const savedCart = useAppSelector(cart);
  const products = savedCart.map(({ productId, quantity }) => ({
    productId,
    quantity,
  }));

  function handleLocationUpdated(form: FormikProps<string>, { lat, lng }) {
    const url = `${geoApiUrl}?latlng=${lat},${lng}&key=${API_KEY}`;

    form.setFieldValue("geolocation", { lat, lng });

    fetchLocation(url)
      .then(({ results }) => {
        form.setFieldValue("address", results[0].formatted_address);
      })
      .catch(() => alert("Please set coordinates correctly."));
  }

  function handleAddressChange(
    { target: { value } }: FocusEvent<HTMLInputElement>,
    form: FormikProps<string>
  ) {
    if (value) {
      let urlQuery = value
        .replace(/,\s(\d+)/, " $1")
        .replace(/,\s\d{5}$/, "")
        .replace(/\s/g, "+");
      const url = `${geoApiUrl}?address=${urlQuery}&key=${API_KEY}`;

      fetchLocation(url)
        .then(({ results }) => {
          form.setFieldValue("geolocation", results[0].geometry.location);
        })
        .catch(() => alert("Please enter address correctly."));
    }
  }

  function handleSubmit(
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) {
    const {
      geolocation: { lat, lng },
    } = values;

    placeOrder({
      ...values,
      ...{ lat, long: lng },
      products,
    })
      .then(() => {
        alert("Order was placed successfully!");
        dispatch(vendorReset());
        dispatch(cartDropped());
        actions.resetForm({
          values: initialValues,
        });
      })
      .catch(() => alert("Try to place order later."));
  }

  return (
    <Formik<FormValues>
      // @ts-ignore
      innerRef={ref}
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validationSchema={object().shape({
        username: string().required("Required"),
        email: string().email().required("Required"),
        phone: number().required("Required"),
        address: string().required("Required"),
      })}
    >
      {(props) => {
        const { touched, errors, handleSubmit } = props;
        return (
          <form className="h-100" onSubmit={handleSubmit}>
            <div className="w-100 h-50">
              <Field
                name="geolocation"
                component={GMap}
                handleLocationUpdate={handleLocationUpdated}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="username" className="form-label">
                Name
              </label>
              <Field
                id="username"
                name="username"
                placeholder="John Doe"
                className="form-control"
              />
              {errors.username && touched.username && (
                <div className="validation-error">{errors.username}</div>
              )}
            </div>
            <div className="mb-1">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                id="email"
                name="email"
                placeholder="jdoe@gmail.com"
                className="form-control"
              />
              {errors.email && touched.email && (
                <div className="validation-error">{errors.email}</div>
              )}
            </div>
            <div className="mb-1">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <Field
                id="phone"
                name="phone"
                placeholder="0958761234"
                className="form-control"
              />
              {errors.phone && touched.phone && (
                <div className="validation-error">{errors.phone}</div>
              )}
            </div>
            <div className="mb-1">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <Field name="address">
                {({ field, form }) => (
                  <input
                    type="text"
                    {...field}
                    id="address"
                    className="form-control"
                    onBlur={(e: FocusEvent<HTMLInputElement>) =>
                      handleAddressChange(e, form)
                    }
                    placeholder="Hazova St, 9, L'viv, L'vivs'ka oblast, Ukraine"
                  />
                )}
              </Field>
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
