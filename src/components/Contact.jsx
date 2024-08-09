import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';
import contactImage from '../assets/contact.png';
import {motion} from "framer-motion"

const Contact = ({ setProgress }) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [click, setClick] = useState(false);
  const [dangeralert, setDangeralert] = useState({ show: false, message: "" });
  const [successalert, setSuccessalert] = useState({ sshow: false, smessage: "" });

  const handleClick = () => {
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 100);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setProgress(30); 

    if (!name || !email || !message) {
      setProgress(100); 
      setDangeralert({ show: true, message: "All fields are required." });
      setTimeout(() => {
        setDangeralert({ show: false, message: "" });
      }, 5000);
      return;
    }

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          console.log('SUCCESS!');
          setProgress(100); 
          setSuccessalert({ sshow: true, smessage: "Sent Successfully" });
          setTimeout(() => {
            setSuccessalert({ sshow: false, smessage: "" });
          }, 5000);
        },
        (error) => {
          setName("");
          setEmail("");
          setMessage("");
          console.log('FAILED...', error.text);
          setProgress(100);
          setDangeralert({ show: true, message: "Failed to send the email. Please try again." });
          setTimeout(() => {
            setDangeralert({ show: false, message: "" });
          }, 5000);
        },
      );
  };

  return (
    <div id="Contact" className='mx-auto px-6 lg:px-10'>
      <div className='border-b border-neutral-900 pb-16'>
        <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}} className='pt-14 lg:pt-20 mb-10 lg:mb-16 text-center text-4xl text-gradient'>Get in <span className='text-blue-300'>Touch</span></motion.h1>
        <div className='flex justify-center mt-5 lg:p-5'>
          <div className='flex flex-wrap md:flex-row w-full max-w-6xl'>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className='hidden lg:flex w-full lg:w-1/2 items-center justify-center'>
              <div className='p-16'>
                <img src={contactImage} alt="Contact Us" className='w-3/4 h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300' />
              </div>
            </motion.div>

            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} className='w-full lg:w-1/2 p-5'>
              <div className='bg-gradient-to-r from-slate-950 to-blue-950 custom-shadow rounded-lg p-6'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
                  <label className='text-lg font-semibold text-white'>Name</label>
                  <input type="text" name="from_name" placeholder="John Doe" value={name} className='border border-gray-300 p-2 rounded-md bg-white text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-300' onChange={(e) => setName(e.target.value)} />

                  <label className='text-lg font-semibold text-white'>Email</label>
                  <input type="email" name="from_email" placeholder="john.doe@example.com" value={email} className='border border-gray-300 p-2 rounded-md bg-white text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-300' onChange={(e) => setEmail(e.target.value)} />

                  <label className='text-lg font-semibold text-white'>Message</label>
                  <textarea name="message" placeholder="Your message here..." value={message} className='border border-gray-300 p-2 rounded-md h-20 bg-white text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-300' onChange={(e) => setMessage(e.target.value)} ></textarea>

                  <div className='flex justify-center'>
                    <button type="submit" className={`py-2 px-4 rounded-md font-semibold cursor-pointer transition duration-300 ${click ? 'bg-slate-950 hover:bg-slate-950 transition duration-75' : 'bg-slate-950'} hover:bg-blue-950 text-white`} onClick={handleClick}>
                      Send
                    </button>
                  </div>

                  {dangeralert.show && (
                    <div className={`mt-4 p-4 flex font-semibold bg-red-100 border-l-4 border-red-500 text-red-700`} role="alert">
                      <p>{dangeralert.message}</p>
                    </div>
                  )}

                  {successalert.sshow && (
                    <div className={`mt-4 p-4 flex font-semibold bg-green-100 border-l-4 border-green-500 text-green-700`} role="alert">
                      <p>{successalert.smessage}</p>
                    </div>
                  )}

                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
