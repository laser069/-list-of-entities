import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
    >
      <span style={{background:liked?"red":"grey"}}>{liked ? "Liked" : "Like"}</span>
    </button>
  );
}

export default LikeButton;
