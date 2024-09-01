import React, {useState} from "react";
import './App.css';


function App() {

  const [username , setUsername] = useState("")
  const[password, setPassword] = useState('');
  const[message, setMessage] = useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(username ==="user" && password==='password'){
      setMessage("Welcome,user!");
    }
      else{
        setMessage('Invalid username or password');
      }
  }


  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="Enter username"
          required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
          required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <h2> {message}</h2>}
    </div>

  );
}

export default App;
