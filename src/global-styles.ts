import {createGlobalStyle} from "styled-components"
import "@fontsource/lusitana"
import "@fontsource/montserrat"

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Lusitana", Georgia, 'Times New Roman', Times, serif;
        text-decoration: none;
        color: inherit;
        }
    
    body{
        background-color: #F4F3F3;
        color: #000;
    }

    img {
    display: block;
    max-width: 100%;
    }

    h1{
        line-height: 1.6;
        line-height: 1;
        font-weight: 400;
        font-size: clamp(3rem, 4vw + 1rem, 10rem);
        color: #781905;
        font-family: "Lusitana", Georgia, 'Times New Roman', Times, serif;
    }

    h2{
        line-height: 1.6;
        color: #07591c;
        line-height: 1;
        font-weight: 00;
        font-size: clamp(2rem, 4vw + 1rem, 3rem);
        font-family: "Lusitana", Georgia, 'Times New Roman', Times, serif;
    }

    h3 { 
        line-height: 1.2;
        font-size: clamp(1.2rem, 1vw + .5rem, 4rem);
        font-weight: 200;
        color: #0a5921;
         font-family: "Lusitana", Georgia, 'Times New Roman', Times, serif;
    }

    h4 {
        font-weight: 800;
        letter-spacing: .1em;
        font-size: clamp(.4rem, 1rem, 3rem);
        font-family: "Montserrat", Helvetica,sans-serif;
        color: #9D2D2A;
        text-transform: uppercase;
    }

    h5 { 
        line-height: 1.5;
        font-size: clamp(1rem, 1vw + .2rem, 2rem);
        color: rgb(157, 42, 44);
        font-style: italic;
        font-weight: 200;
        font-family: "Lusitana", Georgia, 'Times New Roman', Times, serif;
    }

    h6 { 
        line-height: 1.5rem;
        padding-bottom: .2em;
        color: #4e6955;
        font-size: clamp(1.2rem, 1vw + 1rem, 2rem);
        background-image: repeating-linear-gradient(to right,#AAA 0,#AAA 33.33%,transparent 33.33%,transparent 100%);
        background-position: left bottom;
        background-repeat: repeat-x;
        background-size: 5.25px 1.75px;

        font-weight: 500;
        font-family: "Lusitana", Georgia, 'Times New Roman', Times, serif;
    }

    p{
        line-height: 1.5em;
        font-size: clamp(1rem, 1vw + .1rem, 2rem);
        padding: .5em 0 .5em 0;
    }

`