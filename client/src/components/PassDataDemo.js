import {useParams, useLocation, useHistory} from 'react-router-dom'
  const PassData = () => {
     const {id} = useParams()
     const {thingToPass} = useLocation()
     const history = useHistory()
    return(
        <>
        <p onClick={()=>history.goBack()}>back</p>
        <h1>PassData Demo</h1>
        <p> id: {id}</p>
        <p> thingToPass (from navbar link): {thingToPass}</p>
        </>
    )
}
export default PassData