import { motion } from "framer-motion";
import { useState } from "react";
import { submitForm } from "../../api/surveyApi";
import { ISurvey } from "../../Interfaces/ISurvey";
import toast from "react-hot-toast";

const Survey = () => {
  const [formData, setFormData] = useState<ISurvey>({
    name: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors: any = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.nationality)
      newErrors.nationality = "Nationality is required";
    if (
      !formData.email ||
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    )
      newErrors.email = "Valid email is required";
    if (!formData.phone || !/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Valid 10-digit phone number is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (validateForm()) {
        const response = await submitForm(formData);
        if (response && response.status) {
          toast.success("Survey submitted successfully");
        } else {
          toast.error("Something went wrong, please try again.");
        }
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.");
      console.error("Unexpected error occured", error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mt-4">
          Survey Form
        </h1>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl"
        onSubmit={handleSubmit}
      >
        <div className="space-y-4">
          <div className="flex items-center  space-x-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 "
            />

            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex items-center justify-around space-x-4">
            {errors.name && (
              <p className="text-red-500 text-sm ">{errors.name}</p>
            )}
            {errors.gender && (
              <p className="text-red-500 text-sm ">{errors.gender}</p>
            )}
          </div>

          <label htmlFor="nationality">Nationality:</label>
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.nationality && (
            <p className="text-red-500 text-sm ">{errors.nationality}</p>
          )}

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm ">{errors.phone}</p>
          )}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm ">{errors.email}</p>
          )}

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}

          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            className="mt-4 block mx-auto px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Survey;
