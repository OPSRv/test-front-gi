import axios from "axios";

import {
  URL_BACKEND,
  CLIENT_ID,
  CLIENT_SECRET,
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
  //? STRAVA
  STRAVA_REDIRECT_URI,
  STRAVA_RESPONSE_TYPE,
  STRAVA_APPROVAL_PROMPT,
  STRAVA_SCOPE,
  //? DEXCOM
  DEXCOM_CLIENT_ID,
  DEXCOM_CLIENT_SECRET,
  DEXCOM_REDIRECT_URI,
} from "./variables";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://127.0.0.1:8000";
const auth_token = localStorage.getItem("auth_token") || null;

console.log(auth_token);
const server = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const api = axios.create({
  baseURL: "https://sandbox-api.dexcom.com",
  withCredentials: true,
  headers: { "content-type": "application/x-www-form-urlencoded" },
});

export const createUser = async (username, email, password) => {
  let sendNewUser = await server.post(`/auth/users/`, {
    email: email,
    username: username,
    password: password,
  });
  let userInfo = sendNewUser.data;
  let getToken = await server.post("/auth-token/token/login/", {
    password: password,
    username: userInfo.email,
  });
  let auth_token = getToken.data.auth_token;
  localStorage.setItem("auth_token", JSON.stringify(auth_token));
};

export const AuthStrava = async (
  code,
  client_id,
  client_secret,
  urlGetToken,
  redirect_uri
) => {
  let data = await axios.post(`${urlGetToken}`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    client_id: client_id,
    client_secret: client_secret,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirect_uri,
  });
  let tokens = await data.data;
  console.log("🚀 ~ file: axios.js:82 ~ tokens", tokens);
};

export const AuthDexCom = async (
  client_id,
  client_secret,
  code,
  redirect_uri
) => {
  let data = await api.post(`/v2/oauth2/token`, {
    headers: { "Content-type": "application/x-www-form-urlencoded" },
    client_id: client_id,
    client_secret: client_secret,
    code: code,
    grant_type: "authorization_code",
    redirect_uri: redirect_uri,
  });

  let tokens = data.data;
  console.log("🚀 ~ file: axios.js:82 ~ tokensDex", tokens);
};

// useEffect(() => {
//   async function authenticate() {
//     const code = await cleanUpAuthToken(window.location.search, 1, 5);
//     console.log("🚀 ~ file: strava.js:14 ~ authenticate ~ code", code);

//   }

//   authenticate();
// }, []);

// export function createUser(username, email, password) {
//   console.log("createUser");
//   axios
//     .post(`/auth/users/`, {
//       email: email,
//       username: username,
//       password: password,
//     })
//     .then((res) => {
//       console.log(res.data, res.status);
//     })
//     .catch(function (error) {
//       if (error.res) {
//         console.log(error.res.data, error.res.status);
//       }
//     });
// }

// export function createUser(username, email, password) {
//   console.log("createUser");
//   axios
//     .post(`${URL_BACKEND}/api-auth/create/`, {
//       username: username,
//       email: email,
//       password: password,
//     })
//     .then((res) => {
//       console.log(res.data);
//       console.log(res.status);
//     })
//     .catch(function (error) {
//       if (error.res) {
//         console.log(error.res.data);
//         console.log(error.res.status);
//       }
//     });
// }

export function refreshToken() {
  console.log("refreshToken");
  axios
    .post(`${URL_BACKEND}/api-auth/token/`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "refresh_token",
      // refresh_token: STRAVA_TOKEN.refresh_token,
    })
    .then((res) => {
      console.log(res.data);
      console.log(res.status);
    })
    .catch(function (error) {
      if (error.res) {
        console.log(error.res.data);
        console.log(error.res.status);
      }
    });
}

export function getCurrentUser() {
  console.log("getCurrentUser");
  axios
    .get(`${URL_BACKEND}/api-auth/currentUser/`, {
      headers: {
        // Authorization: `Bearer ${STRAVA_TOKEN.access_token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      console.log(res.status);
    })
    .catch(function (error) {
      if (error.res) {
        console.log(error.res.data);
        console.log(error.res.status);
      }
    });
}

export function getAllUsers() {
  console.log("getAllUsers");
  axios
    .get(`${URL_BACKEND}/api-auth/all/`)
    .then((res) => {
      console.log(res.data);
      console.log(res.status);
    })
    .catch(function (error) {
      if (error.res) {
        console.log(error.res.data);
        console.log(error.res.status);
      }
    });
}

export function getToken(username, password) {
  console.log("getToken");
  axios
    .post(`${URL_BACKEND}/api-auth/token/`, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "password",
      username: username,
      password: password,
    })
    .then((res) => {
      console.log(res.data);
      console.log(res.status);
    })
    .catch(function (error) {
      if (error.res) {
        console.log(error.res.data);
        console.log(error.res.status);
      }
    });
}

// export function googleLogin(accessToken) {
//   axios
//     .post(`${URL_BACKEND}/api-auth/convert-token`, {
//       token: accessToken,
//       backend: "google-oauth2",
//       grant_type: "convert_token",
//       client_id: "your client id",
//       client_secret: "your client secret",
//     })
//     .then((res) => {
//       // Save somewhere these access and refresh tokens
//       console.log(res.data);
//     });
// }

// export function stravaLogin(accessToken, user) {
//   console.log("stravaLogin");
//   console.log(accessToken, "STRAVA - accessToken");
//   axios
//     .post(`${URL_BACKEND}/api-auth/convert-token`, {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       username: user.firstname,
//       email: user.email,
//       token: accessToken,
//       backend: "strava",
//       grant_type: "convert_token",
//       client_id: CLIENT_ID,
//       client_secret: CLIENT_SECRET,
//     })
//     .then((res) => {
//       // Save somewhere these access and refresh tokens
//       console.log(res.data);
//     });
// }
