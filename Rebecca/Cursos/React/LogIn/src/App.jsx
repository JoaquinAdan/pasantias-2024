import React from "react";
import "./App.css";
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./routes/route";
import Login from "./routes/rutaLogin";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
