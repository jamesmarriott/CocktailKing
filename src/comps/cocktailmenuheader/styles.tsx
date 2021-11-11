import styled from "styled-components"


export const CocktailImgHeader = styled.img`
    width: 450px;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

export const HeaderPText = styled.p`
    font-size: clamp(1.1rem, 1vw + .2rem, 2.2rem);
    line-height: 1.3;

    `

export const CocktailHeaderContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 90%;
    margin: 0 auto;
    padding-bottom: 2rem;
    gap: 1rem;

    @media only screen and (min-width: 30em) {
       max-width: 60vw;
    }

    @media only screen and (min-width: 50em) {
        max-width: 50vw;
    }

`