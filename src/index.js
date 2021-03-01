import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  rootElement
);
