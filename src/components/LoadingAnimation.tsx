import { motion } from "framer-motion";

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center my-7 bg-gray-100">
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="w-4 h-4 bg-blue-600 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
