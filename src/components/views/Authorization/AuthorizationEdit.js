import React, { useEffect, useState } from "react";
import { connect } from "react-redux"; import {
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
import { saveAuthorization, getAuthorizations } from "../../../redux/actions/authorizationActions";


function AuthorizationEdit({
    authorizations,
    getAuthorizations,
    saveAuthorization,
    history,
    ...props
}) {
    const [authorization, setAuthorization] = useState({ ...props.authorization });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (authorizations.length === 0) {
            getAuthorizations();
        }
        setAuthorization({ ...props.authorization });
    }, [authorizations.length, getAuthorizations, props.authorization]);

    function handleChange(event) {
        const { name, value } = event.target;
        setAuthorization(previousAuthorization => ({
            ...previousAuthorization,
            [name]: value
        }));

        validate(name, value);
    }

    function validate(name, value) {
        if (name === "name" && value === "") {
            setErrors(previousErrors => ({
                ...previousErrors,
                name: "İsim olmalıdır"
            }));
        } else {
            setErrors(previousErrors => ({
                ...previousErrors,
                name: ""
            }));
        }
    }

    function handleSave(event) {
        event.preventDefault();
        saveAuthorization(authorization).then(() => {
            history.push("/admin/authorization/authorization-list");
        });
    }

    return (
        <div className="content">
            <Card>
                <Form onSubmit={handleSave}>
                    <CardHeader>
                        <h5 className="title">{authorization.id ? "Edit" : "Add"} authorization</h5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col className="pr-md-1" md="6">
                                <FormGroup>
                                    <label>Name</label>
                                    <Input
                                        placeholder="Enter Name..."
                                        type="text"
                                        name="name"
                                        value={authorization.name}
                                        onChange={handleChange}
                                        error={errors.name}
                                    />
                                </FormGroup>
                            </Col>
                            <Col className="pr-md-1" md="6">
                                <FormGroup>
                                    <label>Description</label>
                                    <Input
                                        placeholder="Enter Description..."
                                        type="text"
                                        name="description"
                                        value={authorization.description}
                                        onChange={handleChange}
                                        error={errors.description}
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
    );
}

export function getAuthorizationById(authorizations, authorizationId) {
    var authorizationIdInt = parseInt(authorizationId)
    if (!authorizationIdInt)
        return null;
    let authorization = authorizations.find(authorization => authorization.id === authorizationIdInt) || null;
    return authorization;
}

function mapStateToProps(state, ownProps) {
    const authorizationId = ownProps.match.params.authorizationId;
    const authorization =
        authorizationId && state.authorizationListReducer.length > 0
            ? getAuthorizationById(state.authorizationListReducer, authorizationId)
            : {};
    return {
        authorization,
        authorizations: state.authorizationListReducer
    };
}

const mapDispatchToProps = {
    saveAuthorization,
    getAuthorizations
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorizationEdit);
