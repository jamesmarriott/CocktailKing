import { CockDisplay, CocktailInner, CocktailImgCard, Spacer } from '../styles'
import cocktailsJSON from '../../fixtures/cockailsJSON.json'
import {useEffect, useRef , useLayoutEffect} from 'react'
import { gsap } from "gsap";

type CocktailProps = {
    cocktailid: string
}

export const Cocktailsub = (props: CocktailProps) => {
    
    const divRef = useRef();

     useLayoutEffect(() => {
        gsap.fromTo(divRef.current, {
        opacity: 0.2,
        }, {
        opacity: 1,
        duration: 1,
        scale: 1
        });
    });
    
    useEffect(() => {
        divRef.current.scrollIntoView()
    })

    return (
        <CockDisplay ref={divRef}>
            {cocktailsJSON.map(cocktail => {
                if (cocktail.id === parseInt(props.cocktailid)) return (
                        <div key={cocktail.id}>
                        <CocktailInner>
                        <h2>{cocktail.name}</h2>
                        <h4>A true classic</h4>
                        </CocktailInner>
                        <Spacer/>
                        <CocktailImgCard src={cocktail.url}/>
                        <h5>Image: Unplash</h5>
                        <CocktailInner>
                        <Spacer/>
                        <Spacer/>
                        <h6>Ingredients</h6>
                        <p>Glass: {cocktail.glass}</p>
                        <p>Ice: {cocktail.ice}</p>
                        <p>Spirit: {cocktail.spirits}</p>
                        <p>Syrup: {cocktail.syrup}</p>
                        <p>Aro: {cocktail.aro}</p>
                        <p>Juice: {cocktail.juice}</p>
                        <p>Sugar: {cocktail.sugar}</p>
                        </CocktailInner>
                        <Spacer/>
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