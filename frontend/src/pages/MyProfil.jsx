import Orders from './../components/Orders';
import Profil from './../components/Profil';
import OrderDetails from './../components/OrderDetails';
import Reviews from "./../components/Reviews";
import httpProfil from "../api/MyProfil";
import AddImage from '../components/Add-Image';
 function MyProfil() {
    return (
        [ <AddImage/>,<Profil/>,<Orders/>,<Reviews/>,<myProfil/>]
    );
}
export default MyProfil;