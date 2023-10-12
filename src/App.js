import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//styles
import "./App.css";

import Listings from "./pages/listings/Listings";
import Form from "./pages/form/Form";
import Form2 from "./pages/form2/Form2";
import Login from "./pages/login/Login";
import Ficha from "./pages/ficha/Ficha";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import Success from "./pages/success/Success";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/form2" />}
                {user && <Form2 />}
              </Route>
              <Route path="/form2">
                {!user && <Redirect to="/login" />}
                {user && <Form2 />}
              </Route>

              <Route path="/success">
                {!user && <Redirect to="/login" />}
                {user && <Success />}
              </Route>
              <Route exact path="/fichas">
                {!user && <Redirect to="/login" />}
                {user && <Listings />}
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
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

/*
ESTRUTURA
<div App">
      {authIsReady && (
        <BrowserRouter>
    <div container">
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
              MUDAR PARA CADASTRAR ALGO <Route path="/signup">
                {user && <Redirect to="/" />}
                {!user && <Signup />}
              </Route>
            </Switch>
          </div>
          {user && <AllUsers />}
        </BrowserRouter>
      )}
    </div>


*/
