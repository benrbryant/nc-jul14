import User from "./User";

function List({ users }) {
  return (
    <div className="row row-cols-3">
      {users
        .sort((userA, userB) => userA.username.toLowerCase() > userB.username.toLowerCase() ? 1 : -1)
        .map((user, idx) => {
          return <User user={user} key={idx} />;
        })}
    </div>
  );
}

export default List;
