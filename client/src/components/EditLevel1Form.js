

// This is a toggled edit-form for level-1 has-many models
// Replace 'change' with relevant level-1 variable names


import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

export default (props) => {
  const {defaultName} = props
  const {id} = useParams()
  const [name, setName] = useState(defaultName)
  const history = useHistory()
  const handleSubmit = async() =>{
    try{
      let res = await axios.put(`/api/changes/${id}`, {name})
      setName(res.data)
      history.push('/')
    } catch(err){
      alert(err)
    }
  }
  return(
    <div>
      <div>
        <h1> Edit Form</h1>
        <h2> Editing change: {defaultName}</h2>
        <Button onClick={history.goBack}>Go Back</Button>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <p>Name</p>
          <input value={name}
          onChange={(e) => setName(e.target.value)}
          defaultValue={defaultName}
          placeholder='Edit' />
        </Form.Field>
        <Button type='submit'>Edit</Button>
      </Form>
    </div>
  )
}