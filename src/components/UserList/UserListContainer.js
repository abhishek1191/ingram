import { connect } from "react-redux";
import UserList from "./UserListView";
import * as user from "../../reducers/users";
import { getUsersAction } from "../../actions";
import React, { Component } from "react";

class HelloComponent extends Component {
  constructor(props, state) {
    super(props, state);
  }
  componentDidMount() {
    this.props.getUsersAction();
  }
  render() {
    return <UserList props={this.props} users={this.props.users} />;
  }
}
const mapStateToProps = state => {
  console.log("namrata users", state);

  return {
    users: state.users
  };
};

const mapDispatchToProps = {
  getUsersAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloComponent);
