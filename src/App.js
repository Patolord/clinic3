import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import RoleProtectedRoute from "./components/RoleProtectedRoute";

import "./App.css";

import Listings from "./pages/listings/Listings";
import Form from "./pages/form/Form";
import Login from "./pages/login/Login";
import Ficha from "./pages/ficha/Ficha";
import Navbar from "./components/Navbar";
import Success from "./pages/success/Success";

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <RoleProtectedRoute allowedRoles={["admin"]}>
                    <Listings />
                  </RoleProtectedRoute>
                }
              />

              <Route
                path="/user"
                element={
                  <RoleProtectedRoute allowedRoles={["user", "admin"]}>
                    <Form />
                  </RoleProtectedRoute>
                }
              />

              <Route
                path="/success"
                element={
                  <RoleProtectedRoute allowedRoles={["user", "admin"]}>
                    <Success />
                  </RoleProtectedRoute>
                }
              />

              <Route
                path="/fichas/:id"
                element={
                  <RoleProtectedRoute allowedRoles={["admin"]}>
                    <Ficha />
                  </RoleProtectedRoute>
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
