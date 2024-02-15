import useFetch from '../hooks/useFetch';

function PostList() {
  const { data: posts, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <>
      <h1>Post List</h1>
      {loading ? <p>Loading...</p> : null}
      {!loading && (<ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <span>{post.body}</span>
        </li>
        ))}
      </ul>)}
    </>
  );
}

export default PostList;
