import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const listItems = props.songs.map((item) => (
    <ListItem key={item.id} item={item} removeSong={props.removeSong} />
  ));

  return <ul className="list">{listItems}</ul>;
}

export default List;
