import { Link, Outlet } from 'react-router-dom'
import {Container,
        ItemWrapper,
        Wrapper, 
        Text,
        CocktailImg,
        InfoOverlay
        } from './styles'

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
       garnish: string,
       url: string
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
                    <ItemWrapper>
                        <CocktailImg src={cocktail.url}/>
                            <InfoOverlay>
                                <Text>{cocktail.name}</Text>
                            </InfoOverlay>
                    </ItemWrapper>
                    </Link>
                    )
                })}
            <Outlet/>
            </Wrapper>
        </Container>
    )
}

export default Cocktailmenu

