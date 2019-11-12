import React, { Component } from 'react'
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/authActions";
import * as loadingActions from "../../redux/actions/loadingActions";
import { bindActionCreators } from "redux";
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

 class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.authReducer.isAuthenticated) {
      this.props.history.push('/');
    }
  }
 
  componentWillReceiveProps(nextProps) {
    if (nextProps.authReducer.isAuthenticated) {
      this.props.history.push('/');
    }
    
  }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        this.props.actions.setLoading(true);
      }
  
      onSubmit(e) {
        e.preventDefault();
    
        const userData = {
          email: this.state.email,
          password: this.state.password
        };
    
        this.props.actions.loginUser(userData);
      }
    render() {

        return (
           
        <div className="min-h-fullscreen bg-img center-vh p-20  pace-done" style={{backgroundImage:"url(http://dogutech.xyz/Contents/Files/2019/06/11/0b61a1-flz3.jpg)"}}>
          
              <Card className="card card-round card-shadowed px-50 py-30 w-400px mb-0">
                  <Form onSubmit={this.onSubmit}>
                <CardHeader>
                  <strong style={{textAlign :"center",fontSize: "27px",color:""}}>Login</strong>
                </CardHeader>
                <CardBody>
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label>
                            Email address
                          </label>
                          <Input placeholder="Enter e-mail..." name="email" type="text"  value={this.state.email} onChange={this.onChange}/>
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup>
                          <label>Password </label>
                          <Input
                            type="password"
                            placeholder="Enter password..." name="password" value={this.state.password} onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                  <Button className="" color="primary" type="submit">
                    Login
                  </Button>
                </CardFooter>
                   </Form>
              </Card>
              
        </div>
      
        )
    }
}

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: {
        loginUser: bindActionCreators(userActions.loginUser, dispatch),
        setLoading: bindActionCreators(loadingActions.setLoading, dispatch)
      }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);