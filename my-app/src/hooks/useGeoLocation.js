import { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    coordinates: { currentLat: "", currentLon: "" },
  });

  const onSuccess = (location) => {
    setLocation({
      coordinates: {
        currentLat: location.coords.latitude,
        currentLon: location.coords.longitude,
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
