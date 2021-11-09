
import { useParams } from 'react-router-dom'
import { Cocktailsub } from '.././cocktailsub/cocktailsub'

export const Cocktailcard = (props: CocktailProps) => {

    let params = useParams()

    console.log(params.cocktailid)

    return (
        <Cocktailsub cocktailid={params.cocktailid}/>
    )
}

export default Cocktailcard