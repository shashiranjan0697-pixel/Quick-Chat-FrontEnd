import { useState } from "react";

const LogIn = () => {

    const [user, setUser] = useState({
          email:"",
          password:""
        });

    const submitHandler = (e) =>{
      e.preventDefault();
      console.log(user);
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to your Quick Chat account
        </p>

        <form onSubmit={submitHandler}
          className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => setUser({...user, email:e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({...user, password:e.target.value})}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?

          <a
            href="/signup"
            className="text-blue-600 font-semibold ml-1"
          >
            Sign Up
          </a>
        </p>

      </div>

    </div>
  );
};

export default LogIn;

