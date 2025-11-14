import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import "../index.css";

const Login = ({ user }) => {

    const navigate = useNavigate();
    const [uname, setUname] = useState();
    const [pwd, setPwd] = useState();
    const [regUser, setRegUser] = useState(true)


    const handleUInput = (e) => {setUname(e.target.value)}
    const handlePInput = (e) => {setPwd(e.target.value)}

    const checkUser = () => {
        var userfound = false
        user.forEach((item) => {
            if (item.username === uname && item.password === pwd) {
                setRegUser(true)
                userfound = true
                navigate("/home", {state:{user:uname}})
                console.log("login Succesfull")
            }  
        })
        if(userfound === false){
            setRegUser(false)
            console.log("login failed")
        }
    }
    
    

  return (
    <div className="bg-black px-1 py-3 sm:px-10 sm:py-7 md:px-16 md:py-10">
      <div className="bg-[#EFEFEF] border p-7 sm:p-10 rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {regUser ? (<p>I help you manage your activities after you login :)</p>) : (<p className='text-red-600'>Please sign up before you login</p>)}
        <div>
          <input
            autoComplete='on'
            className="block border border-gray-800 rounded-md bg-transparent px-2 py-0.5 mt-3"
            type="text"
            placeholder="Username"
            required
            onChange={handleUInput}
          />
          <input
            autoComplete='on'
            className="block border border-gray-800 rounded-md bg-transparent px-2 py-0.5 mt-3"
            type="password"
            placeholder="Password"
            required
            onChange={handlePInput}
          />
        </div>
        <button id='login' onClick={checkUser} className="mt-3 bg-violet-700 text-white py-1 px-4 rounded-md font-medium">
          Login
        </button>
        <p className="mt-3">
          Already have an account?{' '}
          <Link className="text-blue-700 underline font-medium" to={"/signup"}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
