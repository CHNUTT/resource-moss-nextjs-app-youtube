import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // second arguments can of fetch can be (only fetch)
  // { cache: 'no-store' }
  // { next: { revalidate: 10 }}
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  const users: User[] = await response.json();

  return (
    <>
      <h1>Users</h1>
      {/* 
        with no second argument passing into fetch()
        Next treat this page as a static page
        this timestamp will not be changed on the production

        on the other hand with { cache: 'no-store' }
        the timestamp will be changed when the page is refreshed
      */}
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
