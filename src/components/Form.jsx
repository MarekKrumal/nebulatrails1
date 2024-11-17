import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col p-6 m-auto max-w-3xl bg-black/60  shadow-lg backdrop-blur-sm">
      <form className="mb-4">
        <label className="mb-2 text-white text-xl font-light">Your name</label>
        <input
          type="text"
          className="w-full p-4 mb-4 text-xl text-white bg-transparent border border-white/40  focus:outline-none focus:ring-2 focus:ring-gray-200"
        />

        <label className="mb-2 text-white text-xl font-light">Email</label>
        <input
          type="email"
          className="w-full p-4 mb-4 text-xl text-white bg-transparent border border-white/40  focus:outline-none focus:ring-2 focus:ring-gray-200"
        />

        <label className="mb-2 text-white text-xl font-light">Subject</label>
        <input
          type="text"
          className="w-full p-4 mb-4 text-xl text-white bg-transparent border border-white/40 focus:outline-none focus:ring-2 focus:ring-gray-200"
        />

        <label className="mb-2 text-white text-xl font-light">Details</label>
        <textarea
          rows="6"
          placeholder="Type a short message here"
          className="w-full p-4 mb-4 text-xl text-white bg-transparent border border-white/40 focus:outline-none focus:ring-2 focus:ring-gray-200"
        ></textarea>

        <button
          type="submit"
          className="w-full py-4 text-lg uppercase bg-transparent border-2 border-white/40 text-white  cursor-pointer hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
