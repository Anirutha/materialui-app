import { Switch,Route } from 'react-router-dom';
import './App.css';
import Students from './Components/Students.js';
import AddStudents from './Components/AddStudents';
import UpdateStudents from './Components/UpdateStudents';
import { useEffect, useState } from 'react';
import Nopage from './Components/Nopage';
import DashBoard from './Components/DashBoard';
import { Redirect } from 'react-router-dom';

import Teachers from './Components/Teachers';
import AddTeachers from './Components/AddTeachers';
import UpdateTeachers from './Components/UpdateTeachers';


function App() {
  const [students, setStudents] = useState([]);
  const [teachers,setTeachers]=useState([]);

  useEffect(()=>{
    const getStudents = async () =>{
        const response = await fetch("https://644b33bc4bdbc0cc3a8ce28c.mockapi.io/users", {
          method:"GET",
        }); 
        const data = await response.json();
        if(data){
          setStudents(data)
        }
    }
    getStudents();
  }, [])

  useEffect(()=>{
    const getTeachers = async () =>{
        const response = await fetch("https://6454e410a74f994b334bcd96.mockapi.io/teachers", {
          method:"GET",
        }); 
        const datas = await response.json();
        if(datas){
          setTeachers(datas)
        }
    }
    getTeachers();
  }, [])

  return (
    <div className="App">
       <Switch>
        {/* Exact path first page to load */}
         <Route exact path="/">
             <DashBoard/>
         </Route>

          <Route path="/students">
            <Students
            students = {students}
            setStudents ={setStudents}
            />
          </Route>

          <Route path="/details">
             <Redirect to ="/students"/>
          </Route>

         <Route path="/add">
            <AddStudents
            students = {students}
            setStudents ={setStudents}
            />
         </Route>

         <Route path="/edit/:id">
            <UpdateStudents
              students = {students}
              setStudents ={setStudents}
            />
         </Route>

         <Route path="/teachers">
            <Teachers
            teachers = {teachers}
            setTeachers ={setTeachers}
            />
          </Route>

          <Route path="/addteachers">
            <AddTeachers
            teachers = {teachers}
            setTeachers ={setTeachers}
            />
          </Route>

          <Route path="/updateteachers/:id">
            <UpdateTeachers
            teachers = {teachers}
            setTeachers ={setTeachers}
            />
          </Route>

          <Route path="**">
              <Nopage/>
          </Route>

       </Switch>
    </div>
  );
}

export default App;
