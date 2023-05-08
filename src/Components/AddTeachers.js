import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'



 //Function

function AddTeachers({teachers, setTeachers}) {
  const history = useHistory()
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")

const createStudent = async () =>{
    // creating object from input states
    const newStudents = {
      name:name,
      batch:batch,
      qualification:qualification,
      gender: gender,
}

const response = await fetch("https://6454e410a74f994b334bcd96.mockapi.io/teachers", {
  method:"POST",
  body:JSON.stringify(newStudents),
  headers :{
    "Content-Type":"application/json"
  },
})
const datas= await response.json()
  setTeachers([...teachers, datas])
  history.push("/teachers")
}

  return (
    <Base
    title={"Add New Teachers"}
    description={"We can able to add new teachers data here"}
    >
    <div>
        <input
        placeholder='Enter Name'
        type ="text"
        value = {name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input
        placeholder='Enter Batch'
        type ="text"
        value ={batch}
        onChange={(e)=>setBatch(e.target.value)}
        />

        <input
        placeholder='Enter Gender'
        type ="text"  
        value ={gender}
        onChange={(e)=>setGender(e.target.value)}
        />

        <input
        placeholder='Enter Qualification'
        type ="text" 
        value= {qualification}
        onChange={(e)=>setQualification(e.target.value)}
        />

        <button 
        onClick={createStudent}
        >Add Teachers</button>
    </div>
    </Base>
  )
}

export default AddTeachers