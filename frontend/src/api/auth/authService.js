import axios from "axios";
const BASE_URL = "/api/v1";

async function httpLoginUser(credentials) {
  const response = await axios.post(BASE_URL + "/login", credentials);
  console.log(response);
  return response.data;
}

export { httpLoginUser };
