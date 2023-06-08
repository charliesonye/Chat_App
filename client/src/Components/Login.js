import React, {useRef} from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function Login() {

  const idRef = useRef()
  return (
   <Container>
    <Form>
        <Form.Group>
            <Form.Label>Enter in ID</Form.Label>
            <Form.Control type= 'text' ref= {idRef} required/>
        </Form.Group>
        <Button type='submit'>Login</Button>
    </Form>
    Login
   </Container>
  )
}
