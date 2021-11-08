import styled from "styled-components"
import{ PageText as NavText} from "../../helpers/PageText"
import{ PageItemWrapper as NavItemWrapper} from "../../helpers/ItemWrapper"

export const Container = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    text-align: center;
    align-items: center;
    justify-items: center;
    justify-content:space-evenly;
    background-color: #131A22;
`

export const Wrapper = styled(NavItemWrapper)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto);
    gap: 1em;
    width: 90%;
    padding: 0 1rem 0 1rem;
    margin: 0 auto;

    @media only screen and (min-width: 40em) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 50em) {
        grid-template-columns: repeat(4, 1fr);

    }
    @media only screen and (min-width: 60em) {
        grid-template-columns: repeat(5, 1fr);

    }
`

export const CocktailImg = styled.img`

border-radius: .5em;
box-shadow: 0 .3em .3em rgb(0 0 0 / 0.2);
opacity: 0.7;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media only screen and (min-width: 30em) {
       max-height: 20vh;
    }

    @media only screen and (min-width: 50em) {
        max-height: 30vh;
    }

`

export const ItemWrapper = styled.div`
position: relative;

&:hover ${CocktailImg} {
   opacity: 1;
    }
`

export const InfoOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
`


export const Text = styled(NavText)`
    color: white;
    line-height: .4;
    font-size: clamp(1rem, 1vw + .5rem, 4rem);

    &:first-child {
    font-family: 'ostrich-heavy';
    font-size: clamp(1.5rem, 1vw + 1rem, 4rem);
    }

    @media only screen and (min-width: 40em) {
       line-height: .6;
    }

`