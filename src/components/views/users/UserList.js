import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Card, Col, CardHeader, CardTitle, CardBody } from "reactstrap";
import { bindActionCreators } from "redux";
import Moment from 'react-moment';
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
                                <CardTitle tag="h4">Users
                                <Link to="/admin/save-user" className="btn pull-right">Add New</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>#</th>
                                            <th>Kullanıcı Adı</th>
                                            <th>Email</th>
                                            <th>Kayıt Tarihi</th>
                                            <th>Erişim Yetkileri</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.users.map(user => (
                                            <tr key={user.id}>
                                                <th style={{ color: "white" }}>{user.id}</th>
                                                <th style={{ color: "white" }}>
                                                    {user.fullName + "   "}
                                                    <Link to={"/admin/save-user/" + user.id}>Edit</Link>
                                                </th>
                                                <th style={{ color: "white" }}>{user.email}</th>
                                                <th style={{ color: "white" }}>
                                                    <Moment format="DD.MM.YYYY HH:mm">
                                                        {user.creationDate}
                                                    </Moment>
                                                </th>
                                                <td style={{ color: "white" }}>1 Gruop 0 Modül <Link to={"/admin/authorization/save-user-authorization/" + user.id}>Edit</Link></td>
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
