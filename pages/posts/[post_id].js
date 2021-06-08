import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PostPage = () => {
  const router = useRouter();
  const post_id = router.query.post_id; // из роутера достаем обЪект query
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]); //
  useEffect(() => {
    // хук подписан на юзер айди
    if (!post_id) {
      return;
    }
    fetch(`http://localhost:3001/posts/${post_id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.item);
      });
    fetch(`http://localhost:3001/comments?postId=${post_id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.items);
      });
  }, [post_id]);
  console.log(post, post_id);
  return (
    <div className="container">
      {!!post && ( // if так пишется в JSX
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <div className="items">
        {comments.map((comment) => {
          return (
            <div className="item" key = {comment.id}>
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PostPage;

// открыть постман - 23 мая, 31:12 минута
