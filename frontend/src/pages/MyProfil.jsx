import Orders from './../components/Orders';
import Profil from './../components/Profil';
import OrderDetails from './../components/OrderDetails';
import Reviews from "./../components/Reviews";
import myProfil from "./../api/auth/myProfil";
 function MyProfil() {
    return (
        [ <Profil/>,<Orders/>,<Reviews/>,<myProfil/>]
    );
}
export default MyProfil;