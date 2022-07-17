import axios from "axios";
const BASE_URL = "/api/v1";

async function httpGetAllOrders(token) {
  const config = {
    headers: { Authorization: "Bearer " + token },
  };
  const response = await axios.get(BASE_URL + "/orders", config);
  return response.data;
}

async function httpGetOrderDetails(token,orderId) {
  const config = {
    headers: { Authorization: "Bearer " + token },
  };
  const response = await axios.get(BASE_URL + "/orders/details/"+orderId, config);
  return response.data;
}

async function httpAddOrder(order, token) {
  const config = {
    headers: { Authorization: "Bearer " + token },
  };
  const response = await axios.post(BASE_URL + "/orders", order, config);
  return response.data;
}

async function httpUpdateOrder(orderId, order, token) {
  const config = {
    headers: { Authorization: "Bearer " + token },
  };
  const response = await axios.put(
    BASE_URL + "/orders/" + orderId,
    order,
    config
  );
  return response.data;
}

async function httpDeleteOrder(orderId, token) {
  const config = {
    headers: { Authorization: "Bearer " + token },
  };
  const response = await axios.delete(BASE_URL + "/orders/" + orderId, config);
  return response.data;
}

export { httpAddOrder, httpGetAllOrders, httpUpdateOrder, httpDeleteOrder , httpGetOrderDetails};
