import styled from "styled-components"

export const AppContainer = styled.main`
    background: #06273A;
    width: 100vw;
`

export const NavBar = styled.ul`
background: linear-gradient(#000 0,#031621 64.2%,#06273A 100%);
display: flex;
color: white;
list-style: none;
justify-content: space-evenly;
height: 3.75rem;
position: sticky;
top: 0;
`

export const NavItem = styled.li`
justify-content: space-between;
padding-top: 1rem;
padding-bottom: 1rem;
font-size: 1.2rem;
font-weight: 600;
text-transform: uppercase;
color: #CE7C2E;
font-family: "Montserrat", Helvetica,sans-serif;
`

export const MainMenuContainerOuter = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75vh;
    text-align: center;
    color: #F4F3F2;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: 6px;
`

export const MainMenuContainerInner = styled.section`

    width: 80vw;
    padding: 1.5rem 0 1.5rem 0;
	border: 8px solid #DE9B72;
    background: rgb(6,39,58);
    background: linear-gradient(90deg, rgba(255, 255, 255, .8) 0%, rgba(255, 255, 255,.6) 100%);

@media only screen and (min-width: 40em) {
       width: 70vw;
    }

    @media only screen and (min-width: 50em) {
        width: 60vw;
    }

    @media only screen and (min-width: 60em) {
        width: 50vw;
    }

`

export const MainSection = styled.section`
    background: wheat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 2rem;
    color: #F4F3F2;
    height: 50vh;
`
