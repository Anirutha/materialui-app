import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom';


//function
function UpdateTeachers({teachers, setTeachers}) {
    const {id} = useParams();
     const editTeachers = teachers[id]
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const history = useHistory();

    useEffect(()=>{
       setName(editTeachers.name)
       setBatch(editTeachers.batch)
       setGender(editTeachers.gender)
       setQualification(editTeachers.qualification)
    }, [editTeachers])

    async function UpdateTeachers (){
         const updatedObject = {
            name : name,
            batch : batch,
            gender: gender,
            qualification :qualification
         }
     const response = await fetch(`https://6454e410a74f994b334bcd96.mockapi.io/teachers/${editTeachers.id}`, {
      method:"PUT",
      body:JSON.stringify(updatedObject),
      headers:{
        "Content-Type":"application/json"
      }
     })

     const data = await response.json()
     if(data){
         console.log(updatedObject)
         teachers[id] = updatedObject
         setTeachers([...teachers])
         history.push("/teachers")
     }
    }

  return (
    <Base
    title={"Edit a Teacher"}
    description={"Edit Teacher data here"}
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
    onClick={UpdateTeachers}
    >Update Teachers</button>
</div>
</Base>
  )
}

export default UpdateTeachers