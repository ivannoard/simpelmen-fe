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
import LoginAdmin from "./pages/Admin/auth/LoginAdmin";
import RegisterAdmin from "./pages/Admin/auth/RegisterAdmin";
import ForgotPasswordAdmin from "./pages/Admin/auth/ForgotPasswordAdmin";
import NewPasswordAdmin from "./pages/Admin/auth/NewPasswordAdmin";
import ActivateAccountAdmin from "./pages/Admin/auth/ActivateAccountAdmin";
import ActivateAccountSuccessAdmin from "./pages/Admin/auth/ActivateAccountSuccessAdmin";

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

const AuthenticatedAdminRoute = (props) => {
  const navigate = useNavigate();
  const admin = localStorage.getItem("admin");

  useEffect(() => {
    !admin ? navigate("/admin/login") : navigate("/");
  }, [navigate, admin]);

  return props.children;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<WithoutFrame />}>
          {/* User Authentication */}
          <Route
            path="/login"
            element={
              <AuthenticatedRoute>
                <Login />
              </AuthenticatedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/new-password"
            element={
              <AuthenticatedRoute>
                <NewPassword />
              </AuthenticatedRoute>
            }
          />
          {/* End of User Authentication */}
          {/* Dashboard User */}
          <Route
            path="/dashboard/pesanan"
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
          {/* End of Dashboard User */}
          {/* Admin Authentication */}
          <Route
            path="/admin/login"
            element={
              <AuthenticatedAdminRoute>
                <LoginAdmin />
              </AuthenticatedAdminRoute>
            }
          />
          <Route path="/admin/register" element={<RegisterAdmin />} />
          <Route
            path="/admin/forgot-password"
            element={<ForgotPasswordAdmin />}
          />
          <Route path="/admin/new-password" element={<NewPasswordAdmin />} />
          <Route
            path="/admin/activate-account"
            element={<ActivateAccountAdmin />}
          />
          <Route
            path="/admin/activate-account-success"
            element={<ActivateAccountSuccessAdmin />}
          />
          {/* End of Admin Authentication */}
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
