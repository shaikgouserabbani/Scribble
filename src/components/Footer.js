import React from "react";

const Footer = () =>{
    const currentYear = new Date().getFullYear();
    return (
        <React.Fragment>
            <footer> 
                <p>copy right  ⓒ {currentYear}</p>
            </footer>
        </React.Fragment>
    );
};

export default Footer;