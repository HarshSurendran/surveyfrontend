import { motion } from "framer-motion";
import { ISubmissionProps } from "../Interfaces/IProps";
import { ISurvey } from "../Interfaces/ISurvey";
import { useEffect, useState } from "react";



const SubmissionsTable: React.FC<ISubmissionProps> = ({ submissions }) => {
    const [selectedSubmission, setSelectedSubmission] = useState<ISurvey | null>(null);

    const handleClick = (submission: ISurvey) => {
        setSelectedSubmission(submission);
    }

    const handleClose = () => {
        setSelectedSubmission(null);
    };
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") handleClose();
        };
    
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 shadow-lg rounded-lg  w-full max-w-4xl overflow-x-auto"
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
                                <tr key={index} className=" hover:bg-blue-100">
                                    <td className="p-3 ">{submission.name}</td>
                                    <td className="p-3 ">{submission.email}</td>
                                    <td className="p-3 ">{submission.phone}</td>
                                    <td className="p-3 ">{submission.nationality}</td>
                                    <td className="p-3 ">
                                        <button onClick={() => handleClick(submission)} className="bg-blue-600 text-white px-3 py-1 rounded" >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </motion.div>

            {/* Modal for Detailed View */}
            {selectedSubmission && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center justify-center backdrop-blur z-50"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Submission Details</h2>
                        <div className="space-y-2 text-gray-600">
                            <p><strong>Name:</strong> {selectedSubmission.name}</p>
                            <p><strong>Gender:</strong> {selectedSubmission.gender}</p>
                            <p><strong>Nationality:</strong> {selectedSubmission.nationality}</p>
                            <p><strong>Email:</strong> {selectedSubmission.email}</p>
                            <p><strong>Phone:</strong> {selectedSubmission.phone}</p>
                            <p><strong>Address:</strong> {selectedSubmission.address}</p>
                            <div className="max-h-40 overflow-y-auto p rounded break-words">
                                <p><strong>Message:</strong> {selectedSubmission.message}</p>
                                </div>
                        </div>
                        <button
                            onClick={handleClose}
                            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default SubmissionsTable
