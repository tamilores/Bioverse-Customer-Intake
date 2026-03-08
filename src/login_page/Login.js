import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./Login.css";
import { Box, Tab, Tabs, Paper, Button, TextField, Typography, 
    FormControlLabel, Checkbox, Divider } from "@mui/material";


function Login(){
    const navigate = useNavigate();
    const [role, setRole] = useState("user");
    const handleChange = (event, newValue) => { setRole(newValue);};
    const page = (role === "admin" ? "/admin-login" : "/user-login");

    return(
        <>
        <Box className= "login-container">
            <Tabs 
            className= "tabs"
            value={role}
            onChange={handleChange}>
                <Tab
                label="User"
                value="user" 
                className= "tab"/>

                <Tab
                label="Admin"
                value="admin"
                className= "tab" />
            </Tabs>

            <Paper className={`${role === "admin" ? "admin-form" : "user-form"}-container`}>
                <Typography variant="h3">log in</Typography>
                <TextField label="Email" type="email"/>
                <TextField label="Password" type="password" />
                <div>
                    <FormControlLabel control={<Checkbox />} label={<Typography variant="body2">Remember me</Typography>}/>
                    <Typography variant="body2">Forgot password?</Typography>
                </div>              
                <Button
                variant="contained"
                className="login-button"
                onClick={() => navigate(page)} >
                    Login
                </Button>
                <Divider>
                    <Typography variant="body2" color="text.secondary">OR</Typography>
                </Divider>
                <Typography variant="body2" color="text.secondary">Sign Up</Typography>
            </Paper>
        </Box>
        </>
    )   
}

export default Login;