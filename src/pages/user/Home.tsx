import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          Welcome to the Survey Portal
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Your feedback helps us improve. Take a minute to fill out our survey!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition" onClick={() => navigate('/survey') }>
          Start Survey
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 max-w-2xl text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Why Participate?
        </h2>
        <p className="text-gray-600 mt-4 text-md md:text-lg">
          Our survey is designed to gather valuable insights from users like you. Your responses will help us create better experiences in the future. Your opinion matters!
        </p>
          <button className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition" onClick={() => navigate('/survey') }>
          Get Submissions
        </button>
          </motion.div>
    </div>
  );
}

export default Home
