import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
    }
    #root{
        margin:0 auto;
    }

    body,
    h1,
    h2,
    h3,
    p,
    blockquote {
    }
    
    img {
    display: block;
    max-width: 100%;
    }

    h1{
        line-height: 1.6;
        font-weight: 900;
        line-height: 1;
        font-size: clamp(3.5rem, 6vw + 1rem, 12rem);
    }

    h2 {
        font-size: var(--fs-lg);
        line-height: 1.2;
        margin: 1rem 1rem 0rem 1rem;
        font-size: clamp(2rem, 3vw + 1rem, 6rem);
    }
`