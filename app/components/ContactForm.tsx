import React from "react";

const inputClass =
  "w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

export function ContactForm() {
  return (
    <section className="max-w-8xl mx-auto my-16 px-4">
      <div className="flex flex-col md:flex-row bg-neutral-950 rounded-3xl shadow-xl overflow-hidden">
        {/* Left Side: Contact Us Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center bg-neutral-900 min-h-[340px]">
          <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-neutral-300 mb-2">
            Have a project in mind or want to collaborate?
          </p>
          <p className="text-neutral-400">
            Fill out the form and I’ll get back to you as soon as possible. I’m available for freelance and full-time opportunities.
          </p>
        </div>
        {/* Right Side: Form */}
        <form
          className="md:w-1/2 p-8 flex flex-col justify-center"
          autoComplete="off"
          aria-label="Contact Hamza"
        >
          <h3 className="text-xl font-bold mb-6 text-white text-center md:text-left">
            Contact Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-neutral-200 font-medium">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-neutral-200 font-medium">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className={inputClass}
              />
            </div>
          </div>
          {/* Message */}
          <div className="flex flex-col mt-4">
            <label htmlFor="message" className="mb-2 text-neutral-200 font-medium">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Type your message here..."
              rows={5}
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-black text-white font-bold py-3 rounded-lg shadow hover:bg-neutral-800 transition-colors"
          >
            Contact Hamza
          </button>
        </form>
      </div>
    </section>
  );
}