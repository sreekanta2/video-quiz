import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/Authcontext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Singup from "./pages/Singup";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import "./styles/App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/singup"
                element={
                  <PublicRoute>
                    <Singup />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/quiz/:id"
                element={
                  <PrivateRoute>
                    <Quiz />
                  </PrivateRoute>
                }
              />
              <Route
                path="/result"
                element={
                  <PrivateRoute>
                    <Result />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
