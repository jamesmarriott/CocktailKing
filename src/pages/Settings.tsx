import { Cocktailcard } from '.././comps/card/cocktail-card'
import cocktailsJSON from '.././fixtures/cockailsJSON.json'

function Settings(): JSX.Element {

  const cocktails = cocktailsJSON
  
  return (
    <div>
      <Cocktailcard cocktails={cocktails}/>
    </div>
  )
}

export default Settings