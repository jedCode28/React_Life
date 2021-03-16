import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'
import {useState} from 'react'
import {useParams} from 'react-router-dom'

export default ({restaurant, foodId, showFood}) => {
  const [name, setName] = useState(restaurant.name)
  const [address, setAddress] = useState(restaurant.address)
  const handleSubmit = async () => {
    try{
      let res = await axios.put(`/api/changes/${changeId}/restaurants/${restaurant.id} `, {name, address})
      setName(res.data.name)
      setAddress(res.data.address)
      showFood()
    } catch(err){
      alert(err)
    }
  }
  return(
    <div>
      <h2>Edit Thing</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          defaultValue={name}
          placeholder="name"
          />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            defaultValue={address}
            />
        </Form.Field>
        <Button type='submit'>Edit</Button>
      </Form>
    </div>
  )
}