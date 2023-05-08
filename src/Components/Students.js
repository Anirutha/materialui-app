import Base from '../Base/Base'
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


//function
function Students({ students, setStudents }) {
  const history = useHistory();
  // delete functionality
  const deleteStudent = async (studId) => {

    const response = await fetch(`https://644b33bc4bdbc0cc3a8ce28c.mockapi.io/users/${studId}`, {
      method: "DELETE",
    });

    const data = await response.json()
    if (data) {
      const remainingStudents =
        students.filter((stud, idx) => stud.id !== studId)
      setStudents(remainingStudents)
    }
  }


  return (
    <Base
      title={"Students Dashboard"}
      description={"The page contains all students data"}
    >




      <div className='card-container'>
        {students.map((stud, idx) => (
          <Card sx={{ maxWidth: 200, height: 220 }} key={idx}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {stud.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stud.batch}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stud.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stud.qualification}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => history.push(`/edit/${stud.id}`)}  >edit</Button>
              <Button size="small" onClick={() => deleteStudent(stud.id)}>delete</Button>
            </CardActions>
          </Card>




        ))}
      </div>

    </Base>
  )
}

export default Students