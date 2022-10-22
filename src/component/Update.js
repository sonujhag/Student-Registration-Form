
import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useNavigate  } from 'react-router-dom';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


//[ ]{ } 
const Update = () => {
    // const url = "http://localhost:4000/api/user/createNew";
   //practice
   const [studentname,setStudentname ] = React.useState('');
   const [fathersname,setFathersname ] = React.useState('');
   const [address,setAddress ] = React.useState('');
   const [phoneno,setPhoneno ] = React.useState('');
   const [schoolname,setSchoolname ] = React.useState('');
   const params = useParams();
   const navigate = useNavigate();

   useEffect(()=>{ 
       getProductDetails(); 
   },[])

   const getProductDetails = async ()=>{ 
    console.warn(params)
    let result = await fetch(`http://localhost:4000/api/user/product/${params.id}`);
    result = await result.json();
    console.warn(result);
    setStudentname(result.studentname);
    setFathersname(result.fathersname);
    setAddress(result.address);
    setPhoneno(result.phoneno);
    setSchoolname(result.schoolname);
}

const updateData = async()=>{ 
    console.warn(studentname,fathersname,address,phoneno,schoolname);
    let result = await fetch(`http://localhost:4000/api/user/product/${params.id}`,{ 
        method:"Put",
        body:JSON.stringify({studentname,fathersname,address,phoneno,schoolname}),
        headers:{ 
            'Content-Type':"application/json"
        }
    });
    result=await result.json();
    console.warn(result); 
    navigate('/');
}

    

    return (
        <div style={{ width: '50%',height: '50%', textAlign: 'center',marginLeft:"300px", backgroundColor: "grey",marginTop:"50px",  borderRadius: "80px" }}>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '60ch' },
            }}
            noValidate
            autoComplete="off"
        >
               
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Student Name" fullWidth
                    type="text" 
                    value={studentname} name="studentname"onChange={(e)=>{setStudentname(e.target.value)}}
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Father's Name"
                    value={fathersname} onChange={(e)=>{setFathersname(e.target.value)}}                />

                <TextField
                    
                    label="Address"
                    value={phoneno} onChange={(e)=>{setAddress(e.target.value)}}
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Phone No"
                    value={phoneno} onChange={(e)=>{setPhoneno(e.target.value)}}
                    
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="School Name"
                    value={schoolname} onChange={(e)=>{setSchoolname(e.target.value)}}
                   
                />

                
            </div>
            <div>
            <Button variant="contained" onClick={updateData} style ={ {margin:"10px",borderRadius:"15px" }}>Update Reacord</Button >
                                 
            </div>
        </Box>
        </div>
    );
}

export default Update
