import axios from "axios";
const BASE_URL = "/api/v1";
async function httpAddImage(image) {
  console.log(image);
  const response = await axios.post(BASE_URL + "/uploadFile", image);
  return response.data;
}

async function httpGetImage(token) {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(BASE_URL + "/downloadFile", config);
  return response.data;
}

export { httpAddImage, httpGetImage };
