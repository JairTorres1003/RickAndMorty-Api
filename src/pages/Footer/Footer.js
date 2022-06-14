import React from "react";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">
                <span>&copy;</span> 2022 - <a href="https://rickandmortyapi.com/" target="_Blank" rel="noreferrer">Rick and Morty</a> / <a href="https://github.com/JairTorres1003/" target="_Blank" rel="noreferrer">Jair Torres.</a>
            </p>
        </footer>
    );
}

export default Footer;