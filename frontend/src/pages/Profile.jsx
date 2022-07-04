import Orders from "../components/profile/Orders";
import Profil from "./../components/Profil";
import Reviews from "./../components/Reviews";
import AddImage from "../components/profile/ProfileImage";
function MyProfil() {
  return [<AddImage />, <Profil />, <Orders />, <Reviews />];
}
export default MyProfil;
