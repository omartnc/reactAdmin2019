import React, { Component } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Container
} from "reactstrap";

export default class Login extends Component {
    render() {
        return (
           
        <div className="min-h-fullscreen bg-img center-vh p-20  pace-done" style={{backgroundImage:"url(http://dogutech.xyz/Contents/Files/2019/06/11/0b61a1-flz3.jpg)"}}>
            <Container>
              <Card>
                <CardHeader>
                  <h5 className="title">Login</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label>
                            Email address
                          </label>
                          <Input placeholder="mike@email.com" type="email" />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup>
                          <label>Password </label>
                          <Input
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                   </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Login
                  </Button>
                </CardFooter>
              </Card>
              </Container>
        </div>
      
        )
    }
}
