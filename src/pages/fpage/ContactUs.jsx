import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {toast,Toaster} from 'react-hot-toast';

import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
function ContactUs() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_899neuz', 'template_f6p5c37', form.current, {
        publicKey: 'PcZliRmpqzL0BfO6l',
      })
      .then(
        () => {
          toast.success('SUCCESS!! your is mail sent.Our team will get back to you');
        },
        (error) => {
          toast.error(error);
        },
      );
      e.target.reset()
  };
  return (
    <div className="bg-gray-100 min-h-screen  mt-8 flex   flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-2 mt-24">Contact Us</h1>
      <div className="bg-white p-8 rounded-md shadow-md md:flex md:flex-row md:space-x-8 md:w-3/4">
        <div className="flex flex-col mb-4 md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">Feel free to contact us through the following mediums:</p>
          <ul className='flex felx-col'>
            <li><a href="https://www.instagram.com/nyaysaarthi?igsh=cWoyeGp4cXR4cWN1"><FaInstagram className=''/></a></li>
            <br/>
            <li><a href="https://twitter.com/NyaySaarthi74"><FaTwitter className='ml-4'/></a></li>
          </ul>
        </div>
        <div className="flex flex-col md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <form   ref={form} onSubmit={sendEmail}
             className="space-y-4">
            <div>
              <label className="block mb-1" htmlFor="user_name">Name</label>
              <input type="text"  placeholder='Type your name' name='user_name' autoComplete='off'  required className="w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400 px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1" htmlFor="user_email">Email</label>
              <input type="email"  placeholder='Type your email' name='user_email' autoComplete='off'   required className="w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400 px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1" htmlFor="message">Message</label>
              <textarea placeholder='Message'  name='message' autoComplete='off'  required className="w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400 px-4 py-2"></textarea>
            </div>
            <button type="submit"  onSubmit={sendEmail} className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-md">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
