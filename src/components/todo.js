import React from "react";

export default (props) => (
  <div style={{ padding:10, display: "flex", justifyContent: "center" }}>
    <div style={{backgroundColor:'ActiveBorder', fontFamily:'cursive',color:'blueviolet'}}
      
    >
      {props.todo.text}
    </div>
    <button style={{margin: 5,backgroundColor:'red'}} onClick={props.onDelete}>x</button>
  </div>
);
