import { CockDisplay, CocktailInner, CocktailImgCard } from '../styles'
import cocktailsJSON from '../../fixtures/cockailsJSON.json'

type CocktailProps = {
    cocktailid: string
}

export const Cocktailsub = (props: CocktailProps) => {

    return (

        <CockDisplay>
            {cocktailsJSON.map(cocktail => {
                if (cocktail.id === parseInt(props.cocktailid)) return (
                        <div key={cocktail.id}>
                        <CocktailInner>
                        <h2>{cocktail.name}</h2>
                        <h4>A true classic</h4>
                        </CocktailInner>
                        <CocktailImgCard src={cocktail.url}/>
                        <h5>Image: Unplash</h5>
                        <CocktailInner>
                        <h6>Ingredients</h6>
                        <p>Glass: {cocktail.glass}</p>
                        <p>Ice: {cocktail.ice}</p>
                        <p>Spirit: {cocktail.spirits}</p>
                        <p>Syrup: {cocktail.syrup}</p>
                        <p>Aro: {cocktail.aro}</p>
                        <p>Juice: {cocktail.juice}</p>
                        <p>Sugar: {cocktail.sugar}</p>
                        </CocktailInner>
                        <CocktailInner>
                        <h6>Method</h6>
                        <p>{cocktail.method}</p>
                        <p>Garnish: {cocktail.garnish}</p>
                        </CocktailInner>
                        </div>
                    )
                    else return null
                }
                )}
        </CockDisplay>
    )
}

export default Cocktailsub 