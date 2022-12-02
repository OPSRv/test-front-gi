import { Typography } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { AuthDexCom } from "../services/axios";
import { useEffect, useCallback } from "react";
import { cleanUpAuthToken } from "../services/function";
import {
  DEXCOM_CLIENT_ID,
  DEXCOM_CLIENT_SECRET,
  DEXCOM_REDIRECT_URI,
} from "../services/variables";

export function DexCom() {
  let location = useLocation();
  console.log("location: ", location);

  const fetchMyAPI = useCallback(async () => {
    const code = await cleanUpAuthToken(location.search, 0, 6);
    console.log("code: ", code);

    if (code) {
      await AuthDexCom(
        DEXCOM_CLIENT_ID,
        DEXCOM_CLIENT_SECRET,
        code,
        DEXCOM_REDIRECT_URI
      ).catch((e) => {
        console.log(e, "e");
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
      DexCome Redirect
    </Typography>
  );
}
