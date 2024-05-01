import {React,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import Logo from '../../img/Logo.png'; // Import your logo image here
import axios from 'axios';

const ActivatePage = () => {
    
    const { uid, token } = useParams()
    console.log(uid,token)
  // const [loading, setLoading] = useState(false);


    const navigate=useNavigate();

    const activatefunction=async()=>{
      try {

        const response=await axios.post('http://127.0.0.1:8000/api/v1/auth/users/activation/',{
          uid:uid,
          token:token,
        
        })
        console.log('response',response)
        if(response.status === 204){
          alert('Your Account Activation is successful.Please Login')
          navigate('/Login')
        }else{
          alert("Account Activation Failed")
        }
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }

    useEffect(()=>{
      activatefunction();
    },[])
   

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-500 overflow-x-hidden">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <div className="flex items-center justify-center mb-8">
          <div className="rounded-8 shadow-md w-3/4 h-3/4 flex items-center justify-center">
            <img src={Logo} alt="Logo" className="h-24 w-24" />
            <h1 className="text-black text-lg md:ml-2 font-semibold italic">न्याय Saarthi</h1>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 italic">Activate Your Account</h2>
        <p className="text-gray-700 mt-4">Your account is not activated yet.</p>
        <p className="text-gray-700">Please activate your account to proceed.</p>
        <button  onChange={activatefunction} className="w-full bg-orange-500 text-white py-2 rounded-md mt-4 hover:bg-orange-600">Activate Account</button>
        {/* <Loading loading={loading} /> */}

        {/* <p className="text-sm text-gray-600 mt-4">Already activated? <Link to="/login" className="text-blue-500">Login</Link></p> */}
      </div>
    </div>
  );
};

export default ActivatePage;
