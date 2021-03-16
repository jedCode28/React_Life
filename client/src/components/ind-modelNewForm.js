
// This is a newForm for models with no dependencies or parents
// This form shows a different page

import axios from 'axios'
import {useState} from 'react'
import { useHistory } from 'react-router'
import {Button, Form} from 'semantic-ui-react'

export default () => {
  const [name, setName]= useState('')
  // const [specialty, setSpecialty] = useState('')
  const history = useHistory() 
  const handleSubmit = async () => {
    try{
      await axios.post(`/api/changes`, {name, otherKey})
      history.push(`/changes`)
    } catch(err){
      alert('error')
    }
  }
  return(
    <div>
      <h1>New Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Name' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}