import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const center = { lat: 49.842957, lng: 24.031111 };
const locations = {
  McDonalds: { lat: 49.836403147340874, lng: 24.024587805040753 },
  KFC: { lat: 49.82225954126067, lng: 23.96787104770506 },
  BurgerKING: { lat: 49.964986974857794, lng: 19.87070522351074 },
};

export default function GMap() {
  const selectedVendor = useSelector((state) => state.selectedVendor);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBdTWFXP5NEDg9O6_Mp9HeIXJ9IYBuZXMY",
  });

  return (
    <div className="GMap w-100 h-100">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="h-100 w-100"
          center={center}
          zoom={10}
        >
          <MarkerF
            position={center}
            draggable={true}
            icon={
              "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            }
          />
          <MarkerF position={locations[selectedVendor]} />
        </GoogleMap>
      )}
    </div>
  );
}
