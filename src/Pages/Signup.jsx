import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const Signup = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [uname, setUname] = useState();
  const [pwd, setPwd] = useState();
  const [cPwd, setCPwd] = useState();
  const [uAlert, setUAlert] = useState(true);

  const handleUInput = (e) => {
    setUname(e.target.value);
  };
  const handlePInput = (e) => {
    setPwd(e.target.value);
  };
  const handleCPInput = (e) => {
    setCPwd(e.target.value);
  };

  const addUser = () => {
    user.forEach((item) => {
      if (item.username === uname) {
        setUAlert(false);
      } else {
        setUser([...user, { username: uname, password: pwd }]);
        navigate("/");
      }
    });
  };

  return (
    <div className="bg-black px-1 py-3 sm:px-10 sm:py-7 md:px-16 md:py-10">
      <div className="bg-[#EFEFEF] border p-7 sm:p-10 rounded-md">
        <h1 className="text-3xl font-medium font-serif">Hey Hi</h1>
        <p>You can sign up here :)</p>
        <div>
          <input
            className="block border border-gray-800 rounded-md bg-transparent px-2 py-0.5 mt-3"
            type="text"
            placeholder="Username"
            required
            onChange={handleUInput}
          />
          {uAlert ? (
            ""
          ) : (
            <p className="text-xs text-red-600">
              Already registered username not valid...{" "}
            </p>
          )}

          <input
            className="block border border-gray-800 rounded-md bg-transparent px-2 py-0.5 mt-3"
            type="password"
            placeholder="Password"
            required
            onChange={handlePInput}
          />

          <input
            className="block border border-gray-800 rounded-md bg-transparent px-2 py-0.5 mt-3"
            type="password"
            placeholder="Confirm Password"
            required
            onChange={handleCPInput}
          />
        </div>
        <button
          id="signup"
          onClick={addUser}
          className="mt-3 bg-yellow-400 py-1 px-4 rounded-md font-medium"
        >
          Sign Up
        </button>
        <p className="mt-3">
          Already have an account?{" "}
          <Link className="text-blue-700 underline font-medium" to={"/"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
