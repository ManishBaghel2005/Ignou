import React, { useState } from "react";

function Assignment() {
  const [enrollment, setEnrollment] = useState("");
  const program = "BCA_NEW"; // Pre-selected course

  const handleSubmit = () => {
    if (enrollment.length === 10) {
      // Redirect to the IGNOU website with auto-filled values
      const url = `https://isms.ignou.ac.in/changeadmdata/StatusAssignment.asp?enrollment=${enrollment}&program=${program}`;
      window.location.href = url;
    } else {
      alert("Please enter a valid 10-digit enrollment number.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Check IGNOU Assignment Status</h2>


      <div className="mt-10 mb-20">
        <button className="bg-zinc-600 text-white px-10 py-2 rounded">
        <a target="_blank" href="https://webservices.ignou.ac.in/assignments/Bachelor-Degree/BCA/BCA_NEW/bca_new.html">Assiment Check</a>
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <label className="block mb-2 font-semibold">
          Enter Enrollment No. (Max 10 Digits)
        </label>
        <input
          type="text"
          value={enrollment}
          onChange={(e) => setEnrollment(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
          maxLength={10}
        />

        <label className="block mb-2 font-semibold">Programme Code</label>
        <input
          type="text"
          value={program}
          readOnly
          className="w-full p-2 border rounded-md mb-4 bg-gray-200"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>


    
    </div>
  );
}

export default Assignment;
