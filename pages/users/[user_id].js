import { useRouter } from "next/router";
import {useEffect, useState} from "react"

const UserPage = () => {
  const router = useRouter();
  const user_id = router.query.user_id;
  const [user, setUser] = useState(null);
  useEffect(() => {
      if (!user_id){
          return
      }
    fetch(`http://localhost:3001/users/${user_id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.item);
      });
  }, [user_id]);
  console.log(user, user_id)
  return "user" + user_id;
};
export default UserPage;
