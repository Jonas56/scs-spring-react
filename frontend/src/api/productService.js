import axios from "axios";
const BASE_URL = "/api/v1";

async function httpGetAllProducts() {
  const response = await axios.get(BASE_URL + "/products");
  return response.data;
}

async function httpGetAllProductsByName(name) {
  const response = await axios.get(BASE_URL + "/products?name=" + name);
  return response.data;
}

async function httpGetProduct(productId) {
  const response = await axios.get(BASE_URL + "/products/" + productId);
  return response.data;
}

async function httpAddProduct(product, token) {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(BASE_URL + "/products/", product, config);
  return response.data;
}

async function httpAddReview(productId, review, token) {
  const config = {
    headers: { Authorization: "Bearer " + token },
  };
  const response = await axios.post(
    BASE_URL + "/products/" + productId + "/reviews",
    review,
    config
  );
  return response.data;
}

export {
  httpAddProduct,
  httpGetAllProducts,
  httpAddReview,
  httpGetProduct,
  httpGetAllProductsByName,
};
