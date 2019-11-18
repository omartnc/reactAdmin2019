import React, { useEffect, useState } from "react";
import { connect } from "react-redux"; import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Row,
    Col
} from "reactstrap";
import { saveAuthorizationItems, getAuthorizationItems } from "../../../redux/actions/authorizationItemActions";


function AuthorizationItemEdit({
    authorizationItems,
    getAuthorizationItems,
    saveAuthorizationItems,
    history,
    ...props
}) {
    const [authorizationItem, setAuthorizationItem] = useState({ ...props.authorizationItem });
    useEffect(() => {
        const authorizationId = props.match.params.authorizationId;
        var authorizationIdInt = parseInt(authorizationId)
        if (!authorizationIdInt)
            return null;

        if (!authorizationItems.role || authorizationItems.role.id !== authorizationIdInt) {
            getAuthorizationItems(authorizationId);
            setAuthorizationItem({ ...props.authorizationItem });
        }

    }, [authorizationItems, getAuthorizationItems, props]);

    function handleChange(event) {
        //const { name, checked, value } = event.target;
        // setAuthorizationItem(previousAuthorization => ({
        //     authorizationItem: previousAuthorization.authorizationItem.set(name, checked, value)
        // }));
        //https://medium.com/@wlodarczyk_j/handling-multiple-checkboxes-in-react-js-337863fd284e
    }

    function handleSave(event) {
        event.preventDefault();
        // saveAuthorizationItem(authorizationItem).then(() => {
        //     history.push("/admin/authorization/authorization-list");
        // });
    }

    return (
        <div className="content">
            <Card>
                <Form onSubmit={handleSave}>
                    <CardHeader>
                        <h5 className="title">Edit Authorizations Item</h5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            {authorizationItem.modules ? authorizationItem.modules.map((moduleItem, index) => (
                                <Col key={moduleItem.id} className="pr-md-1" md="12">
                                    <div className="custom-control custom-switch">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id={"customSwitch" + moduleItem.id}
                                            name={"id"}
                                            checked={authorizationItem.roleModules.some(x => x === moduleItem.id)}
                                            value={moduleItem.id}
                                            onChange={handleChange}
                                        />
                                        <label className="custom-control-label" htmlFor={"customSwitch" + moduleItem.id}>{moduleItem.name}</label>
                                    </div>
                                </Col>
                            )) : null}
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

export function getAuthorizationItemById(authorizationItems, authorizationId) {

    let authorizationItem = authorizationItems.find(authorization => authorization.role.id === authorizationId) || null;
    return authorizationItem;
}

function mapStateToProps(state, ownProps) {
    var authorizationIdInt = parseInt(ownProps.match.params.authorizationId)
    const authorizationItem =
        authorizationIdInt && (!state.authorizationItemListReducer.role || state.authorizationItemListReducer.role.id !== authorizationIdInt)
            ? getAuthorizationItemById(state.authorizationItemListReducer, authorizationIdInt)
            : {};
    console.log(authorizationItem);
    return {
        authorizationItem,
        authorizationItems: state.authorizationItemListReducer
    };
}

const mapDispatchToProps = {
    saveAuthorizationItems,
    getAuthorizationItems
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorizationItemEdit);
