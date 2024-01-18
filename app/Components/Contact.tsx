"use client";
import React, { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = React.createRef<HTMLFormElement>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      form.current?.from_name.value === "" ||
      form.current?.email.value === "" ||
      form.current?.subject.value === "" ||
      form.current?.message.value === ""
    ) {
      alert("Please fill all the fields!");
    }
    emailjs
      .sendForm(
        "service_9gdw7r1",
        "template_8eg0sba",
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then((res) => {
        form.current?.reset();
        alert("email sent successfully!");
      })
      .catch((err) => alert("Something went wrong, please try again!"));
  };

  return (
    <section id="contact" className="mx-auto bg-gray-900 py-24 px-2">
      <div className="mx-auto w-3/4 md:w-2/5">
        <>
          <h1 className="text-white text-4xl font-bold mb-6 text-center">
            Contact Me
          </h1>
          <form className="flex flex-col" ref={form} onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your name
              </label>
              <input
                name="from_name"
                type="text"
                id="from_name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block  w-full p-2.5"
                placeholder="any@gmail.com"
              />
            </div>
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
      </div>
    </section>
  );
};

export default Contact;
