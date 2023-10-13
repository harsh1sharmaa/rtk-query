// src/Register.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterUserQuery } from "../service/user";
import Toast from "../components/Toast";

function Register() {
  const [showSuccessToast, setShowSuccessToast] = useState(false); // State to control the success toast
  const [callRegister, setCallRegister] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    password_repeat: "",
  });

  const { data, isError, isSuccess, isLoading, error } = useRegisterUserQuery(
    !callRegister && formData,
    { skip: callRegister }
  );
  //   const { pdata } = useGetAllPostQuery();
  /*  const { data, isError, isSuccess, isLoading, error } =
    useGetAllProductsQuery();
  console.log("--pdata pdata pdata------", [
    data,
    isError,
    isSuccess,
    isLoading,
    error,
  ]); */

  //   console.log("--------", [data, isError, isSuccess, isLoading, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    // Implement your registration logic here using formData object.
    setCallRegister(false);

    console.log("Registering with data:", formData);
    // setTimeout(() => {
    //   // Hide the success toast after a few seconds
    //   setShowSuccessToast(false);
    // }, 3000); // Adjust the time as needed
  };

  useEffect(() => {
    console.log("--inside use effect------", [
      data,
      isError,
      isSuccess,
      isLoading,
      error,
    ]);

    if (isSuccess) {
      setFormData({
        name: "",
        email: "",
        number: "",
        password: "",
        password_repeat: "",
      });
      setCallRegister(true);
      setShowSuccessToast(true);
      setTimeout(() => {
        // Hide the success toast after a few seconds
        setShowSuccessToast(false);
      }, 3000); // Adjust the time as needed
    }
  }, [data]);

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={HandleSubmit}>
          {Object.keys(formData).map((fieldName) => (
            <div key={fieldName} className="mb-4">
              <label htmlFor={fieldName} className="block text-gray-600">
                {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
              </label>
              <input
                type={fieldName === "email" ? "email" : "text"}
                name={fieldName}
                id={fieldName}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                value={formData[fieldName]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-300"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Go to Login
          </Link>
        </div>
      </div>
      {showSuccessToast && (
        <Toast message="Registration successful!" type="success" />
      )}
    </div>
  );
}

export default Register;
