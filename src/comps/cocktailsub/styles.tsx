import styled from "styled-components"


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 1em;
  width: 100%;
    align-items: justify;
    justify-content: space-evenly;
  @media only screen and (min-width: 30em) {
      flex-direction: row;
    }

`

export const CardContainer2ndRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const CocktailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;

  @media only screen and (min-width: 30em) {
       max-height: 20vh;
    }

    @media only screen and (min-width: 50em) {
        max-height: 30vh;
    }

`

export const CocktailImageTitleContainer = styled.div`
    text-align: left;
    line-height: 1.4em;
    padding-bottom: 1 rem;
    margin-top: 1.875 rem;
    margin-bottom: 1rem;
    position: relative;
    background-image: linear-gradient(to right,#AAA 0%to #AAA 100%);

    @media only screen and (min-width: 30em) {
      flex: 1 0 0;
      text-align: center;
    }
`

export const CocktailImgCard = styled.img`
  box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 20%);
  border: .1rem solid lightslategray;
  background-color: white;
  padding: 1rem;
  object-fit: cover;
    margin: 0 auto;
    @media only screen and (min-width: 30em) {
        max-height: 75vh;
    }
`

export const CocktailInner = styled.div`
    padding-right: 2rem;
    text-align: left;
    line-height: 1.4em;
    padding-bottom: 1 rem;
    margin-top: 1.875 rem;
    margin-bottom: 1rem;
    position: relative;
    background-image: linear-gradient(to right,#AAA 0%to #AAA 100%);

    @media only screen and (min-width: 30em) {
      flex: 1 0 0;
      padding: none;
    }

`

export const Spacer = styled.div`
    height: 1rem;
`
