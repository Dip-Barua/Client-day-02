import { useLoaderData } from 'react-router-dom';

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h2>{users.length}</h2>
      <div>
        {
          users.map(user => (
            <div key={user._id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Users;
