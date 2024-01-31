import React, { useEffect } from "react";
import Header from "./Components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./redux/slices/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser(user));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
