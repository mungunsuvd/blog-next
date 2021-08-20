import React, { useState } from "react";

export const MyCoolButton = (props) => {
  const [commentHistory, setCommentHistory] = useState([]);

  <br />;
  const clickHandler = () => {
    setCommentHistory([...commentHistory, props.zohiogch, props.comment]);
  };

  //   console.log("MyCoolButton ");

  return (
    <div>
      <input
        className="btn-dark"
        type="button"
        onClick={clickHandler}
        value={props.text ? `  ${props.text}` : "Click Me!!!!"}
      />

      <div>
        {commentHistory.map((el) => (
          <div key={new Date()}>{el}</div>
        ))}
      </div>
    </div>
  );
};
