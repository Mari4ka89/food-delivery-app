import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";
import { CENTER, VENDORS_LOCATIONS } from "../constants/mapLocations";
import { API_KEY } from "../constants/apiKey";
import { updateUserLocation } from "../reducers/mapLocationSlice";

export default function GMap() {
  const selectedVendor = useSelector((state) => state.selectedVendor);
  const markerLocation = useSelector((state) => state.mapLocation.value);
  const dispatch = useDispatch();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  function handleMarkerDragEnd({ latLng }) {
    dispatch(updateUserLocation({ lat: latLng.lat(), lng: latLng.lng() }));
  }

  return (
    <div className="GMap w-100 h-100">
      {isLoaded ? (
        <GoogleMap
          mapContainerClassName="h-100 w-100"
          center={CENTER}
          zoom={10}
        >
          <MarkerF
            position={markerLocation}
            draggable={true}
            onDragEnd={handleMarkerDragEnd}
            icon={
              "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            }
          />
          {selectedVendor ? (
            <MarkerF position={VENDORS_LOCATIONS[selectedVendor]} />
          ) : null}
        </GoogleMap>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
