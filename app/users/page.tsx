import React from 'react';

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // second arguments can of fetch can be (only fetch)
  // { cache: 'no-store' }
  // { next: { revalidate: 10 }}
  const response = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store'});
  const users: User[] = await response.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
