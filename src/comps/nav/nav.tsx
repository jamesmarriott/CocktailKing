import { Link } from "react-router-dom"
import { NavBar, NavItem } from "./styles"


export const NavBarComp = () => {


    return (

         <NavBar>
            <Link to="/"><NavItem>Home</NavItem></Link>
            <Link to="/Cocktails"><NavItem>Cocktails</NavItem></Link>
            <Link to="/Learn"><NavItem>Learn</NavItem></Link>
            <Link to="/Settings"><NavItem>About</NavItem></Link>
        </NavBar>
    )
}

export default NavBarComp