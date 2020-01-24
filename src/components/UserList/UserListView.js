import React from "react";
import "../styles/App.css";

const renderUsers = users => {
  if (!users || users.loading) {
    return <div>Users Loading</div>;
  }
  console.log("namrata users...", users);
  return users.users.map(user => <div>{user.name}</div>);
};

function UserListView({ users, renderHTML ,page}) {
  return (
    <div className="App">
      {renderUsers(users)}
      <button onClick={renderHTML} />
      {!page.loading && <div id="script2" dangerouslySetInnerHTML={{ __html: page.page.data }} />}
    </div>
  );
}

export default UserListView;
