import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/User";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Register from "./pages/Auth/Register";
import WithoutFrame from "./components/global/WithoutFrame";
import WithFrame from "./components/global/WithFrame";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import NewPassword from "./pages/Auth/NewPassword";
import PAD from "./pages/PAD";
import Kemasan from "./pages/Kemasan";
import Keranjang from "./pages/Keranjang";

const ProtectingRoute = (props) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (!user) navigate("/");
  }, [navigate, props.children, user]);
  return props.children;
};

const AuthenticatedRoute = (props) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    !user ? navigate("/login") : navigate("/");
  }, [navigate, user]);

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
          <Route path="/register" element={<Register />} />
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
          <Route
            path="/dashboard/pesanan"
            element={
              <ProtectingRoute>
                <Dashboard />
              </ProtectingRoute>
            }
          />
          <Route
            path="/dashboard/detail/:pesananId"
            element={
              <ProtectingRoute>
                <Dashboard />
              </ProtectingRoute>
            }
          />
          <Route
            path="/dashboard/pembayaran"
            element={
              <ProtectingRoute>
                <Dashboard />
              </ProtectingRoute>
            }
          />
          <Route
            path="/dashboard/lacak-pesanan"
            element={
              <ProtectingRoute>
                <Dashboard />
              </ProtectingRoute>
            }
          />
          <Route
            path="/dashboard/profil"
            element={
              <ProtectingRoute>
                <Dashboard />
              </ProtectingRoute>
            }
          />
          <Route path="*" element="404 Not Found" />
        </Route>
        <Route element={<WithFrame />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail-produk/:productId" element={<DetailProduct />} />
          <Route path="/laporan" element={<PAD />} />
          <Route path="/produk-kemasan" element={<Kemasan />} />
          <Route path="/keranjang" element={<Keranjang />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
