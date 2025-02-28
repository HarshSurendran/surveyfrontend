import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <header className="bg-blue-700 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <button
        className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
};

export default AdminHeader;
