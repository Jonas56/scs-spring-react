import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "./redux/slices/authSlice";
import AppRouter from "./components/AppRouter";
import expired from "./api/config";

const App = () => {
  const dispatch = useDispatch();

<<<<<<< HEAD
  useEffect(() => {
    if (expired) {
      dispatch(logout());
    }
  }, [dispatch]);
=======
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
>>>>>>> 3d674b8 (Website Content added #42)

  return <AppRouter />;
};

export default App;
