import {React,useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.png'; 
import Alert from '../../compnents/Alert';
import { toast } from 'react-toastify';
import { register, reset } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import Spinner from './Loading'
import axios from 'axios';
import LoadingSpinner from './Loading';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import Loading from './Loading';




const Signup = () => {

 const [first_name,setfirst_name]=useState('');
 const [last_name,setlast_name]=useState('');
 const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const [re_password,setre_password]=useState('')
  const [loading, setLoading] = useState(false);

  const navigate=useNavigate();

  const handleFirstName=(e)=>{
    setfirst_name(e.target.value)
  }
  const handleLastName=(e)=>{
    setlast_name(e.target.value)
  }

  const handleEmailChange=(e)=>{
    setEmail(e.target.value)
  }
  var setloading=false
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
  }
  const handleReconfirmPassword=(e)=>{
    setre_password(e.target.value)
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    if (first_name===""||last_name===""|| email==="" || password=== ""||re_password===""){
      alert('all fields required')
      return
    }

    if(password !== re_password){
      alert('password and re password  does not match')
    }

    try {
      setLoading(true);
      // Simulate an asynchronous operation (e.g., API call) with a timeout
      // Change the timeout value as needed




      const response=await axios.post('http://127.0.0.1:8000/api/v1/auth/users/',{
        first_name:first_name,
        last_name:last_name,  
        email:email,
        password:password,
        re_password:re_password,
      })
      
      console.log('response',response)
      if(response.status === 201){
        alert('resgister succesfull Please check your mail to login your account')
      //  navigate("/Login")
      setEmail('')
      setfirst_name('')
      setlast_name('')
      setPassword('')
      setre_password('')


     


      }else{
        alert('Signup failed')
      }
    } catch (error) {
      alert(error)
        console.log(error)
        setEmail('')
      setfirst_name('')
      setlast_name('')
      setPassword('')
      setre_password('')
    }
    finally{
      setTimeout(() => {
        setLoading(false);
        // Add your logic here after the loading is complete
      },);
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
    <div className="flex items-center justify-center min-h-screen bg-orange-500 overflow-x-hidden">
  {/* Sign-in form */}
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
  <div className="flex items-center justify-center mb-8">
          <div className="rounded-8  w-3/4 h-3/4 flex items-center justify-center">
            <img src={Logo} alt="Logo" className="h-24 w-24" />
            <h1 className="text-black text-lg  md:ml-2 font-semibold italic">न्याय Saarthi</h1>
          </div>
        </div>
        <hr></hr>
      <h2 className="text-2xl font-bold text-gray-800 itallic text-center mb-4 ">Sign Up</h2>

    <form className="space-y-4 ">
      <div className="flex items-center justify-between">
        <div className="w-1/2 mr-4">
          <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 ">First Name</label>
          <input placeholder="Type your First name" onChange={handleFirstName} value={first_name} required type="text" className="mt-1 p-2 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400" />
        </div>
        <div className="w-1/2">
          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input placeholder="Type your Last name" onChange={handleLastName} value={last_name} required type="text" className="mt-1 p-2 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input placeholder="Type your email" type="email" onChange={handleEmailChange} value={email} required className="mt-1 p-2 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400" />
      </div>
      <div  >
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <div className='flex flex-row'>
          <input placeholder="Type your password" type={showPassword ? "string" : "password"} onChange={handlePasswordChange} value={password} required className="mt-1 p-2 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400" />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="p-2 text-gray-500 focus:outline-none"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
        </div>
      </div>
      <div>
        <label htmlFor="re_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
       <div className='flex flex-row'>
       <input placeholder="Confirm your password" type={showconfirmPassword ? "string" : "password"}   onChange={handleReconfirmPassword} value={re_password}  required className="mt-1 p-2 block w-full rounded-md   shadow-sm focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400" />
        <button
          type="button"
          onClick={toggleconfirmPasswordVisibility}
          className="p-2 text-gray-500 focus:outline-none"
        >{showconfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
       </div>
      </div>
      <Link  type="submit" onClick={handlesubmit}  className="w-full bg-orange-500 text-white text-center py-2  rounded-md hover:bg-orange-600 justify-center">Sign Up</Link> 
      <Loading loading={loading} />
      <p className="text-sm text-gray-600 mt-4">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
  
     </form>
    
  </div>
  
</div>
    
    )
}
export default Signup

