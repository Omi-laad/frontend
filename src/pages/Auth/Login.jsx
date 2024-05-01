// import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.png';
import Alert from '../../compnents/Alert';
import { useState } from 'react';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import {FaEye,FaEyeSlash} from 'react-icons/fa';
import Loading from './Loading';




const Login = () => {
  const [email,setEmail]=useState('');

  const [password,setPassword]=useState('')

  const [loading, setLoading] = useState(false);
  
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange=(e)=>{
    setEmail(e.target.value)
  }

  const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
  }

  const handlesubmit=async(e)=>{

    e.preventDefault();
   
 
   
    if (email==="" || password=== ""){
      alert('email password required')
      return
    }

    try {
      setLoading(true);
      // Simulate an asynchronous operation (e.g., API call) with a timeout
      


      const response=await axios.post('http://127.0.0.1:8000/api/v1/auth/jwt/create/',{
        email:email,
        password:password
      })
      console.log('response',response)

      if(response.status === 200){
        alert('login succesfull')
        localStorage.setItem('token',response.data.access)
        localStorage.setItem('refresh',response.data.refresh)
        navigate('/Alert')
      }else{
        alert('login failed')
      }
    } catch (error) {
      alert(error)
        console.log(error)
    }
    finally{
      setTimeout(() => {
        setLoading(false);
        // Add your logic here after the loading is complete
      },); // Change the timeout value as needed

    }
   
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-500 overflow-x-hidden">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex items-center justify-center mb-8">
          <div className="rounded-8  w-1/2 h-1/2 flex items-center justify-center">
            <img src={Logo} alt="Logo" className="h-24 w-24" />
            <h1 className="text-black text-lg  md:ml-2 font-semibold italic ">न्याय Saarthi</h1>
          </div>
        </div>
        <hr></hr>

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 ">Login</h2>
        <form className="space-y-4 ">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              id="email" 
              type="email" 
              name='email'
              onChange={handleEmailChange}
              placeholder="Enter your email" 
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400" 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className='flex flex-row'>
            <input 
              id="password" 
              type={showPassword ? "string" : "password"}
              name='password'
              onChange={handlePasswordChange}
              placeholder="Enter your password" 
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400" 
            />
            <button
          type="button"
          onClick={togglePasswordVisibility}
          className="p-2 text-gray-500 focus:outline-none"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 flex items-center">
              <Link to="/ResetPassword" className="text-blue-500">Forgot Password?</Link>
              <span className="mx-2">|</span>
              <p>Don't have an account? <Link to="/Signup" className="text-blue-500">Sign up</Link></p>
            </div>
          </div>
          <Link onClick={handlesubmit}  type="submit"  className="w-full bg-orange-500 text-white  text-center py-2 rounded-md hover:bg-orange-600">Login</Link>
          <Loading loading={loading} />
        </form>
      </div>
    </div>
  );
};

export default Login;
