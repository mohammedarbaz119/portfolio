"use client";
import React, { FormEvent, FormEventHandler, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // const data = {
    //   email: e.target.email.value,
    //   subject: e.target.subject.value,
    //   message: e.target.message.value,
    // };
    // const JSONdata = JSON.stringify(data);
    // const endpoint = "/api/send";

    // // Form the request for sending data to the server.
    // const options = {
    //   // The method is POST because we are sending data.
    //   method: "POST",
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   // Body of the request is the JSON data we created above.
    //   body: JSONdata,
    // };

    // const response = await fetch(endpoint, options);
    // const resData = await response.json();

    // if (response.status === 200) {
    //   console.log("Message sent.");
    //   setEmailSubmitted(true);
    // }
  };

  return (
    <section id="contact" className="mx-auto bg-black py-24 px-2">
      <div className="mx-auto w-3/4 md:w-1/2">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <>
            <h1 className="text-white text-4xl font-bold mb-6 text-center">
              Contact Me
            </h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block  w-full p-2.5"
                  placeholder="any@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-cyan-700 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg "
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;
