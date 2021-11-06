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

export const Cocktailcard = (props: CocktailProps) => {
    return (
        <Container>
            <Wrapper>
                {props.cocktails.map(cocktail => {
                    return (
                        <div key={cocktail.id}>
                        <h1>{cocktail.id}: {cocktail.name}</h1>
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
                    )
                })}
            </Wrapper>
        </Container>
    )
}

export default Cocktailcard