import { Typography } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { AuthStrava } from "../services/axios";
import { useEffect, useCallback } from "react";
import { cleanUpAuthToken } from "../services/function";
import { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } from "../services/variables";

export function Strava() {
  let location = useLocation();

  const fetchMyAPI = useCallback(async () => {
    const code = await cleanUpAuthToken(location.search, 1, 5);
    if (code) {
      await AuthStrava(
        code,
        STRAVA_CLIENT_ID,
        STRAVA_CLIENT_SECRET,
        "https://www.strava.com/oauth/token"
      ).catch((e) => {
        console.log(e);
      });
    }
  }, [location]);

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <Typography
      variant="h1"
      className="text-5xl md:text-7xl xl:text-9xl"
      color="blue-gray"
      textGradient
    >
      StravaRedirect
    </Typography>
  );
}
