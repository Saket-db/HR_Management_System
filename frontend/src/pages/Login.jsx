import React, { useState } from "react";
import axios from "axios";

const Login = () => {

  // let count  = 0;
  const [email, setemail] = useState('') // setting email as empty by default and updating it using setemail 
  const [password, setpassword] = useState('')
  const [count, setCount] = useState(0);

  const handleSubmit = async(e) => {
    e.preventDefault();// Browser submits the form and page gets refreshed. By using this, page will not get refreshed.
     
    setCount(prevCount => {
      const updatedCount = prevCount + 1;
      console.log("Button clicked times:", updatedCount);
      return updatedCount;
    }); // created a function over a method, since setState is async in nature inorder to get the updated value immediately.
    // method would have worked fine if the handelSubmit function was not async.

    try{
      // axios is http library, an alternative to fetch api
      const response  = await axios.post("http://localhost:3000/api/auth/login", {email, password}); // axios(url, data, config )
      console.log("Login successful:", response.data);
      console.log("Button clicked times:", count);
    }
    catch(error){
      console.log("Error during login:", error);
    }
  }
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-blue-500 via-5%-blue-350 to-blue-200 pt-auto pb-auto justify-center">
        <h2 className="text-center mb-4 text-xl font-semibold text-white">
          HR Management System
        </h2>
      <div className="w-90 p-6 bg-white rounded-lg shadow-md flex flex-col mx-auto">

        <form onSubmit={(e) => handleSubmit(e)}>
          <h2 className="text-lg font-semibold mb-4">Login</h2>

          <label className="block mb-1 text-sm font-medium">
            Enter Email:
          </label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setemail(e.target.value)}
          />

          <label className="block mb-1 text-sm font-medium">
            Enter Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setpassword(e.target.value)}
          />

          <label className="block mb-2 text-sm font-medium">
            Choose User Type:
          </label>
          <div className="flex items-center gap-4 mb-4">
            <label className="flex items-center gap-1 text-sm">
              <input type="radio" name="role" />
              Admin
            </label>
            <label className="flex items-center gap-1 text-sm">
              <input type="radio" name="role" />
              Employee
            </label>
          </div>
        <div className="flex items-center justify-between col-end-2">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </label>

          <label className="text-sm text-blue-600 cursor-pointer hover:underline">
            Forgot Password?
          </label>
        </div>
          

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mt-1.5"
            // onClick={() => setCount(c => c+1)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
