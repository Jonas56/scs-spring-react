import axios from "axios";
const BASE_URL = "/api/v1";

async function httpLoginUser(credentials) {
  const response = await axios.post(BASE_URL + "/login", credentials);
  if (response.data) {
    localStorage.setItem("loggedNoteappUser", JSON.stringify(response.data));
  }
  return response.data;
}

async function httpRegisterUser(credentials) {
  const { email, password, firstName, lastName, confirmPassword, username } =
    credentials;
  if (password !== confirmPassword) {
    throw new Error("Passwords do not match. Please try again.");
  }
  const name = firstName + " " + lastName;

  const response = await axios.post(BASE_URL + "/register", {
    name,
    username,
    email,
    password,
  });
  return response.data;
}

export { httpLoginUser, httpRegisterUser };
