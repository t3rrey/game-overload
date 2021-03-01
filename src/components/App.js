import React from "react";
import Navbar from "./Navbar";
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import RouteError from './RouteError';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import PublicRoute from './routes/PublicRoute';
// import Question from "./Question";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <PublicRoute exact={true} path='/' component={HomePage} />
          <PublicRoute exact={true} path='/signin' component={Signin} />
          <PublicRoute exact={true} path='/signup' component={Signup} />
          <PublicRoute path='*' component={RouteError} />
        </Switch>

      </Router>
      {/* <Question /> */}
    </div>
  );
};

export default App;
