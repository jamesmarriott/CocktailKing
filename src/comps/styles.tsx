import styled from "styled-components"
// import{ PageText as NavText} from "../helpers/PageText"
// import{ PageItemWrapper as NavItemWrapper} from "../helpers/ItemWrapper"

export const Container = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    align-items: center;
    justify-items: center;
    justify-content:space-evenly;
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

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);

        
    @media only screen and (min-width: 50em) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and (min-width: 60em) {
        grid-template-columns: repeat(6, 1fr);
    }
`

export const ItemWrapper = styled.div`
position: relative;
border: 1px solid #CCC;
height: 30vh;
overflow: hidden;
padding: .5em;
margin-bottom: 1rem;
box-shadow: 1px 1px 6px 0 rgb(0 0 0 / 9%);

&:hover ${CocktailImg}{
    scale: 1.1
    }
`
export const CockDisplay = styled.div`

    // two columns
    grid-row: 1 / 2;
    grid-column: 1 / 3;

    // four columns
    @media only screen and (min-width: 45em) {
        grid-row: 1 / 4;
        grid-column: 1 / 4;
    }

    // six columns
    @media only screen and (min-width: 60em) {
        grid-row: 1 / 3;
        grid-column: 1 / 5;
    }
`

export const InfoOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
`

export const Text = styled.h3`
padding-bottom: 1rem;
`

export const TextSub = styled.h4`
padding-bottom: .2rem;
`
