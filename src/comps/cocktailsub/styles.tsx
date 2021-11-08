import styled from "styled-components"
import{ PageText as NavText} from "../../helpers/PageText"
import{ PageItemWrapper as NavItemWrapper} from "../../helpers/ItemWrapper"

export const Container = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    color: white;
    background-color: #131A22;
`

export const Wrapper = styled(NavItemWrapper)`
    display: flex;
    flex-direction: ${(props)=>props.flexDirection ?  props.flexDirection  : "column"};
    align-items:  ${(props)=>props.alignItems ? props.alignItems  : "flex-start"};
    padding: .1em;
    cursor:pointer;
    border:1px solid #131A22;

    &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }
`

export const Text = styled(NavText)`
    color:${(props)=>props.color ? props.color :"#ffffff" };
    font-size: ${(props)=>props.fontSize ? props.fontSize  : ".9em"
}
`