// 
// This is currently a 2-field NewForm on a 'separate page'
// Replace 'Level 1' with whatever you are calling your independent variable name


import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

export default () => {
  const [name, setName] = useState('')
  const history = useHistory()
  const handleSubmit = async() => {
      try{
        await axios.post(`/api/changes`, {name})
      } catch(err){
        alert(err)
      }
  }
  return(
    <div>
      <div style={{}}>
        <h1>New Level 1 Form</h1>
        <Button onClick={history.goBack}>Go Back</Button>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <p>Name</p>
          <input value={name}
          onChange={(e) => setName(e.target.value)}
          defaultValue={name}
          placeholder='Name of Change'/>
        </Form.Field>
        <Button type='submit'>add</Button>
      </Form>
    </div>
  )
}