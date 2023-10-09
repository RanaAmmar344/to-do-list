'use client'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiDelete} from "react-icons/fi";
// import { MdDoneOutline} from "react-icons/md";




const page = () => {
   const [title, setTitle] =useState('')
   const[disk, setDisk] = useState('')
   const [mainTask, setMaintask] = useState([])
   


   const submithHandler =(e)=>{

    e.preventDefault();
    setMaintask([...mainTask, {title, disk}]);
    setTitle('');
    setDisk('');
   console.log(mainTask)

   
   toast("Task Submit Successfully")
  }
 
 
  let renderTask = <h3> No Task Available "Add Some Task"</h3>
 
   if(mainTask .length>0){
    renderTask = mainTask.map((t,i)=>{
    
      return (
        <li key={i} className=' flex justify-between  items-center   '>

      <div className=' flex justify-between items-center  w-2/4  mb-2  '>
    
        <h2 className='text-bold font-bold text-2xl'>{t.title}</h2>
        <h3 className='1xl'>{t.disk}</h3>
    
      </div >
      <div className='complete'>
      <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" className=" check nw rx adp afv ayh bnr mx-2 mb-3 p-4  "></input>
      <label for="comments" class="awe axv">Complete</label>

      </div>

      <button onClick={ ()=>{
        deleteHandler(i)
      }} className='            bg-red-600 text-white rounded  px-3 py-2 font-bold mb-2 '> <FiDelete/></button>
        </li>
      );
    
      });
   };

   const deleteHandler=(i)=>{

   let copyData = [...mainTask]
    copyData.splice(i,1)
    setMaintask(copyData)

   }
  
   
  
  
 

  return (
    
    <>
     <h1 className='  bg-yellow-400   text-white text-bold p-7 text-center   font-bold text-2xl  mt-3'> TO DO LIST </h1>
     <form onSubmit={submithHandler}  >
       <input type='text' className=' m-5 border-2 px-4 py-2 border-black ' placeholder='Enter Title Here'
       
       value={title}
       onChange={(e)=>{
        setTitle(e.target.value)


       }}
       >

       </input>
       <input type='text' className=' m-5 border-2 px-4 py-2 border-black ' placeholder='Enter  Description Here'
       
       value={disk}
       onChange={(e)=>{
        setDisk(e.target.value)
       }}
        >
       
       </input>
      
      <button  className=' bg-yellow-400   text-white px-2 py-3 font-bold rounded mx-3'  onClick={submithHandler}> Confirm Task </button>
      <ToastContainer   />
     </form>
     <hr/>
     <div className=' p-8 bg-slate-200'>
      <div className='flex  '>

      <h1 className=' font-bold  text-red-500 text-start font-2xl text-bold'>Title</h1>
      <h1 className=' font-bold  text-red-500 description mx-12 font-2xl text-bold '> Description</h1>
      </div>
      <ul>
        {renderTask}
      </ul>

     
     </div>
     <footer className='flex justify-center items-center my-40 '>

       
        <p className=' font-bold'>© 2023 Rana Ammar  Inc. All rights reserved.</p>
       
     </footer>
     
  
    </>
  )
}

export default page

