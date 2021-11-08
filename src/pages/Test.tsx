import { Cocktailcard } from '.././comps/card/cocktail-card'
import cocktailsJSON from '.././fixtures/cockailsJSON.json'

function Test(): JSX.Element {

  const cocktails = cocktailsJSON
  
  return (
    <div>
      <Cocktailcard cocktails={cocktails}/>
    </div>
  )
}

export default Test