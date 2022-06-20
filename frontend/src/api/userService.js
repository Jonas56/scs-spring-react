import axios from "axios";
const BASE_URL = "/api/v1";

async function httpGetProfile(credentials, token) {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(BASE_URL + "/users/me", config);
  return response.data;
}

async function httpUpdateProfile(user, token) {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(BASE_URL + "/users/edit", user, config);
  return response.data;
}

export { httpGetProfile, httpUpdateProfile };
