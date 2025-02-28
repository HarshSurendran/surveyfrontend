import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center"
      >
        <h2 className="text-2xl font-bold text-red-700">Oops! Page Not Found</h2>
        <p className="text-gray-600 mt-2">The page you are looking for doesn't exist.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
        >
          Go Home
        </button>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
