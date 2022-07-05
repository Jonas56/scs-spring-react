import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "./redux/slices/authSlice";
import AppRouter from "./components/AppRouter";
import expired from "./api/config";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (expired) {
      dispatch(logout());
    }
  }, [dispatch]);

  return <AppRouter />;
};

export default App;
