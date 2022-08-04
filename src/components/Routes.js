import React from "react";
import {
  Routes as Router,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Results from "./Results";

const Routes = () => {
  const location = useLocation();
  return (
    <div className="p-4">
      <Router>
        {["/search", "/image", "/news", "/videos"].map((path) => (
          <Route key={path} path={path} element={<Results />} />
        ))}
      </Router>
      {location.pathname === "/" && <Navigate to="/search" replace={true} />}
    </div>
  );
};

export default Routes;
