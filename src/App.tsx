import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Survey from "./pages/user/Survey";
import { Toaster } from "react-hot-toast";
import Submissions from "./pages/user/Submissions";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route
            path="/admin/login"
            element={<h1 className="text-3xl bg-red-500">About</h1>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
