import User from "./components/user/User";

function Users(props) {
  const { users } = props;
  return <>
    <h1>Users</h1>
    {users.map((user) => {
      return (
        <User user={user} />
      )
    })}
  </>
}

export default Users;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: {
      users: data
    }
  }
}