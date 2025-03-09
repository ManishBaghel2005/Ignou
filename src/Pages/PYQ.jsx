import React, { useState } from "react";

function PYQ() {
  const [semester, setSemester] = useState("");
  const [course, setCourse] = useState("");
  const [session, setSession] = useState("");
  const [year, setYear] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
    setCourse(""); // Reset course when semester changes
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleSessionChange = (event) => {
    setSession(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleGoClick = () => {
    if (semester && course && session && year) {
      let sessionFormatted = session.charAt(0).toUpperCase() + session.slice(1);
      let baseURL = "https://webservices.ignou.ac.in/pre-question/Question%20Paper%20";
      let middleURL = "";

      if (course.startsWith("BCS")) {
        middleURL = "/SOCIS/BCA/";
      } else if (course.startsWith("MCS")) {
        middleURL = "/SOCIS/PGDCA_NEW/";
      }
      else if (course.startsWith("FEG")) {
        middleURL = "/SOCIS/BCA/";
      } 
      else if (course.startsWith("BEVAE")) {
        middleURL = "/SOH/BDP/";
      } 
      else if (course.startsWith("BCOC")) {
        middleURL = "/SOMS/B.COM/";
      } 
      else if (course.startsWith("BCOS")) {
        middleURL = "/CBCS/BAG-BCOMG-BSCG/";
      } 
      else if (course.startsWith("MSEI")) {
        middleURL = "/SOVET/PGDIS/";
      } 
      else if (course.startsWith("becs")) {
        middleURL = "/CBCS/BAG-BCOMG-BSCG/";
      } 
      

      let pdfFileName = `${course}.pdf`;
      let constructedURL = `${baseURL}${sessionFormatted}%20${year}${middleURL}${pdfFileName}`;

      setPdfUrl(constructedURL);
    } else {
      alert("Please select all options.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow md:px-28 md:py-10">
      {/* Semester Dropdown */}
      <select value={semester} onChange={handleSemesterChange} className="block w-full p-2 border rounded">
        <option value="">SELECT SEMESTER</option>
        <option value="Semester 1">Semester 1</option>
        <option value="Semester 2">Semester 2</option>
        <option value="Semester 3">Semester 3</option>
        <option value="Semester 4">Semester 4</option>
        <option value="Semester 5">Semester 5</option>
        <option value="Semester 6">Semester 6</option>
      </select>

      {/* Course Dropdown (Changes Based on Semester) */}
      {semester && (
        <select value={course} onChange={handleCourseChange} className="block w-full p-2 border rounded mt-2">
          <option value="">SELECT COURSE</option>
          {semester === "Semester 1" && (
            <>
              <option value="BCS-011">BCS-111</option>
              <option value="BEVAE-181">BEVAE-181</option>
              <option value="BCS-012">BCS-012</option>
            </>
          )}
          {semester === "Semester 2" && (
            <>
              <option value="MCS-201">MCS-201</option>
              <option value="FEG-2">FEG-02</option>
              <option value="MCS-202">MCS-202</option>
              <option value="MCS-203">MCS-203</option>
              <option value="MCS-204">MCS-204</option>
            </>
          )}
          {semester === "Semester 3" && (
            <>
              <option value="BCS-031">BCS-131</option>
              <option value="BCS-040">BCS-040</option>
              <option value="MCS-207">MCS-207</option>
              <option value="MCS-208">MCS-208</option>
              <option value="MCS-209">MCS-209</option>
            </>
          )}
          {semester === "Semester 4" && (
            <>
              <option value="BCS-053">BCS-053</option>
              <option value="BCS-041">BCS-041</option>
              <option value="BCOC-131">BCOC-131</option>
              <option value="MCS-206">MCS-206</option>
            
            </>
          )}
          {semester === "Semester 5" && (
            <>
              <option value="BCS-051">BCS-151</option>
              <option value="BCS-042">BCS-042</option>
              <option value="BCOS-184">BCOS-184</option>
              <option value="MSEI-023">MCS-023</option>
              <option value="becs-184">BECS-184</option>
            
            </>
          )}
          {semester === "Semester 6" && (
            <>
              <option value="BCOS-185">BCOS-185</option>
              <option value="MSEI-027">MSEI-027</option>
            
            
            </>
          )}
        </select>
      )}

      {/* Session Dropdown */}
      <select value={session} onChange={handleSessionChange} className="block w-full p-2 border rounded mt-2">
        <option value="">SELECT SESSION</option>
        <option value="June">June</option>
        <option value="December">December</option>
      </select>

      {/* Year Dropdown (Manually Written) */}
      <select value={year} onChange={handleYearChange} className="block w-full p-2 border rounded mt-2">
        <option value="">SELECT YEAR</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
      </select>

      {/* Button */}
      <button onClick={handleGoClick} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        GO
      </button>


      {/* PDF Link & Embedded PDF */}
      {pdfUrl && (
        <div className="mt-4">
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Open PDF
          </a>
          <div className="mt-4 border rounded shadow">
            <iframe src={pdfUrl} width="100%" height="500px" title="PDF Viewer" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PYQ;
