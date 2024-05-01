import React from 'react';
import Logo from './img/Logo.png';


// Lawyer Section Component
function LawyerSection() {
  return (
    <div className='mx-auto max-w-4xl p-6'>
      <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Lawyer Section</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Real-Time Communication and Video Calling:</h3>
        <p className="text-gray-700">
          Integrate a real-time communication feature allowing clients to initiate video calls with registered lawyers.
          Implement WebRTC technology for secure and reliable video conferencing directly within the platform.
          Ensure compatibility across different devices and browsers for seamless communication.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Lawyer Registration and Profile Management:</h3>
        <p className="text-gray-700">
          Develop a registration process for lawyers, including verification of credentials and professional licenses.
          Enable lawyers to create and manage their profiles, showcasing their expertise, experience, and areas of specialization.
          Implement a rating and review system to help clients make informed decisions when selecting a lawyer.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Document Management:</h3>
        <p className="text-gray-700">
          Provide a secure document upload feature allowing lawyers to upload important documents such as certifications, case files, and legal documents.
          Implement version control and encryption to ensure confidentiality and integrity of uploaded documents.
          Enable easy access to uploaded documents for both lawyers and clients during consultations and case discussions.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Appointment Scheduling and Calendar Integration:</h3>
        <p className="text-gray-700">
          Integrate a scheduling system allowing clients to book appointments with lawyers based on their availability.
          Sync lawyers' schedules with their personal calendars (e.g., Google Calendar) to avoid scheduling conflicts.
          Send automated reminders and notifications to both parties to ensure appointments are not missed.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Payment Gateway Integration:</h3>
        <p className="text-gray-700">
          Integrate a secure payment gateway to facilitate fee payments for legal services.
          Support various payment methods such as credit/debit cards, bank transfers, and digital wallets.
          Implement invoicing and billing functionalities for transparent financial transactions between lawyers and clients.
        </p>
        <hr className='border-t-4 border-dashed my-8'></hr>
      </div>
    </div>
    </div>
  );
}

// Article Section Component
function ArticleSection() {
  return (
  
  <div className='mx-auto max-w-4xl p-6 -mt-10'>
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Article Section</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Self Article Publishing:</h3>
        <p className="text-gray-700">
          Create a user-friendly interface for authors to draft, edit, and publish articles directly on the website.
          Provide rich text editing tools and formatting options to enhance the presentation of articles.
          Implement autosave and version history features to prevent data loss and track revisions.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Publication Certificate:</h3>
        <p className="text-gray-700">
          Introduce a publication certificate system to validate and authenticate published articles.
          Generate certificates automatically upon successful publication, including metadata such as article title, author name, and publication date.
          Allow authors to download and share certificates as proof of their published work for academic or professional purposes.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Peer Review and Editorial Assistance:</h3>
        <p className="text-gray-700">
          Incorporate a peer review process allowing authors to submit articles for feedback and constructive criticism.
          Provide editorial assistance and guidance to authors throughout the writing and publishing process.
          Offer incentives or rewards for peer reviewers to encourage participation and maintain quality standards.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Copyright Protection and Licensing Options:</h3>
        <p className="text-gray-700">
          Implement copyright protection mechanisms to safeguard authors' intellectual property rights.
          Offer licensing options allowing authors to specify the terms of use for their published articles (e.g., Creative Commons licenses).
          Educate authors about copyright laws and best practices for protecting their work from plagiarism and unauthorized use.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Community Engagement and Networking:</h3>
        <p className="text-gray-700">
          Foster a vibrant community of writers and readers by facilitating discussions, comments, and feedback on published articles.
          Organize virtual events such as webinars, workshops, and panel discussions to encourage knowledge sharing and networking among members.
          Provide networking opportunities for authors to connect with publishers, editors, and industry professionals for collaboration and career advancement.
        </p>
      </div>
    </div>

  </div>  
  );
}

// Main Future Component
function Future() {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex items-center justify-center mb-8">
          <div className="rounded-8  w-1/2 h-1/2 flex items-center justify-center shadow-md">
            <img src={Logo} alt="Logo" className="h-24 w-24 size-10" />
            <h1 className="text-black text-lg  md:ml-2 font-semibold italic ">न्याय Saarthi</h1>
            
          </div>
        </div>
        
        <div className=" rounded-md overflow-auto mt-6 whitespace-nowrap cursor-pointer text-red-500 italic">
            <marquee behavior="scroll" direction="left" scrollamount="8">
               These are the upcoming updates  for NyaySaarthi stay tuned!  
              </marquee>
             </div>
        <hr></hr>
      <div className="content mx-auto max-w-4xl p-6 ">
        <h1 className="text-4xl font-bold mb-4">Upcoming Enhancements</h1>
        <LawyerSection />
        <ArticleSection />
      </div>
    </div>
  );
}

export default Future;
