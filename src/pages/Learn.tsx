import LearnContainer from '../containers/learn/Learn'
import { NavBarComp } from '../comps/nav/nav'


function Learn(): JSX.Element {

  return (
    <div>
       <NavBarComp/>
       <LearnContainer/>
    </div>
  )
}

export default Learn