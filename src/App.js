import { BrowserRouter, Route, Switch } from "react-router-dom";

//styles
import "./App.css";

import Listings from "./pages/listings/Listings";
import Form from "./pages/form/Form";
import Login from "./pages/login/Login";
import Patient from "./pages/patient/Patient";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Listings />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/patients/:id">
              <Patient />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
