// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../../img/Logo.png'; // Import your logo image here

// const ResetPasswordconfirm = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-orange-500 overflow-x-hidden">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
//         <div className="flex items-center justify-center mb-8">
//           <div className="rounded-8 shadow-md w-3/4 h-3/4 flex items-center justify-center">
//             <img src={Logo} alt="Logo" className="h-24 w-24" />
//             <h1 className="text-black text-lg md:ml-2 font-semibold italic">न्याय Saarthi</h1>
//           </div>
//         </div>
//         <h2 className="text-2xl font-semibold text-gray-800 italic">Password Reset Successful</h2>
//         <p className="text-gray-700 mt-4">Your password has been successfully reset.</p>
//         <p className="text-gray-700">You can now login with your new password.</p>
//         <Link to="/login" className="block text-orange-500 mt-4 hover:underline">Login</Link>
//       </div>
//     </div>
//   );
// };

// export default ResetPasswordconfirm;


import React, { useState, useEffect } from 'react'
import { useNavigate, useParams ,Link} from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Logo from '../../img/Logo.png'; // Import your logo image here
import axios from 'axios';
import { FaEye,FaEyeSlash } from 'react-icons/fa';

const ResetPasswordPageconfirm = () => {


   const navigate =useNavigate()
   const { uid, token } = useParams()

    // const [formData, setFormData] = useState({
    //     'new_password': '',
    //     're_new_password': ''
    // })

     const [ new_password,setnew_password]  = useState('')
     const [re_new_password,setrenew_password] = useState('')

     const newpassword = (e)=>{
       setnew_password(e.target.value)
     }
     const repassword =(e)=>{
      setrenew_password(e.target.value)
     }

     const handleSubmit =async(e) =>{
      if(new_password !== re_new_password ||new_password==="" || re_new_password ===""){

        alert("New Password and Re-type New Password fields do not match.")
      }
        e.preventDefault();
    try{
    const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/users/reset_password_confirm/',{
     uid:uid,
     token:token,
     new_password:new_password,
     re_new_password:re_new_password
    })
    console.log('response',response)
    if(response.status==204){
      alert("Password Reset Successful")
      navigate("/login")
    }
    }
   catch(error){
     console.log(error)
     alert(error)
   }

     }

     const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleconfirmPasswordVisibility = () => {
    setShowconfirmPassword(!showconfirmPassword);
  };
  


    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-orange-500 overflow-x-hidden">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
         <div className="flex items-center justify-center mb-8">
           <div className="rounded-8 shadow-md w-3/4 h-3/4 flex items-center justify-center">
             <img src={Logo} alt="Logo" className="h-24 w-24" />
             <h1 className="text-black text-lg md:ml-2 font-semibold italic">न्याय Saarthi</h1>
           </div>
         </div>
         <form className="auth__form flex flex-col">
            <div className='flex flex-row'>
            <input 
            type={showPassword ? "string" : "password"}
                 placeholder="New password"
                    name="new_password"

                onChange={newpassword}
                value={new_password}
                required
                className='mt-1 p-2 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400 mb-4'
            />
            <button
          type="button"
          onClick={togglePasswordVisibility}
          className="p-2 text-gray-500 focus:outline-none"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
            </div>
            <div className='flex flex-row'>
            <input 
            type={showconfirmPassword ? "string" : "password"}
                placeholder="Confirm new password"
                name="re_new_password"
                onChange={repassword}
                value={re_new_password}
                required
                className=' mt-1 p-2 block w-full rounded-md shadow-sm  focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400 mb-4'
            />
            <button
          type="button"
          onClick={toggleconfirmPasswordVisibility}
          className="p-2 text-gray-500 focus:outline-none"
        >
          {showconfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
            </div>
<button className="w-full bg-orange-500 text-white text-center py-2  rounded-md hover:bg-orange-600 justify-center" type="submit" 
onClick={handleSubmit}
>Reset Password</button>
</form>
         {/* <h2 className="text-2xl font-semibold text-gray-800 italic">Password Reset Successful</h2> */}
         {/* <p className="text-gray-700 mt-4">Your password has been successfully reset.</p> */}
         {/* <p className="text-gray-700">You can now login with your new password.</p> */}
         {/* <Link to="/login" className="block text-blue-500 mt-4 hover:underline">Login</Link> */}
       </div>
     </div>
        </>
    )
}

export default ResetPasswordPageconfirm

