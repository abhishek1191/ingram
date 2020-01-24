import React from "react";
import "./styles/App.css";

const renderUsers = users => users.map(user => <div>{user.name}</div>);

function UserListView({ users }) {
  return <div className="App">{renderUsers(users)}</div>;
}

export default UserListView;
