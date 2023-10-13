import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginQuery } from "../service/user";
import Toast from "../components/Toast";
import { useSelector, useDispatch } from "react-redux";
import { addAccessToken } from "../redux/features/userSlice";

function Login() {
  // https://storerestapi.com/docs#id_auth--1
  const navigation = useNavigate();
  const access_token = useSelector((state) => state.user.access_token);
  // console.log("access_token");
  // console.log(access_token);
  const dispatch = useDispatch();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showSuccessToast, setShowSuccessToast] = useState(false); // State to control the success toast
  const [callRegister, setCallRegister] = useState(true);

  const { data, isError, isSuccess, isLoading, error } = useLoginQuery(
    !callRegister && { email, password },
    { skip: callRegister }
  );

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you can perform the actual login logic, like sending a request to your backend.
    setCallRegister(false);

    console.log("Logging in with email:", email, "and password:", password);
  };

  useEffect(() => {
    if (access_token) {
      navigation("/home");
    }
    console.log("--inside use effect------", [
      data,
      isError,
      isSuccess,
      isLoading,
      error,
    ]);

    if (isSuccess) {
      setUsername("");
      setPassword("");
      setCallRegister(true);
      setShowSuccessToast(true);
      setTimeout(() => {
        // Hide the success toast after a few seconds
        setShowSuccessToast(false);
      }, 3000); // Adjust the time as needed
      dispatch(addAccessToken("accessToke_RERERERERERERE"));
      navigation("/home");
    }
  }, [data]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              email
            </label>
            <input
              type="text"
              id="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-300"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Go to Register
          </Link>
        </div>
      </div>
      {showSuccessToast && <Toast message="Login successful!" type="success" />}
    </div>
  );
}

export default Login;
