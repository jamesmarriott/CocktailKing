import { Link, Outlet } from 'react-router-dom'
import {Container,
        ItemWrapper,
        Wrapper, 
        Text,
        TextSub,
        CocktailImg,
        InfoOverlay,
        } from '.././styles'

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
                            </InfoOverlay>
                    </ItemWrapper>
                    <TextSub>Gin</TextSub>
                    <Text>{cocktail.name}</Text>
                    </Link>
                    )
                })}
            <Outlet/>
            </Wrapper>
        </Container>
    )
}

export default Cocktailmenu

// when a user clicks on a cocktail hide the others in a random fade out 
// pattern
// slide the selected receipe into view
// all the others fade out // the chosen cocktail image slides to the top center
// the cocktail info card slides 

// send the click event as props
// is there a way to figure out which grid box the selected image is in?
// if so we could slide the image

// make cocktail card look nice

// when the user clicks on card back to top