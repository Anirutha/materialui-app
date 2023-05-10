import React from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material'

//function
function Nopage() {
  const history = useHistory()
  return (
    <Base
      title={"404 NO Page Content"}
      description={"Wrong url please click below button"}
    >
      <Button
        onClick={() => history.push("/")}
      >
        Go to DashBoard
      </Button>
    </Base>
  )
}

export default Nopage