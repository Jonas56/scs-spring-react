import axios from "axios";
const BASE_URL = "/api/v1";

async function httpGetUserProfile(token) {
  const config = {
    headers: { Authorization: "Bearer " + token },
  };
  const response = await axios.get(BASE_URL + "/users/me", config);
  return response.data;
}

async function httpUpdateProfile(user, token) {
  const config = {
    headers: { Authorization: "Bearer " + token },
  };
  const response = await axios.put(BASE_URL + "/user/edit", user, config);
  return response;
}

async function htppUpdatePassword(credentials, token) {
  const config = {
    headers: { Authorization: "Bearer " + token },
  };
  const response = await axios.put(
    BASE_URL + "/user/edit-password",
    credentials,
    config
  );
  return response.data;
}

export { httpGetUserProfile, httpUpdateProfile, htppUpdatePassword };
