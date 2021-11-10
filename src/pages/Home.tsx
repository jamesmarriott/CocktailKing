import HomeContainer from '../containers/home/Home'
import { NavBarComp } from '../comps/nav/nav'
import { FooterComp } from '../comps/footer/footer'

function Home() {
    return (
        <div>
            <NavBarComp/>
            <HomeContainer/>
            <FooterComp/>
        </div>
    )
}

export default Home
