import { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    coordinates: { userLat: "", userLon: "" },
  });

  const onSuccess = (location) => {
    setLocation({
      coordinates: {
        userLat: location.coords.latitude,
        userLon: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
