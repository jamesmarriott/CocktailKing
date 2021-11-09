import { Link } from "react-router-dom";
import { NavBar, NavItem, AppContainer, MainMenuContainerOuter, MainMenuContainerInner, MainSection } from "./styles";


function MainMenu(): JSX.Element  {
    return (
        <AppContainer>
        <NavBar>
        <Link to="/"><NavItem>Home</NavItem></Link>
        <Link to="/Cocktails"><NavItem>Cocktails</NavItem></Link>
        <Link to="/Test"><NavItem>Games</NavItem></Link>
        <Link to="/Settings"><NavItem>About</NavItem></Link>
        </NavBar>
        <MainMenuContainerOuter style={{backgroundImage: "url(https://source.unsplash.com/2nPS_9TV0VA) , linear-gradient(to right, rgba(58, 61, 62, 1) 0%, rgba(58, 61, 62, 1) 100%)"}}>
            <MainMenuContainerInner>
            <h4>Become a</h4>
            <h1>Cocktail Master</h1>
            <h3>Perfect the art of making perfect cocktails</h3>
            </MainMenuContainerInner>
        </MainMenuContainerOuter>
        <MainSection>
            <h2>asdas</h2>
        </MainSection>
        </AppContainer>
    )
}

export default MainMenu
