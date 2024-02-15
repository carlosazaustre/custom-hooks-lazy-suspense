import UserList from './components/UserList';
import useUsers from './hooks/useUsers';
import { useEffect, useState, lazy, Suspense } from 'react';

const PostList = lazy(() => import('./components/PostList'));

function App() {
  const { fetchUsers, getUsers, addUser } = useUsers();
  const [showPosts, setShowPosts] = useState(false);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <UserList />
      <hr />
      <button onClick={() => setShowPosts(!showPosts)}>Mostrar Posts</button>
      
      {showPosts && 
        <Suspense fallback={<h1>Cargando...</h1>}>
          <PostList />
        </Suspense>
      }

      {/* <ul>
          {getUsers().map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <form onSubmit={addUser}>
          <input type="text" name="username" />
          <button type="submit">Add User</button>
        </form> */}
    </>
  );
}

export default App;
