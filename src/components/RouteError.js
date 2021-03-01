import React from "react";
import { useLocation, Link } from "react-router-dom";

const RouteError = () => {
  let location = useLocation();

  return (
    <div>
      <h1>
        No match for <code>{location.pathname}</code>
      </h1>
      <h4>
        redirect to <Link to="/">Home</Link>
      </h4>
    </div>
  );
};

export default RouteError;
