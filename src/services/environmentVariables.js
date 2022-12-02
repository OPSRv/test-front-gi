const URL_BACKEND = "http://127.0.0.1:8000";
const CLIENT_ID = "wffDy83GnDuTpSlZr1NY3cPZyw0ycXKFKSopkQKr";
const CLIENT_SECRET =
  "5uZDP48ObOs4xl3I986MI5WV9FAacuBwbX3RwsZFc2QKejSvnOQgEZBiPzJITx1IRTRZZDjugqaI0TYMtt54CH6XoAqEyBFWyPNSt07bDjJX7vRZ05Wfp82t3h8A38I8";

const TOKEN = {
  access_token: "662896a26817d13612ee013f1feba3dede5b1908",
  expires_in: 36000,
  token_type: "Bearer",
  scope: "read write",
  refresh_token: "eca6c3e842f2ef9cef317b08a296c367260d926a",
};
//! STRAVA
export const STRAVA_CLIENT_ID = "94750";
export const STRAVA_CLIENT_SECRET = "8119ea99fcae37f3cca4dca718154bed20945248";
export const STRAVA_REDIRECT_URI = "http://127.0.0.1:3000/strava-redirect";
export const STRAVA_RESPONSE_TYPE = "code";
export const STRAVA_APPROVAL_PROMPT = "auto";
export const STRAVA_SCOPE = "activity:read";

//! DEXCOM
export const DEXCOM_CLIENT_ID = "vknkCV4MZjhx7BLm308ZsrEsMcO6pE2F";
export const DEXCOM_CLIENT_SECRET = "D0y7QCyqXcSLohss";
export const DEXCOM_REDIRECT_URI = "http://127.0.0.1:3000/dexcom-redirect";

const handleLoginStrava = () => {
  console.log(
    "🚀 ~ file: environmentVariables.js:21 ~ handleLoginStrava ~ handleLoginStrava",
    handleLoginStrava
  );
  window.location = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&redirect_uri=${STRAVA_REDIRECT_URI}&response_type=${STRAVA_RESPONSE_TYPE}&approval_prompt=${STRAVA_APPROVAL_PROMPT}&scope=${STRAVA_SCOPE}`;
};

const handleLoginDexCom = () => {
  console.log(
    "🚀 ~ file: environmentVariables.js:27 ~ handleLoginDexCom ~ handleLoginDexCom",
    handleLoginDexCom
  );
  window.location = `https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=${DEXCOM_CLIENT_ID}&redirect_uri=${DEXCOM_REDIRECT_URI}&response_type=code&scope=offline_access`;
};

export {
  URL_BACKEND,
  CLIENT_ID,
  CLIENT_SECRET,
  TOKEN,
  handleLoginStrava,
  handleLoginDexCom,
};
