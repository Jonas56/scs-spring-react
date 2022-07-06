import axios from "axios";
const BASE_URL = "/api/v1";

async function httpUpdateReview(reviewId, review, token) {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(
    BASE_URL + "/reviews/" + reviewId,
    review,
    config
  );
  return response.data;
}

async function httpUpdateHelpful(reviewId, helpful, token) {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(
    BASE_URL + "/reviews" + reviewId,
    {
      helpful,
    },
    config
  );
  return response.data;
}

async function httpDeleteReview(reviewId, token) {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(BASE_URL + "/reviews" + reviewId, config);
  return response.data;
}

export { httpUpdateReview, httpUpdateHelpful, httpDeleteReview };
