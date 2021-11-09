import {  Cocktailmenu } from '.././comps/cocktailmenu/cocktailmenu'
import cocktailsJSON from '.././fixtures/cockailsJSON.json'
import CocktailMenuHeader from '../comps/cocktailmenuheader/cocktail-card'

function Cocktails(): JSX.Element {

  const cocktails = cocktailsJSON
  
  return (
    <div>
      <CocktailMenuHeader/>
      <Cocktailmenu cocktails={cocktails}/>
    </div>
  )
}

export default Cocktails