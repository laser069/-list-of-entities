import LikeButton from "./likebutton";

function PostCard({ post }) {
  return (
    <div >
      <img
        src={post.profileImage}
        alt={post.username}
        style={{height:"200px",width:"200px",borderRadius:"50%"}}
      />
      <div >
        <h2 >{post.username}</h2>
        <p >{post.content}</p>

      </div>
      <LikeButton />
    </div>
  );
}

export default PostCard;
