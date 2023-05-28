import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";
import { CENTER, VENDORS_LOCATIONS } from "../constants/mapLocations";
import { USER_LOCATION_UPDATED } from "../constants/actionTypes";

export default function GMap() {
  const selectedVendor = useSelector((state) => state.selectedVendor);
  const markerLocation = useSelector((state) => state.mapLocation);
  const dispatch = useDispatch();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBdTWFXP5NEDg9O6_Mp9HeIXJ9IYBuZXMY",
  });

  function onDragEnd({ latLng }) {
    dispatch({
      type: USER_LOCATION_UPDATED,
      location: {
        lat: latLng.lat(),
        lng: latLng.lng(),
      },
    });
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
            onDragEnd={onDragEnd}
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