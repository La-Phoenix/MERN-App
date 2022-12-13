import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Shared/Components/UIELements/Card/Card";
import Avatar from "../../Shared/Components/UIELements/Avatar/Avatar";
import "./UserItem.css";

function UserItem({ id, name, image, placeCount }) {
  return (
    <li className="user-item">
      <Card className="user-item_content">
        <Link to={`/${id}/places`}>
          <div className="user-item_image">
            <Avatar
              image={`${process.env.REACT_APP_ASSET_URL}/${image}`}
              alt={name}
            />
          </div>

          <div className="user-item_info">
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default UserItem;
