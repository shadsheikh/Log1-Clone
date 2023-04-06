import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import logo from "../assets/logo.png"
import './style.css'

function header(){
    const displayDesktop = () => {
        return (
        <Toolbar>
            <img src={logo} alt="Logo" width={100} />
        </Toolbar>
        );
    };

    return(
    <header>
    <AppBar>{displayDesktop()}</AppBar>
    </header>
    )
}

export default header;