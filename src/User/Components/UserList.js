import React from "react";
import Card from "../../Shared/Components/UIELements/Card/Card";
import UserItem from "./UserItem";
import "./UserList.css";

function UserList({ items }) {
  // const users = items.map((user) => (
  // <ul className="users-list" key={user.id}>
  // <UserItem
  //   key={user.id}
  //   id={user.id}
  //   image={user.image}
  //   name={user.name}
  //   placeCount={user.places.length}
  // />
  // </ul>
  // ));

  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h1>No users found!</h1>;
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places.length}
        />
      ))}
    </ul>
  );
}

export default UserList;
