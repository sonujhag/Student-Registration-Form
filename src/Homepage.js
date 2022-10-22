/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#f44336',
        },
    },
});
//{ } [ ]
const Homepage = () => {
    const [details, setDetails] = useState([]);
    const [status, setStatus] = useState([]);

    useEffect(() => {
        registerd();


    }, [])


    const registerd = () => {
        axios.get('http://localhost:4000/api/user/find').then((res) => {
            setDetails([...res.data.result]);
            //    console.log(res);
        })
            .catch(error => console.log("error"));
    }


    const deleteRec = (id) => {
        axios.delete('http://localhost:4000/api/user/delete/' + id)
            .then(() => registerd());
        console.log(status)
    }

    //Adding color



    return (
        <div style={{ width: '100%',height:'100%', margin: 'auto', backgroundColor: "black" }}>
            <div style={{ width: '80%', margin: 'auto', textAlign: 'center', backgroundColor: "black" }}>


                <div style={{ textAlign: "center", color: "#00bcd4", border: "1px solid black", backgroundColor: "#00bcd4" }}>
                    <h1 style={{ textAlign: "center", color: "#ba000d", fontFamily: "cursive" }}>Registerd Students Data </h1>
                </div>
                {

                    <TableContainer component={Paper} style={{ backgroundColor: "GrayText ", border: "1px solid black" }} >
                        <Table aria-label="simple table">

                            <TableHead >
                                <TableRow >
                                    <TableCell align="right">Student Name</TableCell>
                                    <TableCell align="right">Father's Name</TableCell>
                                    <TableCell align="right"> address</TableCell>
                                    <TableCell align="right"> phoneno</TableCell>
                                    <TableCell align="right"> School Name</TableCell>
                                    <TableCell align="right"> Action</TableCell>



                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {details && details.map((item) => (
                                    <TableRow>

                                        <TableCell align="right">{item.studentname}</TableCell>
                                        <TableCell align="right">{item.fathersname}</TableCell>
                                        <TableCell align="right">{item.address}</TableCell>
                                        <TableCell align="right">{item.phoneno}</TableCell>
                                        <TableCell align="right">{item.schoolname}</TableCell>
                                        <TableCell align="right">

                                            <Button variant="contained" href={"/update/" + item._id} style={{ margin: "10px",borderRadius:"10px" }}>Update</Button >

                                            <Button variant="contained" color="success" onClick={() => deleteRec(item.id)} style={{ margin: "10px",borderRadius:"10px" }}>Delete</Button>


                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                }
            </div>


        </div>

    )
}

export default Homepage
