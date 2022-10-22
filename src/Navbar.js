import React from 'react'
// import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div style={{textAlign:"center"}}>
       
        {/* <Link to="/form">Add Students</Link> */}
        <Button variant="contained" href={"/form" } style={{ margin: "10px",borderRadius:"16px" }}>Add Students</Button >

    </div>
  )
}

export default Navbar