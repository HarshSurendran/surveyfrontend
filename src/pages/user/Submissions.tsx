import { useEffect, useState } from "react";
import SubmissionsTable from "../../components/SubmissionsTable";
import { motion } from "framer-motion";
import { ISurvey } from "../../Interfaces/ISurvey";
import { getSurveys } from "../../api/surveyApi";
import toast from "react-hot-toast";
import Pagination from "../../components/Pagination";
import LoadingAnimation from "../../components/LoadingAnimation";
import { Link } from "react-router-dom";

const Submissions = () => {
  const [submissions, setSubmissions] = useState<ISurvey[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDocs, setTotalDocs] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(1);
      setSearchTerm(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    getData(currentPage, itemsPerPage, searchTerm);
  }, [searchTerm, currentPage]);

  const getData = async (page: number, limit: number, searchTerm: string) => {
    try {
      const response = await getSurveys(page, limit, searchTerm);
      if (response && response.status) {
        setSubmissions(response.data.surveys);
        setTotalDocs(response.data.totalDocs);
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.");
      console.error("Unexpected error occured", error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          Survey Submissions
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 w-full max-w-4xl overflow-x-auto"
      >
        <div className="mt-6 w-full max-w-4xl">
          <input
            type="text"
            placeholder="Search by name..."
            className="p-2 border rounded w-full mb-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </motion.div>

      {submissions.length > 0 ? <SubmissionsTable submissions={submissions} /> : <LoadingAnimation />}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <Pagination
          currentPage={currentPage}
          pageSize={itemsPerPage}
          totalItems={totalDocs}
          onPageChange={handlePageChange}
        />

        <div className="flex justify-center items-center gap-2">
          <p>Didn't submit survey yet?</p>
          <Link to="/survey"><p className="text-blue-600">Submit Survey</p></Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Submissions;
