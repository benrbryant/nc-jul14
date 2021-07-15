import { useEffect, useState } from "react";
import Display from "./components/Display";
import { usernames } from "./utils/data";
import "./App.css";
import List from "./components/List";

function App() {
  let [users, setUsers] = useState([]);

  async function fetchUsers() {
    let tempUsers = [];
    usernames.forEach((user) => {
      fetch("https://www.codewars.com/api/v1/users/" + user)
        .then((res) => res.json())
        .then((data) => {
          tempUsers.push(data);
          if (tempUsers.length == usernames.length) {
            setUsers(tempUsers);
          }
        })
        .catch((err) => console.error(err.message));
    });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header container-flush">
        <Display list={users} />
        <List users={users} />
      </header>
    </div>
  );
}

export default App;
