import React, { useState, useEffect } from "react";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    toast("Please turn your VPN ON ! 🚫", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }, []);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-gray-200 transition-colors duration-500">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
