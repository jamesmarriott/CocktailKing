import {Container, 
        Wrapper} from './styles'
import cocktailsJSON from '../../fixtures/cockailsJSON.json'

type CocktailProps = {
    cocktailid: string
}

export const Cocktailsub = (props: CocktailProps) => {

    return (
        <Container>
            <Wrapper>
            {cocktailsJSON.map(cocktail => {
                if (cocktail.id === parseInt(props.cocktailid)) return (
                        <div key={cocktail.id}>
                        <h1>#{cocktail.id}: {cocktail.name}</h1>
                        <p>Glass: {cocktail.glass}</p>
                        <p>Ice: {cocktail.ice}</p>
                        <p>Spirit: {cocktail.spirits}</p>
                        <p>Syrup: {cocktail.syrup}</p>
                        <p>Aro: {cocktail.aro}</p>
                        <p>Juice: {cocktail.juice}</p>
                        <p>Sugar: {cocktail.sugar}</p>
                        <p>Method: {cocktail.method}</p>
                        <p>Garnish: {cocktail.garnish}</p>
                        </div>
                    )}
                )}
            </Wrapper>
        </Container>
    )
}

export default Cocktailsub 