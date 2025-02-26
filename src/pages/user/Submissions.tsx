import { useEffect, useState } from "react";
import SubmissionsTable from "../../components/SubmissionsTable";
import { motion } from "framer-motion";
import { ISurvey } from "../../Interfaces/ISurvey";
import { getSurveys } from "../../api/surveyApi";
import toast from "react-hot-toast";
import Pagination from "../../components/Pagination";

const Submissions = () => {
  const [submissions, setSubmissions] = useState<ISurvey[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDocs, setTotalDocs] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(search);
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
      <div className="mt-6 w-full max-w-4xl">
        <input
          type="text"
          placeholder="Search by name..."
          className="p-2 border rounded w-full mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <SubmissionsTable submissions={submissions} />
      <Pagination
        currentPage={currentPage}
        pageSize={itemsPerPage}
        totalItems={totalDocs}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Submissions;
