import axios from 'axios';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

//[ ]{ } 
const Form = () => {
    // const url = "http://localhost:4000/api/user/createNew";
    const navigate = useNavigate();
    const [data, setData] = useState({
        studentname: " ",
        fathersname: " ",
        address: " ",
        phoneno: " ",
        schoolname: " "

    });

    const initialValue = {
        error: false,
        isLoading: false,
        validation: {},
        message: ''
    };

    const [response, setResponse] = useState(initialValue);


    const submit = () => {

        console.log(data);
        axios.post('http://localhost:4000/api/user/createNew', {
            studentname: data.studentname,
            fathersname: data.fathersname,
            address: data.address,
            phoneno: data.phoneno,
            schoolname: data.schoolname
        }).then(res => {
            console.log(res.data)
            setResponse({ ...initialValue, isLoading: false, error: false, validation: {}, message: 'Success' });
            navigate('/');
        }).catch(err => {
            // console.log(err)
            // {"status":false,"message":"form validation error","errors":{"field":"studentname","message":"Invalid value"}}
            setResponse({ ...initialValue, isLoading: false, error: true, validation: err.response.data.errors[0], message: 'validation error' });
        })


    }
    //get the details of college student


    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
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
                    {response && response.validation && response.validation.msg && <Alert severity="error">{response.validation.msg} in {response.validation.param}</Alert>}

                    <div>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Student Name" fullWidth
                            value={data.studentname} name="studentname" onChange={handleInput}
                        />

                        <TextField
                            id="outlined-multiline-flexible"
                            label="Father's Name"
                            value={data.fathersname} name="fathersname" onChange={handleInput}
                        />

                        <TextField
                            id="outlined-multiline-flexible"
                            label="Address"
                            value={data.address} name="address" onChange={handleInput}
                        />

                        <TextField
                            id="outlined-multiline-flexible"
                            label="Phone No"
                            value={data.phoneno} name="phoneno" onChange={handleInput}
                        />

                        <TextField
                            id="outlined-multiline-flexible"
                            label="School Name"
                            value={data.schoolname} name="schoolname" onChange={handleInput}
                        />


                    </div>
                    <div >
                        <Button variant="contained" onClick={submit} style={{borderRadius:"10px",marginBottom:"5px" } } >submit</Button>
                    </div>
                </Box>
            </div>

       
    );
}

export default Form
