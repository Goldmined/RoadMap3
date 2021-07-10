import { useEffect, useState } from "react";
import Link from "next/link";
import MainLayout from "../components/layout/Main";
import UserAvatar from "../components/user/Avatar";
const IndexPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => {
        // setUsers(data.items);
        if (data.items) {
          setUsers(data.items);
        }
      });
  }, []);
  console.log(users);
  return (
    <MainLayout>
      <div className="row">
        {users.map((user) => {
          return (
            <div className="col-md-3" key={user.id}>
              <UserAvatar item={user} url={`/users/${user.id}`}/>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default IndexPage;
