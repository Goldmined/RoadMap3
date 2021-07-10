import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import MainLayout from "../../components/layout/Main";
import PostCard from "../../components/card/Post";

const UserPage = () => {
  const router = useRouter();
  const user_id = router.query.user_id; // из роутера достаем обЪект query
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]); //
  useEffect(() => {
    // хук подписан на юзер айди
    if (!user_id) {
      return;
    }
    fetch(`http://localhost:3001/users/${user_id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.item);
      });
    fetch(`http://localhost:3001/posts?userId=${user_id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.items);
      });
  }, [user_id]);
  console.log(user, user_id);
  return (
    <MainLayout>
      {!!user && ( // if так пишется в JSX
        <div className="user">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
      <div className="row">
        {posts.map((post) => {
          return (
            <div className="col-md-6" key={post.id}>
              <PostCard item={post} url={`/posts/${post.id}`}/>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};
export default UserPage;

// открыть постман - 23 мая, 31:12 минута
