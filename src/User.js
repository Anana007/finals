import PropTypes from "prop-types";

const User = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} alt="" />
      <h1>{user.name}</h1>
      <p>
        <strong>BIO: </strong> {user.bio}
      </p>
      <p>
        <strong>LOCATION: </strong> {user.location}
      </p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;