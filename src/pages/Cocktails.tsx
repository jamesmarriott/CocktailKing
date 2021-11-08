import { Cocktailmenu } from '.././comps/cocktailmenu/cocktailmenu'
import cocktailsJSON from '.././fixtures/cockailsJSON.json'

function Cocktails(): JSX.Element {

  const cocktails = cocktailsJSON
  
  return (
    <div>
      <Cocktailmenu cocktails={cocktails}/>
    </div>
  )
}

export default Cocktails