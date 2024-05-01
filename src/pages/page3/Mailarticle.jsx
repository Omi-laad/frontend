import React from 'react';
import Logo from '../../img/Logo.png'


function Mailarticle() {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="m-8 text-center">
        <img src={Logo} alt="Your Logo" className="mx-auto  rounded-md  shadow-md h-48 w-48"/>
      </div>

      <h1 className="text-2xl font-bold mb-2">Submission Guidelines:</h1>
      <p className="mb-4">Thank you for considering submitting your article. Please review the following guidelines before mailing:</p>
      <ul className="list-disc ml-8 mb-2">
        <li>Your article should be original content.</li>
        <li>Articles must be well-written and relevant to our audience.</li>
        <li>Include proper citations and references where necessary.</li>
        <li>Avoid plagiarism and ensure your work is properly attributed.</li>
      </ul>

      <h2 className="text-lg font-bold mb-4">Publication Fees:</h2>
      <p className="mb-4">Fees for publishing articles is based solely on the quality and relevance of the content.</p>
      <p>Our team would get back to you with the fees once it has done scrutinzing your article</p>
      <h2 className="text-lg font-bold mb-4">Contact:</h2>
      <p className="mb-4">For submissions or inquiries, please email:</p>
      <ul className="list-disc ml-8 mb-4">
        <li><a href="mailto:editor@example.com" className="text-blue-500 hover:underline">editor@example.com</a></li>
        <li><a href="mailto:submissions@example.com" className="text-blue-500 hover:underline">submissions@example.com</a></li>
      </ul>

      <p>We look forward to receiving your submissions!</p>
      <br/>
      <p className="text-center">Team Nyay Saarthi!</p>
    </div>
  );
}

export default Mailarticle;
