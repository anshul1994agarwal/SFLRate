import logo from "../src/assets/img/logo.png";
import "./App.css";
import GetQuoteLive from "./page/GetQuoteLive";
import GetQuoteThankyou from "./page/GetQuoteThankyou";
import "./assets/scss/material-dashboard-pro-react.scss?v=1.8.0";
import "./assets/scss/material-dashboard-pro-react.scss?v=1.8.0";
//import Switch from "react-switch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/GetQuoteThankyou" component={GetQuoteThankyou} />
        <Route path="/" component={GetQuoteLive} />
      </Switch>
    </Router>
  );
}

export default App;
