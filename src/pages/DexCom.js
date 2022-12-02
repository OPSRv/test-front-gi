import { Typography } from "@material-tailwind/react";

// STRAVA
import { cleanUpAuthToken, getUserData } from "../services/function";

import { AuthGetter } from "../services/stravaAxios";

import { useEffect } from "react";
import {
  DEXCOM_CLIENT_ID,
  DEXCOM_CLIENT_SECRET,
} from "../services/environmentVariables";
export function DexCom() {
  useEffect(() => {
    async function authenticate() {
      const code = await cleanUpAuthToken(window.location.search, 0, 6);
      const tokens = await AuthGetter(
        code,
        DEXCOM_CLIENT_ID,
        DEXCOM_CLIENT_SECRET,
        "https://sandbox-api.dexcom.com/v2/oauth2/token",
        "http://127.0.0.1:3000/dexcom-redirect"
      );
      console.log("🚀 ~ file: DexCom.js:23 ~ authenticate ~ tokens", tokens);
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
      DexCome Redirect
    </Typography>
  );
}
