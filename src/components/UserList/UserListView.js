import React from "react";
import "../styles/App.css";

const renderUsers = data => {
  const { loading, users } = data;
  if (!data || loading) {
    return <div>Users Loading</div>;
  }
  return users.map(user => <div>{user.name}</div>);
};

function UserListView({ data }) {
  return <div className="App">{renderUsers(data)}</div>;
}

export default UserListView;
