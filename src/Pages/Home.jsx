import React, { useState } from 'react'


function Home() {
   const [textbox, setTextbox] = useState("")
     const [ignouUrl, setignouUrl] = useState("")
 
    
     
     const handleResult =(e)=>{
         e.preventDefault()
         if (ignouUrl) {
             window.location.href = ignouUrl; 
           }
     }
 
     const handleChangeTextvalue = (e) => {
         let valueOfText = e.target.value;
         let numericValue = Number(valueOfText);
       
         if (!isNaN(numericValue) || valueOfText === "") {
           setTextbox(valueOfText);
       
           const currentDate = new Date();
           const currentMonth = currentDate.getMonth() + 1;
           let currentYear = currentDate.getFullYear();
           let yearForURL;
       
           if (currentMonth >= 1 && currentMonth <= 6) {
             // January to June: Show result of **December of the previous year**
             yearForURL = (currentYear - 1).toString().slice(-2);
             setignouUrl(
               `https://termendresult.ignou.ac.in/view_gradecard.aspx?eno=${valueOfText}&type=TE12${yearForURL}`
             );
           } else {
             // July to December: Show result of **June of the current year**
             yearForURL = currentYear.toString().slice(-2);
             setignouUrl(
               `https://termendresult.ignou.ac.in/view_gradecard.aspx?eno=${valueOfText}&type=TE06${yearForURL}`
             );
           }
         }
       };
       
   return (
     <div className='bg-zinc-600 h-[200%]  w-full justify-center flex py-20'>
         <input type="text"  onChange={handleChangeTextvalue} placeholder='Enter Your Enrollment Number' value={textbox} className='border rounded text-center w-96 py-2' />
         <button className='bg-[#1b2836] text-white px-10 ml-2 py-2 rounded' onClick={handleResult}>SEND</button>

         
     </div>
   )
 }

export default Home