import { useLoaderData } from 'react-router-dom';

const Users = () => {
  const users = useLoaderData();


  const handleDelete =  _id =>{
    console.log('delete', _id);
    fetch(`http://localhost:5000/users/${_id}`,{
        method: 'DELETE'
  
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <h2>{users.length}</h2>
      <div>
        {
          users.map(user => (
            <div key={user._id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <button 
              onClick={()=>handleDelete(user._id)}
              >X</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Users;
