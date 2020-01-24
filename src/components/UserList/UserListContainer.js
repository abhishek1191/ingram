import { connect } from "react-redux";
import UserList from "./UserListView";
import { getUsersAction } from "../../actions";
import React, { Component } from "react";

class UserListContainer extends Component {
  constructor(props, state) {
    super(props, state);
  }
  componentDidMount() {
    this.props.getUsersAction();
  }
  render() {
    return <UserList data={this.props.users} />;
  }
}
const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = {
  getUsersAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
