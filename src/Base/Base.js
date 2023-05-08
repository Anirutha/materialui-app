import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useHistory } from 'react-router-dom'



//Button
const Base = ({title, description, children}) => {
  const history = useHistory();
  return (
    <div className='main-component base-component'>
       <div className="nav-bar">
        <AppBar>
          <Toolbar>
       <Button 
        onClick={()=>history.push("/")}
       color="inherit">DashBoard</Button>
      <Button 
      onClick={()=>history.push("/students")}
      color="inherit">Student-List</Button>
     <Button
     onClick={()=>history.push("/add")}
     color="inherit">Add-student</Button>
      
      <Button 
      onClick={()=>history.push("/teachers")}
      color="inherit">Teacher-List</Button>
      
      <Button 
      onClick={()=>history.push("/addteachers")}
      color="inherit">Add-Teacher</Button>
      </Toolbar>
     </AppBar>
      </div> 

         <header>
         <Typography variant="h3" className="heading">
         {title}
      </Typography>
            </header>
         <main className='main-segment'>
             <h2>{description}</h2>
             <div>
               {children}
             </div>
         </main>
    </div>
  )
}

export default Base