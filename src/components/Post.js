import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../actions/postActions";

const Post = () => {
  // const [post, setPost] = useState(null);
  const { post_id } = useParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === post_id)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(deletePost(post.id));
    navigate("/");
  };

  useEffect(() => {}, [dispatch, post_id]);

  /* useEffect(() => {
    // promises
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
      .then((res) => setPost(res.data));
  }, [post_id]); */

  const postContent = post ? (
    <div className="post">
      <h4 className="center">{post.title} </h4>
      <p>{post.body} </p>
      <div className="center">
        <button className="btn grey" onClick={handleClick}>
          Delete Post
        </button>
      </div>
    </div>
  ) : (
    <div className="center">Loading post....</div>
  );

  return <div className="container">{postContent}</div>;
};

export default Post;
