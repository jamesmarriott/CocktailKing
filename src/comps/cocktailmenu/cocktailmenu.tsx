import { Link, Outlet } from 'react-router-dom'
import {Container, 
        Wrapper} from './styles'

type CocktailProps = {
    cocktails: {
       id: number,
       name: string,
       glass: string,
       ice: string,
       spirits: string,
       fruits: string,
       syrup: string,
       aro: string,
       juice: string,
       sugar: string,
       method: string,
       garnish: string
    }[]
}

export const Cocktailmenu = (props: CocktailProps) => {
    return (
        <Container>
            <Wrapper>
                {props.cocktails.map(cocktail => {
                    return(
                    <Link 
                    to={`/cocktails/${cocktail.id}`}
                    key={cocktail.id}>
                    {cocktail.name}
                    </Link>
                    )
                })}
            <Outlet/>
            </Wrapper>
        </Container>
    )
}

export default Cocktailmenu

//setup dynamic routing to each cocktail

// display all the cocktails in a nice grid
// when a user clicks on a the cocktail dynamically route and display the cocktail card
// with all the information.