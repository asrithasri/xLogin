import React, {useState} from "react";
import './App.css';

function App() {

  const [username , setUsername] = useState("")
  const[password, setPassword] = useState('');
  // const[isAuthenticated, setIsAuthenticated] = useState(false);
  const[message, setMessage] = useState('');

  const handleSubmit =()=>{
    if(username ==="user" && password==='password'){
      // setIsAuthenticated(true);
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
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="text"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <h2> {message}</h2>}
    </div>

  );

    
    
 
}

export default App;
