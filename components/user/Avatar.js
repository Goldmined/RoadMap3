import  Link  from "next/link";

const UserAvatar = ({item, url}) => {
  const { username, email, id } = item;
  return (
    <div className="text-center">
      <img
        src={`https://i.pravatar.cc/140?img=${id}`}
        className="bd-placeholder-img rounded-circle"
      />
      <h2 className="mt-3 mb-3">{username}</h2>
      <p>{email}</p>
      <p>
        <Link href={url}>
          <a  className="btn btn-secondary">View details »</a>
        </Link>
      </p>
    </div>
  );
};

export default UserAvatar;
//1-02