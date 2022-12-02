import axios from "axios";

import { CLIENT_ID, CLIENT_SECRET } from "./environmentVariables";

// export const getParamValues = (url) => {
//   return url
//     .slice(1)
//     .split("&")
//     .reduce((prev, curr) => {
//       const [title, value] = curr.split("=");
//       prev[title] = value;
//       return prev;
//     }, {});
// };

export const cleanUpAuthToken = (str, split, slice) => {
  return str.split("&")[split].slice(slice);
};

// export const AuthGetter = async (authToken) => {
//   try {
//     const response = await axios.post(
//       `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${authToken}&grant_type=authorization_code`
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getUserData = async (userID, accessToken) => {
//   try {
//     const response = await axios.get(
//       `https://www.strava.com/api/v3/athletes/${userID}/stats`,
//       { headers: { Authorization: `Bearer ${accessToken}` } }
//     );
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
