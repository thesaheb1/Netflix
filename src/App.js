import React, { useEffect } from "react";
import Header from "./Components/common/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Components/common/Footer";
import { Toaster } from "react-hot-toast";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./redux/slices/userSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // User is signed in
      if (user?.displayName) {
        dispatch(
          addUser({
            accessToken: user?.accessToken,
            email: user?.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe
    return () => unsubscribe();
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
