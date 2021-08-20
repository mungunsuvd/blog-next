import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

function LikeBtn() {
  const [likes, setLikes] = useState(0);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder onClick={() => setLikes(likes + 1)} />}
            checkedIcon={<Favorite onClick={() => setLikes(likes - 1)} />}
            name="checkedH"
          />
        }
        label={likes}
      />
    </div>
  );
}
export default LikeBtn;
