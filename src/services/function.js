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

export const cleanUpAuthToken = (str, split, slice) => {
  return str.split("&")[split].slice(slice);
};
export const handleLoginStrava = (
  client_id,
  redirect_url,
  response_type,
  approval_prompt,
  scope
) => {
  window.location = `https://www.strava.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_url}&response_type=${response_type}&approval_prompt=${approval_prompt}&scope=${scope}`;
};

export const handleLoginDexCom = (client_id, redirect_url) => {
  window.location = `https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=${client_id}&redirect_uri=${redirect_url}&response_type=code&scope=offline_access`;
};

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

// export const AuthStrava = async (authToken) => {
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
