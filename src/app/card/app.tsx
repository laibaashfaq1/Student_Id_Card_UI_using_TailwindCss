import React from 'react'


interface Props {
    name: string;
    age: number;
    rollno: number;
    studentClass: number | string;  // Changed `class` to `studentClass`
  }



const Id_card = (props:Props) => {
  return (
   
 <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border-2 border-gray-600 shadow-lg rounded-lg bg-white w-80 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 border-b-2 pb-2 w-full">Student ID Card</h1>
        <div className="space-y-4 w-full text-center">
          <p className="text-lg font-medium bg-amber-200 py-2 rounded w-full border-b-2"><strong>Name:</strong> {props.name}</p>
          <p className="text-lg font-medium bg-amber-200 py-2 rounded w-full border-b-2"><strong>Age:</strong> {props.age}</p>
          <p className="text-lg font-medium bg-amber-200 py-2 rounded w-full border-b-2"><strong>Roll No:</strong> {props.rollno}</p>
          <p className="text-lg font-medium bg-amber-200 py-2 rounded w-full border-b-2"><strong>Class:</strong> {props.studentClass}</p>
        </div>
      </div>
    </div>  
  );
};

export default Id_card