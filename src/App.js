import "./App.css";
import User from "./User";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${inputValue}`);
      if (response.ok) {
        const userData = await response.json();
        setUsers([userData]); 
        console.log(userData);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error occurred while fetching user data", error);
    }
  };

  const handleButtonClick = () => {
    if (inputValue) {
      fetchData();
      setInputValue("");
    }
  };

  return (
    <>
      <div className="App">
        <h1>GitHub username:</h1>
        <input
          type="text"
          placeholder="Unesi korisničko ime"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        ></input>
        <hr></hr>
        <button onClick={handleButtonClick}>GO !</button>
        {users.map(user => (
          <User user={user} key={user.id} /> 
        ))}
      </div>
    </>
  );
}

export default App;
