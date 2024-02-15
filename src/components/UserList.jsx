import useFetch from '../hooks/useFetch';

function UserList() {
  const { data: users } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
