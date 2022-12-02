import { Typography } from "@material-tailwind/react";

// STRAVA
import { cleanUpAuthToken, getUserData } from "../services/function";

import { AuthGetter } from "../services/stravaAxios";

import { useEffect } from "react";

import {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
} from "../services/environmentVariables";

export function Strava() {
  useEffect(() => {
    async function authenticate() {
      const code = await cleanUpAuthToken(window.location.search, 1, 5);
      console.log("🚀 ~ file: strava.js:14 ~ authenticate ~ code", code);
      const tokens = await AuthGetter(
        code,
        STRAVA_CLIENT_ID,
        STRAVA_CLIENT_SECRET,
        "https://www.strava.com/oauth/token"
      );
    }

    authenticate();
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
