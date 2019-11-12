import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveUser,getUsers } from "../../../redux/actions/userActions";
import UserProfile from "./UserProfile";
//import { validate } from "@babel/types";

function AddOrUpdateUser({
  users,
  getUsers,
  saveUser,
  history,
  ...props
}) {
  const [user, setUser] = useState({ ...props.user });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
    setUser({ ...props.user });
  }, [props.user]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser(previousUser => ({
      ...previousUser,
      [name]: value
    }));

    validate(name, value);
  }

  function validate(name, value) {
    if (name === "fullName" && value === "") {
      setErrors(previousErrors => ({
        ...previousErrors,
        fullName: "İsim Soyisim olmalıdır"
      }));
    } else {
      setErrors(previousErrors => ({
        ...previousErrors,
        fullName: ""
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveUser(user).then(() => {
      history.push("/admin/users");
    });
  }

  return (
    <UserProfile
      user={user}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getUserById(users, userId) {
  let user = users.find(user => user.id == userId) || null;
  return user;
}

function mapStateToProps(state, ownProps) {
  const userId = ownProps.match.params.userId;
  const user =
    userId && state.userListReducer.length > 0
      ? getUserById(state.userListReducer, userId)
      : {};
  return {
    user,
    users: state.userListReducer
  };
}

const mapDispatchToProps = {
  saveUser,
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOrUpdateUser);
