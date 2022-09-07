import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Auth/Register";
import WithoutFrame from "./components/global/WithoutFrame";
import WithFrame from "./components/global/WithFrame";

function App() {
  const user = localStorage.getItem('user')
  const RequireAuth = ({ children }) => {
    return user !== null ? children : <Navigate to='/login' />
  }
  return (
    <div className='App'>
      <Routes>
        <Route element={<WithoutFrame />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element='404 Not Found' />
        </Route>
        <Route element={<WithFrame />}>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
