import React from "react";

function Search(props) {
  return (
    <div>
      {props.name ? (
        <h6 style={{ color: "green" }}>
          The <code>name</code> in the query string is &quot;{props.name}
          &quot;
        </h6>
      ) : (
        <h6 style={{ color: "green" }}>There is no name in the query string</h6>
      )}
    </div>
  );
}

export default Search;
