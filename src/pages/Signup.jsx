import { useState } from "react";
import { signupUser } from "../apiCall/auth";

const Signup = () => {

  const [user, setUser] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:""
    });
    

    const submitHandler = async (e) =>{
      e.preventDefault();
      console.log(user);
      let response = null;
      try {
        response = await signupUser(user);

        if(response.success){
           alert(response.message);
        } else {
           alert(response.message);
        }
      } catch (e) {
        alert(response.message);
      }
    }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign up to start chatting
        </p>

        <form onSubmit={submitHandler}
          className="space-y-5">

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={user.firstName}
              onChange={(e) => setUser({...user, firstName:e.target.value})}
              placeholder="Enter your first name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={user.lastName}
              onChange={(e) => setUser({...user, lastName:e.target.value})}
              placeholder="Enter your last name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({...user, email:e.target.value})}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({...user, password:e.target.value})}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?
          <a href="/login" className="text-blue-600 font-semibold ml-1">
            Login
          </a>
        </p>

      </div>
    </div>
  );
};

export default Signup;