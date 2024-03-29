import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h1 className="text-center">loading.......</h1>;
  }
  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  } else {
    return children;
  }
};

export default PrivateRoute;
