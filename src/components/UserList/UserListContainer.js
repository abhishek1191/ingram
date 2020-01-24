import { connect } from "react-redux";
import UserList from "./UserListView";
import * as user from "../../reducers/users";
import { getUsersAction, getPageAction } from "../../actions";
import React, { Component } from "react";

class HelloComponent extends Component {
  constructor(props, state) {
    super(props, state);
  }
  componentDidMount() {
    this.props.getUsersAction();
    setTimeout(() => {
        console.log("namarta22",document.querySelector("#script2 script"));
        eval(document.querySelector("#script2 script").innerHTML);
    }, 4000)
  }

  renderHTML = () => {
    console.log("what the hell");
    this.props.getPageAction();
  };
  render() {
    return (
      <UserList
        props={this.props}
        users={this.props.users}
        renderHTML={this.renderHTML}
        page={this.props.pages}
      />
    );
  }
}
const mapStateToProps = state => {
  console.log("namrata users", state);

  return {
    users: state.users,
    pages: state.pages
  };
};

const mapDispatchToProps = {
  getUsersAction,
  getPageAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloComponent);
