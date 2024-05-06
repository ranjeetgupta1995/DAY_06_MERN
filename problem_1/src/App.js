import './App.css';
import { useState } from 'react';
import EditProfile from './components/EditProfile';
import UserProfile from './components/UserProfile';

function App() {
  const [editMode, setEditMode] = useState(false);

  const user = {
    name: "Ranjeet Gupta",
    email: "ranjeet@gmail.com",
    bio: "I am a Fullstack Web Developer."
  };

  const handleToggle = () => {
    setEditMode(preMode => !preMode);
  }

  return (
    <div className="App">
      <h1>User Profile</h1>
      
      <button onClick={handleToggle}>{editMode? "View Mode" : "Edit Mode"}</button>
     
      {
        editMode? <EditProfile {...user} /> : <UserProfile {...user} />
      }
    </div>
  );
}

export default App;
