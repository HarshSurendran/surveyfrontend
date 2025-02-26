import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Survey from "./pages/user/Survey";
import { Toaster } from "react-hot-toast";
import Submissions from "./pages/user/Submissions";
import Login from "./pages/admin/login";
import PublicRoute from "./hocs/PublicRoute";
import ProtectedRoute from "./hocs/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Router>
        <Routes>
          <Route path="/admin/login" element={<PublicRoute children={<Login />} />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute children={<h1>Dashboard</h1>} />} />
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
