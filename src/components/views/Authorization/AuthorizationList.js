import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Card, Col, CardHeader, CardTitle, CardBody } from "reactstrap";
import { bindActionCreators } from "redux";
import * as authorizationActions from "../../../redux/actions/authorizationActions";
import { Table } from "reactstrap";
import { Link } from "react-router-dom"

class AuthorizationList extends Component {
    componentDidMount() {
        this.props.actions.getAuthorizations();
    }
    render() {
        return (

            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Authorizations
                                <Link to="/admin/authorization/save-authorization" className="btn pull-right">Add New</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>#</th>
                                            <th>Adı</th>
                                            <th>Açıklaması</th>
                                            <th>Erişim Yetkileri</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.authorizations.map(authorization => (
                                            <tr key={authorization.id}>
                                                <th style={{ color: "white" }}>{authorization.id}</th>
                                                <th style={{ color: "white" }}>
                                                    {authorization.name + "   "}
                                                    <Link to={"/admin/authorization/save-authorization/" + authorization.id}>Edit</Link>
                                                </th>
                                                <th style={{ color: "white" }}>{authorization.description}</th>
                                                <td style={{ color: "white" }}>1 Gruop 0 Modül <Link to={"/admin/authorization/save-authorization/" + authorization.id}>Edit</Link></td>
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
        authorizations: state.authorizationListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getAuthorizations: bindActionCreators(authorizationActions.getAuthorizations, dispatch)
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorizationList);
