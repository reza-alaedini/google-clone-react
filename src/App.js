import React, { useState } from "react";

//Components
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-gray-200 transition-colors duration-500">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
