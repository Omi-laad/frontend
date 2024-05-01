import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.png'; // Import your logo image here
import axios, { Axios } from 'axios';
import Loading from './Loading';

const ResetPasswordPage = () => {
   const [email,setEmail]=useState('');
   console.log(email)
  const [loading, setLoading] = useState(false);
   
  const handleEmailChange=(e)=>{
    setEmail(e.target.value)

    }
   
   

    const handleSubmit =async(e) =>{
      
      e.preventDefault();
      console.log(email)
    if(email === ""){
    alert('Please enter Email ID')
    return
    }
    try{
      setLoading(true);

    const response= await axios.post('http://127.0.0.1:8000/api/v1/auth/users/reset_password/',{
      email:email,
    })
    console.log('response',response)

    if(response.status === 204){
      alert('Please check you Email and password reset link has been sent to you')
    setEmail("");
      setLoading(false);
    }
    else{
      alert('Process failed please check if the email id is valid ')
      setLoading(false);
    }
    }
    catch(error){
     alert(error)
     console.log(error)
     setLoading(false);
    }
  }

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-500 overflow-x-hidden">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md ">
        <div className="flex items-center justify-center mb-8">
          <div className="rounded-8 shadow-md w-3/4 h-3/4 flex items-center justify-center">
            <img src={Logo} alt="Logo" className="h-24 w-24" />
            <h1 className="text-black text-lg  md:ml-2 font-semibold italic ">न्याय Saarthi</h1>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 italic">Reset Password</h2>
        <div className="space-y-4 ">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400"
            />
          </div>
          <button onClick={handleSubmit} className="w-full bg-orange-500 text-white text-center py-2 rounded-md hover:bg-orange-600">Reset Password</button>
          <Loading loading={loading} />
        </div>
        <p className="text-sm text-gray-600 mt-4">Remembered your password? <Link to="/Login" className="text-blue-500">Login</Link></p>
      </div>
    </div>
  );
};



export default ResetPasswordPage;
