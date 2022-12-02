import axios from "axios";
import { URL_BACKEND, CLIENT_ID, CLIENT_SECRET } from "./environmentVariables";

import { getCurrentUser } from "./axios";

export function stravaLogin(accessToken, user) {
  console.log("stravaLogin");
  console.log(accessToken, "STRAVA - accessToken");
  axios
    .post(`${URL_BACKEND}/api-auth/convert-token`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      username: user.firstname,
      email: user.email,
      token: accessToken,
      backend: "strava",
      grant_type: "convert_token",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    })
    .then((res) => {
      // Save somewhere these access and refresh tokens
      console.log(res.data);
    });
}

export function AuthGetter(
  code,
  client_id,
  client_secret,
  urlGetToken,
  redirect_uri = ""
) {
  axios
    .post(`${urlGetToken}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      client_id: client_id,
      client_secret: client_secret,
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirect_uri,
    })
    .then((res) => {
      // console.log(res.data);
      // console.log(res.status);
      const token = res.data;
      console.log("🚀 ~ file: stravaAxios.js:51 ~ .then ~ token", token);
      // const user = getCurrentUser();
      // stravaLogin(token.access_token, user);
    })
    .catch(function (error) {
      if (error.res) {
        console.log("🚀 ~ file: stravaAxios.js:57 ~ error.res", error.res);
        // console.log(error);
        // console.log(error.res.data);
        // console.log(error.res.status);
      }
    });
}
