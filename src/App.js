import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//styles
import "./App.css";

import Listings from "./pages/listings/Listings";
import Form from "./pages/form/Form";
import Login from "./pages/login/Login";
import Ficha from "./pages/ficha/Ficha";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AllUsers from "./components/AllUsers";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Listings />}
              </Route>
              <Route path="/form">
                {!user && <Redirect to="/login" />}
                {user && <Form />}
              </Route>
              <Route path="/fichas/:id">
                {!user && <Redirect to="/login" />}
                {user && <Ficha />}
              </Route>
              <Route path="/login">
                {user && <Redirect to="/" />}
                {!user && <Login />}
              </Route>
              <Route path="/signup">
                {user && <Redirect to="/" />}
                {!user && <Signup />}
              </Route>
            </Switch>
          </div>
          {user && <AllUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
