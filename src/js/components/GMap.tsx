import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useAppSelector } from "../hooks";
import { selectedVendor } from "../reducers/selectedVendorSlice";
import { CENTER, VENDORS_LOCATIONS } from "../constants/mapLocations";
import Spinner from "./Spinner";
import { API_KEY } from "../constants/api";

export type Coordinates = {
  lat: number;
  lng: number;
};

export default function GMap({ field: { value }, form, handleLocationUpdate }) {
  const savedSelectedVendor = useAppSelector(selectedVendor);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  function handleMarkerDragEnd({ latLng }) {
    handleLocationUpdate(form, { lat: latLng.lat(), lng: latLng.lng() });
  }

  return (
    <div className="GMap w-100 h-100">
      {isLoaded ? (
        <GoogleMap
          mapContainerClassName="h-100 w-100"
          center={CENTER}
          zoom={12}
        >
          <MarkerF
            position={value}
            draggable={true}
            onDragEnd={handleMarkerDragEnd}
            icon={
              "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            }
          />
          {savedSelectedVendor ? (
            <MarkerF position={VENDORS_LOCATIONS[savedSelectedVendor]} />
          ) : null}
        </GoogleMap>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
