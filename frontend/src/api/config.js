import jwt_decode from "jwt-decode";
const USER = "loggedNoteappUser";

let expired = false;
let user = JSON.parse(localStorage.getItem(USER));
if (user) {
  let decodedToken = jwt_decode(user.accessToken);
  let currentDate = new Date();
  // JWT exp is in seconds
  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    expired = true;
  }
}

export default expired;
