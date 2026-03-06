import React, { useEffect, useState } from 'react';
import './UsersList.css';
import UsersService from '../../services/UsersService';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await UsersService.getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="users-list-container">Loading...</div>;
  }

  if (error) {
    return <div className="users-list-container">{error}</div>;
  }

  return (
    <div className="users-list-container">
      <h1 className="users-list-title">List of Users</h1>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Enabled</th>
            <th>Administrator</th>
            <th>Superuser</th>
            <th>Blocked</th>
            <th>Role ID</th>
            <th>Last Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.enabled ? 'Yes' : 'No'}</td>
              <td>{user.administrator ? 'Yes' : 'No'}</td>
              <td>{user.superuser ? 'Yes' : 'No'}</td>
              <td>{user.blocked ? 'Yes' : 'No'}</td>
              <td>{user.roleId}</td>
              <td>{user.lastActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;