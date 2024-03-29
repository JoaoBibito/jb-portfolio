import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
    
 html{
    min-width: 320px;
    scroll-behavior: smooth;
    font-size: 65%;
    @media(max-width:1675px) {
        font-size: 60%;
    }
    @media(max-width:950px) {
        font-size: 60%;
    }

    @media(max-width:600px) {
        font-size: 50%;
    }

    @media(max-width: 420px) {  
        font-size: 48%;
    }
 }
 body {
    /* background-color: #121216; */
}

body a {
    text-decoration: none;
}`;
