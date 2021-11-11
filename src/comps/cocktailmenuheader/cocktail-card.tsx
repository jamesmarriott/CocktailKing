
import { CocktailImgHeader, CocktailHeaderContainer, HeaderPText } from "./styles";

export const CocktailMenuHeader = () => {

    return (
    
        <CocktailHeaderContainer>   
        <CocktailImgHeader src="/images/cocktails.png"/>
        <h1>Classic Cocktails</h1>
        <HeaderPText>This page uses React Router's nested routes. As you click on each cocktail note how the URL changes and the layout updates. New content is displayed quickly. </HeaderPText>
        </CocktailHeaderContainer>
    )
}

export default CocktailMenuHeader