import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import "./App.css";

import Listings from "./pages/listings/Listings";
import Form from "./pages/form/Form";
import Login from "./pages/login/Login";
import Ficha from "./pages/ficha/Ficha";
import Navbar from "./components/Navbar";
import Success from "./pages/success/Success";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={user ? <Navigate to="/form" /> : <Navigate to="login" />} />
              <Route path="/login" element={user ? <Navigate to="/form" /> : <Login />} />
              <Route
                path="/fichas"
                element={
                  <ProtectedRoute allowedRoles="admin">
                    <Listings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/form"
                element={
                  <ProtectedRoute allowedRoles={["user", "admin"]}>
                    <Form />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/success"
                element={
                  <ProtectedRoute allowedRoles={["user", "admin"]}>
                    <Success />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/fichas/:id"
                element={
                  <ProtectedRoute allowedRoles="admin">
                    <Ficha />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
