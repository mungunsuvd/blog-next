import React, { useState } from "react";
import Favorite from "@material-ui/icons/Favorite";
function LikeBtn() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      {likes} <Favorite />
      likes
    </button>
  );
}

export default LikeBtn;
