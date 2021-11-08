import {Container, 
        Wrapper} from './styles'
import { useParams } from 'react-router-dom'
import { Cocktailsub } from '.././cocktailsub/cocktailsub'

export const Cocktailcard = (props: CocktailProps) => {

    let params = useParams()

    console.log(params.cocktailid)

    return (
        <Container>
            <Wrapper>
                <Cocktailsub cocktailid={params.cocktailid}/>
            </Wrapper>
        </Container>
    )
}

export default Cocktailcard

/// 