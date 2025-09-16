import React, { useState, useEffect } from "react";
import "./GithubUsers.css";

export default function GithubUsers() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await fetch("https://api.github.com/users");
      const result = await response.json();
      setUsers(result);
    } catch (error) {
      console.error(error);
    }
  }

  // Run fetchUsers only once after the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users">
      <h1>Github Users</h1>
      <ul>
        {users.map((user) => {
          const { id, avatar_url, login, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <p>{login}</p>
              <a href={html_url} target="_blank" rel="noopener noreferrer">
                Profile
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
