import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./routes/route";
import Login from "./routes/rutaLogin";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route
            path="/dashboard"
            element={
              //<PrivateRoute>
                <Dashboard />
             // </PrivateRoute>
            }
          /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
