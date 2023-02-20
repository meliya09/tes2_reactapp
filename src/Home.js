import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
    const [displayusername, displayusernameupdate] = useState('');
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/login');
        } else {
            displayusernameupdate(username);
        }

        let jwttoken = sessionStorage.getItem('jwttoken');
        fetch("https://localhost:44308/Customer", {
            headers: {
                'Authorization': 'bearer ' + jwttoken
            }
        }).then((res) => {
            return res.json();
        }).then((resp) => {
            listupdate(resp);
        }).catch((err) => {
            console.log(err.messsage)
        });

    }, []);

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Technopartner Indonesia
                        </Typography>
                        <Link  style={{ float: 'right' }} to={'/home'}>Home</Link>
                        <Link style={{ float: 'right' }} to={'/menu'}>Menu</Link>
                        <Link style={{ float: 'right' }} to={'/'}>Logout</Link>
                    </Toolbar>
                </AppBar>
            </Box>
           
        </div>
    );
}

export default Home;