import React from 'react';
import CoFounder from '../../compnents/Cofounder';
import omkar from '../../omkar.png';
import siddhi from '../../siddhi.jpg';
import aarchy from '../../aarchy.jpg';
import meenakshi from '../../meenakshi.jpg';

function AboutUs() {
  return (
    <div className="bg-white min-h-screen overflow-y flex flex-col items-center justify-center overflow-y">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center mt-28"> 
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Nyay Saarthi!</h1>
        <p className="text-lg text-gray-700 text-justify">
          At NyaySaarthi, we are dedicated to empowering individuals with the legal assistance they need to navigate complex legal landscapes confidently. Our mission is simple yet profound: to serve as a trusted medium for citizens seeking legal aid and solutions to their queries. In a world where understanding legal intricacies can be overwhelming, NyaySaarthi stands as a beacon of support, providing clarity, guidance, and peace of mind to those in need. Whether you're facing a legal challenge, seeking advice, or simply require clarification on legal matters, we are here to help. Our team comprises seasoned legal professionals and experts committed to upholding the principles of justice and fairness. With our extensive knowledge and experience, we strive to deliver practical solutions tailored to meet the unique needs of each individual we serve. At NyaySaarthi, we believe in the power of accessibility. We understand that everyone deserves equal access to justice, regardless of their background or circumstances. That's why we offer a range of services designed to accommodate diverse needs and ensure that legal assistance is within reach for all. From resolving disputes and providing legal counsel to offering resources and educational materials, NyaySaarthi is your trusted partner every step of the way. Our commitment to excellence, integrity, and client satisfaction drives everything we do. Thank you for choosing NyaySaarthi as your ally in the pursuit of justice. Together, let's navigate the legal journey with confidence and clarity.
        </p>
        <p className="text-gray-800">
          Sincerely,<br className="md:inline hidden" />
          Team, Nyay Saarthi
        </p>
      </div>
      <div className="bg-gray-200 w-full py-8">
        <h2 className="text-center text--gray-800 uppercase font-semibold text-2xl mb-4 text-nowrap">Let's know our Co-founders</h2>
        <div className="max-w-6xl mx-auto px-4  flex flex-wrap justify-center ">
          <CoFounder
            name="Omkar Laad"
            imageSrc={omkar}
            description="Developing head of the wesite."
            linkedinLink="https://www.linkedin.com/in/omkar-laad-29a338297/"
            twitterLink="https://twitter.com/laad_omkar"
            instagramLink="https://www.instagram.com/omi_21_04"
            githubLink="https://github.com/Omi-laad"
          />
          <CoFounder
            name="Siddhi Hate"
            imageSrc={siddhi}
            description="Editorial head of news articles for our website."
            linkedinLink="https://www.linkedin.com/in/siddhi-hate-0ba7a4250/"
            twitterLink="twitter_link2"
            instagramLink="https://www.instagram.com/siddhihate_13_"
            githubLink="https://github.com/SiddhiHate13"
          />
          <CoFounder
            name="Aarchy Parekh"
            imageSrc={aarchy}
            description="Business Management  of our website."
            linkedinLink="https://www.linkedin.com/in/aarchy-parekh-5344552a4"
            twitterLink="https://x.com/aarchy_parekh?t=7ks_cvnI8F9Kw_lLxexhFQ&s=08"
            instagramLink="https://www.instagram.com/x__aarchy2524__x/"
            githubLink="https://github.com/aarchyparekh25"
          />
          <CoFounder
            name="Meenakshi Kshirsagar"
            imageSrc={meenakshi}
            description="Publicity Head of our website."
            linkedinLink="linkedin_link4"
            twitterLink="twitter_link4"
            instagramLink="https://www.instagram.com/meeniiiii__1315?igsh=MTVkd3ZnYmNwNTdxNQ=="
            githubLink="github_link4"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
