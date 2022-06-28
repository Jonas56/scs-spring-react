import axios from "axios";
const BASE_URL = "api/v1";

async function httpProfil() {
  const response = await axios.get(BASE_URL + "/users/me");
  console.log(response);
  return response.data;
}
export default httpProfil;