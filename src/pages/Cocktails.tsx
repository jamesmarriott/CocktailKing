import {  Cocktailmenu } from '.././comps/cocktailmenu/cocktailmenu'
import cocktailsJSON from '.././fixtures/cockailsJSON.json'
import CocktailMenuHeader from '../comps/cocktailmenuheader/cocktail-card'
import { NavBarComp } from '../comps/nav/nav'
import { FooterComp } from '../comps/footer/footer'

function Cocktails(): JSX.Element {

  const cocktails = cocktailsJSON
  
  return (
    <div>
      <NavBarComp/>
      <CocktailMenuHeader/>
      <Cocktailmenu cocktails={cocktails}/>
      <FooterComp/>
    </div>
  )
}

export default Cocktails