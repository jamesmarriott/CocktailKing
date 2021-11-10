import { AppContainer, MainMenuContainerOuter, MainMenuContainerInner, MainSection } from "./styles";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function HomeContainer(): JSX.Element  {

    const heroRef = useRef()
    const q = gsap.utils.selector(heroRef);

    useEffect(()=>{
        gsap.timeline()
        .from(q(".box-1"), {opacity: 0, y:-10, duration: .2, delay:.2})
        .from(q(".box-2"), {opacity:0, stagger:0.1, duration: 1, scale:0.05, ease:"back"})
        .from(q(".box-3"), {x:20, opacity:0, stagger:0.1, duration:0.6, ease:"in"})    
    })

    return (
        <AppContainer>
        <MainMenuContainerOuter style={{backgroundImage: "url(https://source.unsplash.com/2nPS_9TV0VA) , linear-gradient(to right, rgba(58, 61, 62, 1) 0%, rgba(58, 61, 62, 1) 100%)"}}>
            <MainMenuContainerInner ref={heroRef}>
            <h4 className="txt-box box-1">Become a true</h4>
            <h1 className="txt-box box-2">Cocktail Master</h1>
            <h3 className="txt-box box-3">Perfect the art of making cocktails</h3>
            </MainMenuContainerInner>
        </MainMenuContainerOuter>
        <MainSection>
            <h2>Seasonal Favorites</h2>
        </MainSection>
        </AppContainer>
    )
}

export default HomeContainer

// wait until image fetched and load
// when user scrolls down bring things in - seasonal favorites
// animate overlay that looks like drinks swirling