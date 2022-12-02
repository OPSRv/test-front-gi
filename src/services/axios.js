import axios from "axios";
import {
  URL_BACKEND,
  CLIENT_ID,
  CLIENT_SECRET,
  TOKEN,
} from "./environmentVariables";

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
      refresh_token: TOKEN.refresh_token,
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
        Authorization: `Bearer ${TOKEN.access_token}`,
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

export function createUser(username, email, password) {
  console.log("createUser");
  axios
    .post(`${URL_BACKEND}/api-auth/create/`, {
      username: username,
      email: email,
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
