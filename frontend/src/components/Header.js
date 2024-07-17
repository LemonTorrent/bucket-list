import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";


export default function Header() {

    
    // let navigate = useNavigate(); 
        
    // function routeChange () {
    //     let path = `newPath`; 
    //     navigate(path);
    // }

	return (
		<AppBar position="static">
			<Toolbar>
				{/*Inside the IconButton, we 
					can render various icons*/}
				
                <div>
                    <CheckIcon />
                    <CheckIcon />
                    <CheckIcon />
                </div>

				{/* The Typography component applies 
					default font weights and sizes */}

				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					Bucket List
				</Typography>
                <Button color="inherit" onClick={this.routeChange}>Home</Button>
				<Button color="inherit">Blog</Button>
                <Button color="inherit">Who is Nicole?</Button>
			</Toolbar>
		</AppBar>
	);
}
