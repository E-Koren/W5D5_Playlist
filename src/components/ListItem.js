import React from "react";
import DeleteIcon from "../delete-icon.png";

function ListItem(props) {
  const style = {
    width: "25px",
  };
  return (
    <li className="list-item" key={props.id} value={props.title}>
      {" Song:"} {props.item.title} {"- Artist:"} {props.item.artist}
      {" -  Genre: "}
      {props.item.genre} {"- Rating: "}
      {props.item.rating}{" "}
      <img
        style={style}
        src={DeleteIcon}
        alt={"Delete-button"}
        onClick={() => props.removeSong(props.item)}
      />
    </li>
  );
}

export default ListItem;
