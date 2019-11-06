import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Card, Col, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as userActions from "../../../redux/actions/userActions";
import { Table } from "reactstrap";
import { Link } from "react-router-dom"

class UserList extends Component {
    componentDidMount() {
        this.props.actions.getUsers();
    }
    render() {
        return (

            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Users</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>#</th>
                                            <th>Full Name</th>
                                            <th/>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.users.map(user =>(
                                            <tr key={user.id}>
                                                <th>{user.id}</th>
                                                <td><Link to={"/saveuser/" + user.id}>{user.fullName}</Link></td>
                                                <td>
                                                    <Button color="success" >ekle</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.userListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getUsers: bindActionCreators(userActions.getUsers, dispatch)
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);
