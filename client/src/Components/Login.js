import React, {useRef} from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function Login({onIdSubmit}) {

  const idRef = useRef()

  function handleSubmit(e){
    e.preventDefault()
    onIdSubmit(idRef.current.value)
  }
  return (
   <Container>
    <Form onSubmit= {handleSubmit}>
        <Form.Group>
            <Form.Label>Enter in ID</Form.Label>
            <Form.Control type= 'text' ref= {idRef} required/>
        </Form.Group>
        <Button type= 'submit' className= 'mr-2'>Login</Button>
        <Button variant= 'secondary'>Create a New ID</Button>
    </Form>
    Login
   </Container>
  )
}
