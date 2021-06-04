import { useEffect, useState } from "react";
const IndexPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => {
          setUsers(data.items)
      });
  }, []);
  console.log(users);
  return "hello world";
};

export default IndexPage;
