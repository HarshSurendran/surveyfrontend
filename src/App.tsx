import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Survey from "./pages/user/Survey";
import { Toaster } from "react-hot-toast";
import Submissions from "./pages/user/Submissions";
import PublicRoute from "./hocs/PublicRoute";
import ProtectedRoute from "./hocs/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Router>
        <Routes>
          <Route path="/admin/login" element={<PublicRoute children={<Login />} />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute children={<Dashboard />} />} />
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
