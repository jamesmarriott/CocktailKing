import styled from "styled-components"

export const FooterBar = styled.ul`
background: linear-gradient(#000 0,#031621 64.2%,#06273A 100%);
display: flex;
color: white;
list-style: none;
justify-content: space-evenly;
height: 3.75rem;
position: sticky;
z-index: 10;
top: 0;
`

export const FooterItem = styled.li`
justify-content: space-between;
padding-top: 1rem;
padding-bottom: 1rem;
font-size: 1.2rem;
font-weight: 600;
text-transform: uppercase;
color: #CE7C2E;
font-family: "Montserrat", Helvetica,sans-serif;
`
