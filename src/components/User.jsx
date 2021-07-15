function User({ user }) {
  return (
    <div className={`card bg-${user.ranks.overall.color}`}>
      <div className="card-body">
        <h3>{user.username}</h3>
        <p>{user.clan}</p>
        <p>{user.honor}</p>
        <p>{user.ranks.overall.name}</p>
      </div>
    </div>
  );
}

export default User;
