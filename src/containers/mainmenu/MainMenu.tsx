import { Link } from "react-router-dom";

function MainMenu(): JSX.Element  {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Cocktails">Cocktails</Link>
            <Link to="/Test">Test</Link>
            <Link to="/Settings">Settings</Link>
        </div>
    )
}

export default MainMenu
