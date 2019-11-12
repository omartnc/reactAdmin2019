import React from "react";
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
  Col
} from "reactstrap";

const UserProfile = ({  user, onSave, onChange,errors }) => {
    return (
      <>
        <div className="content">
              <Card>
                  <Form  onSubmit={onSave}>
                <CardHeader>
                  <h5 className="title">{user.id ? "Edit" : "Add"} User</h5>
                </CardHeader>
                <CardBody>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Full Name</label>
                          <Input
                            defaultValue=""
                            placeholder="Enter Full Name..."
                            type="text"
                            name="fullName"
                            value={user.fullName}
                            onChange={onChange}
                            error={errors.fullName}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            defaultValue=""
                            placeholder="Enter Email..."
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={onChange}
                            error={errors.email}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Password</label>
                          <Input
                            defaultValue=""
                            placeholder="Enter Password..."
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={onChange}
                            error={errors.password}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Password Again</label>
                          <Input
                            defaultValue=""
                            placeholder="Enter Password..."
                            type="password"
                            name="passwordAgain"
                            value={user.passwordAgain}
                            onChange={onChange}
                            error={errors.passwordAgain}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
                 </Form>
              </Card>
        </div>
      </>
    );
  
}

export default UserProfile;
