import { Cocktailcard } from './comps/card/cocktail-card'
import cocktailsJSON from './fixtures/cockailsJSON.json'

function App(): JSX.Element {

  const cocktails = cocktailsJSON
  
  return (
    <div className="App">
      <Cocktailcard cocktails={cocktails}/>
    </div>
  )
}

export default App