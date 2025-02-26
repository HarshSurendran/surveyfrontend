import { motion } from "framer-motion";
import { ISubmissionProps } from "../Interfaces/IProps";



const SubmissionsTable: React.FC<ISubmissionProps> = ({ submissions }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 bg- shadow-lg rounded-lg  w-full max-w-4xl overflow-x-auto"
        >
            {submissions.length === 0 ? (
                <p className="text-gray-500 text-center">No submissions found.</p>
            ) : (
                <table className="w-full border-collapse  text-left">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Email</th>
                            <th className="p-3 border">Phone</th>
                            <th className="p-3 border">Nationality</th>
                            <th className="p-3 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((submission, index) => (
                            <tr key={index} className=" hover:bg-gray-100">
                                <td className="p-3 ">{submission.name}</td>
                                <td className="p-3 ">{submission.email}</td>
                                <td className="p-3 ">{submission.phone}</td>
                                <td className="p-3 ">{submission.nationality}</td>
                                <td className="p-3 ">
                                    <button className="bg-blue-600 text-white px-3 py-1 rounded" >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </motion.div>
    );
};

export default SubmissionsTable
