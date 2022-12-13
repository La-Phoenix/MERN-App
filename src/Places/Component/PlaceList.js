import React from "react";
import Button from "../../Shared/Components/FormElements/Button/Button";
import Card from "../../Shared/Components/UIELements/Card/Card";
import PlaceItem from "./PlaceItem";

import "./PlaceList.css";

function PlaceList(props) {
  const places = props.items.map((place) => (
    <PlaceItem
      id={place.id}
      key={place.id}
      image={place.image}
      title={place.title}
      address={place.address}
      description={place.description}
      creatorId={place.creator}
      coordinates={place.location}
      onDelete={props.onDeletePlace}
    />
  ));
  return (
    <>
      {props.items.length === 0 ? (
        <div className="place-list center">
          <Card>
            <h2>No Places Found. Maybe create one</h2>
            <Button to="/places/new">Share Place</Button>
          </Card>
        </div>
      ) : (
        <ul className="place-list">{places}</ul>
      )}
      ;
    </>
  );
}

export default PlaceList;
