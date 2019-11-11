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

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
              <Card>
                  <Form>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Full Name</label>
                          <Input
                            defaultValue="Mike"
                            placeholder="Company"
                            type="text"
                            name="fullName"
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
}

export default UserProfile;
