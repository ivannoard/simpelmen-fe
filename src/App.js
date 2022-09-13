import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Register from "./pages/Auth/Register";
import WithoutFrame from "./components/global/WithoutFrame";
import WithFrame from "./components/global/WithFrame";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import NewPassword from "./pages/Auth/NewPassword";
import { useEffect } from "react";
import PAD from "./pages/PAD";

const ProtectingRoute = (props) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    user ? navigate("/dashboard") : navigate("/login");
  }, [user]);

  return props.children;
};

const AuthenticatedRoute = (props) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    !user ? navigate("/login") : navigate("/");
  }, [user]);

  return props.children;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<WithoutFrame />}>
          <Route
            path="/login"
            element={
              <AuthenticatedRoute>
                <Login />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <AuthenticatedRoute>
                <Register />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <AuthenticatedRoute>
                <ForgotPassword />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/new-password"
            element={
              <AuthenticatedRoute>
                <NewPassword />
              </AuthenticatedRoute>
            }
          />
          <Route path="*" element="404 Not Found" />
        </Route>
        <Route element={<WithFrame />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail-produk/:productId" element={<DetailProduct />} />
          <Route path="/laporan" element={<PAD />} />
          <Route
            path="/dashboard"
            element={
              <ProtectingRoute>
                <Dashboard />
              </ProtectingRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
