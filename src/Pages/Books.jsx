import React, { useState } from 'react';

import BCS111 from "../pdf/BCS011.pdf"
import BELGA136 from '../pdf/Belga136.pdf'
import BCS012 from '../pdf/BCS012.pdf'
import FEG02 from '../pdf/FEG02.pdf'
import MCS202 from '../pdf/MCS202.pdf'
import MCS203 from '../pdf/MCS203.pdf'
import MCSL204 from '../pdf/MCSL204.pdf'
import MCS201 from '../pdf/MCS201.pdf'
import MCSL205 from '../pdf/MCSL205.pdf'
import BCS031 from '../pdf/BCS-031.pdf'
import BCS040 from '../pdf/BCS040.pdf'
import MCS208 from '../pdf/MCS208.pdf'
import BCOC131 from '../pdf/BCOC131.pdf'
import BCS041 from '../pdf/BCS041.pdf' 
import MCS206 from '../pdf/MCS206.pdf' 
import BCS053 from '../pdf/BCS053.pdf' 
import BCS042 from '../pdf/BCS042.pdf' 
import BCOS184 from '../pdf/BCOS184.pdf' 

function Books() {
  const [showSemester1, setShowSemester1] = useState(false);
  const [showSemester2, setShowSemester2] = useState(false);
  const [showSemester3, setShowSemester3] = useState(false);
  const [showSemester4, setShowSemester4] = useState(false);
  const [showSemester5, setShowSemester5] = useState(false);
  const [showSemester6, setShowSemester6] = useState(false);


  const toggleSemester1 = () => {
    setShowSemester1(!showSemester1);
  };

  const toggleSemester2 = () => {
    setShowSemester2(!showSemester2);
  };

  const toggleSemester3 = () => {
    setShowSemester3(!showSemester3);
  };

  const toggleSemester4 = () => {
    setShowSemester4(!showSemester4);
  };

  const toggleSemester5 = () => {
    setShowSemester5(!showSemester5);
  };

  const toggleSemester6 = () => {
    setShowSemester6(!showSemester6);
  };
  return (
    <div className='px-36 py-5'>
    <h1 className="text-3xl font-bold mb-8 text-center">BCA_NEW Course Book Download</h1>

    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow p-4">
        <button onClick={toggleSemester1} className="flex items-center w-full">
          <h2 className="text-3xl font-semibold mb-2">Semester 1</h2>
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${showSemester1 ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {showSemester1 && (
          <div className='flex gap-10 flex-wrap mt-4'>
            <div className='w-64 border rounded '>
           
              <p className='mt-2 px-5'>
                <a href={BCS111} className='font-bold text-[#1b2836]'>BCS-111 Computer Basics and PC</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
              
              <p className='mt-2 px-5'>
                <a href="https://drive.google.com/file/d/1QJ9VwlqzU5qpczxYeztzPrE8aN4myE54/view" target='_blank' className='font-bold text-[#1b2836]'>Environmental Studies (BEVAE-181)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
            
              <p className='mt-2 px-5'>
                <a href={BELGA136} className='font-bold text-[#1b2836]'>English at Work Place (BEGLA-136)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
              
              <p className='mt-2 px-5'>
                <a href="https://www.khoji.net/books/files/BCSL-013-Block-1-www.khoji.net-413.pdf" className='font-bold text-[#1b2836]'>Computer Basics and PC Software Lab (BCSL-013)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
           
              <p className='mt-2 px-5'>
                <a href={BCS012} className='font-bold text-[#1b2836]'>Basic Mathematics (BCS-012)</a>
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <button onClick={toggleSemester2} className="flex items-center w-full">
          <h2 className="text-3xl font-semibold mb-2">Semester 2</h2>
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${showSemester2 ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {showSemester2 && (
          <div className='flex gap-10 flex-wrap mt-4'>
            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href={FEG02} className='font-bold text-[#1b2836]'>Foundation Course in English-2 (FEG-02)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href={MCS203} target='_blank' className='font-bold text-[#1b2836]'>Operating Systems (MCS-203)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
            
              <p className='mt-2 px-5'>
                <a href={MCS202} className='font-bold text-[#1b2836]'>Computer Organisation (MCS-202)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
              
              <p className='mt-2 px-5'>
                <a href={MCSL204} className='font-bold text-[#1b2836]'>WINDOWS and LINUX Lab  (MCSL -204)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href={MCS201} className='font-bold text-[#1b2836]'>Programming in C and Python (MCS-201)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
              
              <p className='mt-2 px-5'>
                <a href={MCSL205} className='font-bold text-[#1b2836]'>Programming in C and Python (MCS-201)</a>
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <button onClick={toggleSemester3} className="flex items-center w-full">
          <h2 className="text-3xl font-semibold mb-2">Semester 3</h2>
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${showSemester3 ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {showSemester3 && (
          <div className='flex gap-10 flex-wrap mt-4'>
            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href={MCS208} className='font-bold text-[#1b2836]'>Data Structures and Algorithms (MCS-208)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href="https://egyankosh.ac.in/bitstream/123456789/86222/1/Section-1%20%281%29.pdf" target='_blank' className='font-bold text-[#1b2836]'>Data Structures and Algorithms Lab (MCSL -209)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
            
              <p className='mt-2 px-5'>
                <a href="https://egyankosh.ac.in/handle/123456789/86026" className='font-bold text-[#1b2836]'>Database Management Systems (MCS-207)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
              
              <p className='mt-2 px-5'>
                <a href={BCS031} className='font-bold text-[#1b2836]'>Programming in C++ (BCS-131)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href="https://egyankosh.ac.in/bitstream/123456789/11613/1/Section-1.pdf" className='font-bold text-[#1b2836]'>DBMS and C++ Lab (BCSL-135)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
              
              <p className='mt-2 px-5'>
                <a href={BCS040} className='font-bold text-[#1b2836]'>Statistical Techniques (BCS-040)</a>
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <button onClick={toggleSemester4} className="flex items-center w-full">
          <h2 className="text-3xl font-semibold mb-2">Semester 4</h2>
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${showSemester4 ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {showSemester4 && (
          <div className='flex gap-10 flex-wrap mt-4'>
            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href={MCS206} className='font-bold text-[#1b2836]'>Object Oriented Programming using Java (MCS-206)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href="https://egyankosh.ac.in/bitstream/123456789/11717/1/Section-1%20Java%20Programming%20Lab.pdf" target='_blank' className='font-bold text-[#1b2836]'>Object Oriented Programming using Java Lab (BCSL-146)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
            
              <p className='mt-2 px-5'>
                <a href={BCS053} className='font-bold text-[#1b2836]'>Web Programming (BCS-053)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
              
              <p className='mt-2 px-5'>
                <a href="https://egyankosh.ac.in/bitstream/123456789/11815/1/Web%20Programming%20Lab.pdf" className='font-bold text-[#1b2836]'>Web Programming Lab (BCSL-147)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href={BCS041}className='font-bold text-[#1b2836]'>Fundamentals of Computer Networks (BCS-041)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
              
              <p className='mt-2 px-5'>
                <a href={BCOC131} className='font-bold text-[#1b2836]'>Financial Accounting (BCOC-131)</a>
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <button onClick={toggleSemester5} className="flex items-center w-full">
          <h2 className="text-3xl font-semibold mb-2">Semester 5</h2>
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${showSemester5 ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {showSemester5 && (
          <div className='flex gap-10 flex-wrap mt-4'>
            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href="https://egyankosh.ac.in/handle/123456789/52136"className='font-bold text-[#1b2836]'>Introduction to Software Engineering (BCS-151)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href={BCS042} target='_blank' className='font-bold text-[#1b2836]'>Introduction to Algorithm Design (BCS-042)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
            
              <p className='mt-2 px-5'>
                <a href="https://egyankosh.ac.in/handle/123456789/467" className='font-bold text-[#1b2836]'>Introduction to Algorithm Design Lab (BCSL-159)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
              
              <p className='mt-2 px-5'>
                <a href={BCOS184} className='font-bold text-[#1b2836]'>E-Commerce (BCOS-184)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href="https://egyankosh.ac.in/handle/123456789/48331" className='font-bold text-[#1b2836]'>Cyber Security (MSEI-023)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
              
              <p className='mt-2 px-5'>
                <a href="https://egyankosh.ac.in/handle/123456789/70600" className='font-bold text-[#1b2836]'>Data Analysis (BECS-184)</a>
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <button onClick={toggleSemester6} className="flex items-center w-full">
          <h2 className="text-3xl font-semibold mb-2">Semester 6</h2>
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${showSemester6 ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {showSemester6 && (
          <div className='flex gap-10 flex-wrap mt-4'>
            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href="https://egyankosh.ac.in/handle/123456789/79259"className='font-bold text-[#1b2836]'>Entrepreneurship (BCOS-185)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
             
              <p className='mt-2 px-5'>
                <a href="https://egyankosh.ac.in/handle/123456789/50888" target='_blank' className='font-bold text-[#1b2836]'>Digital Forensics (MSEI-027)</a>
              </p>
            </div>

            <div className='w-64 border rounded '>
            
              <p className='mt-2 px-5'>
                <a href="#" className='font-bold text-[#1b2836]'>Project (BCSP-165)</a>
              </p>
            </div>
          </div>
        )}
      </div>


      </div>
    </div>
  );
}

export default Books;