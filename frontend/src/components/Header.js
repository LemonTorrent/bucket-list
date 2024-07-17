import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom'


export default function Header() {

	return (
		<AppBar position="static">
			<Toolbar>
				
                <div>
                    <CheckIcon />
                    <CheckIcon />
                    <CheckIcon />
                </div>

				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					Bucket List
				</Typography>
                <Link to="/">
                    <Button variant="contained" disableElevation>Home</Button>
                </Link>
                <Link to="/blog">
                    <Button variant="contained" disableElevation>Blog</Button>
                </Link>
                <Button variant="contained" disableElevation onClick={
                    () => {window.location.href = 'https://lemon-torrent-alpha.vercel.app/';}}>
                    Who is Nicole?</Button>
			</Toolbar>
		</AppBar>
	);
}
