import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//styles
import "./App.css";

import Listings from "./pages/listings/Listings";
import Form from "./pages/form/Form";
import Login from "./pages/login/Login";
import Ficha from "./pages/ficha/Ficha";
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
            <Routes>
              <Route
                path="/"
                element={user ? <Form /> : <Navigate to="/login" />}
              />
              <Route
                path="/form"
                element={user ? <Form /> : <Navigate to="/login" />}
              />
              <Route
                path="/success"
                element={user ? <Success /> : <Navigate to="/login" />}
              />
              <Route
                path="/fichas"
                element={user ? <Listings /> : <Navigate to="/login" />}
              />
              <Route
                path="/fichas/:id"
                element={user ? <Ficha /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={user ? <Navigate to="/form" /> : <Login />}
              />
            </Routes>
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
            <Routes>
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
            </Routes>
          </div>
          {user && <AllUsers />}
        </BrowserRouter>
      )}
    </div>


*/
