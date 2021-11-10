
import { CocktailImgHeader, CocktailHeaderContainer } from "./styles";

export const CocktailMenuHeader = () => {

    return (
    
        <CocktailHeaderContainer>   
        <CocktailImgHeader src="/images/cocktails.png"/>
        <h1>Classic Cocktails</h1>
        <h3>This page uses React Router's nested routes.</h3>
        <h3>As you click on each cocktail note how the URL changes and the layout updates.</h3>
        <h3>New content is displayed quickly. </h3>
        </CocktailHeaderContainer>
    )
}

export default CocktailMenuHeader