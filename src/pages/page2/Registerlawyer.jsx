import React from 'react';
import Logo from '../../img/Logo.png'


function Registerlawyer() {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="m-8 text-center">
        <img src={Logo} alt="Company Logo" className="mx-auto  rounded-md  shadow-md h-48 w-48"/>
      </div>

      <div>
  <h1 className="text-2xl font-bold mb-2">Registration Guidelines:</h1>
  <p className="mb-4">Thank you for considering registering as a lawyer. Please review the following guidelines before proceeding:</p>
  <ul className="list-disc ml-8 mb-2">
    <li>Provide your full name, age, and year of graduation.</li>
    <li>Submit the name of the university from which you graduated.</li>
    <li>Include a copy of your passing certificate.</li>
    <li>Attach a copy of your Advocate Bar Code .</li>
  </ul>

  <h2 className="text-lg font-bold mb-4">Registration Process:</h2>
  <p className="mb-4">Fees for registration are determined based on the completeness and accuracy of the submitted documents.</p>
  <p>Our team will review your application and provide further instructions.</p>

  <h2 className="text-lg font-bold mb-4">Contact:</h2>
  <p className="mb-4">For submissions or inquiries, please email:</p>
  <ul className="list-disc ml-8 mb-4">
    <li><a href="mailto:nyaysaarthi@gmail.com" className="text-blue-500 hover:underline">nyaysaarthi@gmail.com</a></li>
    <li><a href="mailto:inquiries979@gmail.com" className="text-blue-500 hover:underline">inquiries979@gmail.com</a></li>
  </ul>

  <p>We look forward to processing your registration!</p>
  <br/>
  <p className="text-center">Team Nyay Saarthi!</p>
  </div>
  </div>
  );
}

export default Registerlawyer;
