import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const [notifications, setNotifications] = useState(0);
  useEffect(() => {
    if (notifications > 0) {
      document.title = `(${notifications}) New Notifications`;
    } else {
      document.title = "No New Notifications";
    }
  }, [notifications]);      //runs when notifications change


  return (
    <>
      <div>
        <h2>👍 Likes: {likes} <br/>👎 Dislikes: {dislikes}</h2>

        <button onClick={() => setLikes(likes + 1)}>
          Like
        </button>
        <button onClick={() => setDislikes(dislikes + 1)}>
          Dislike
        </button>
      </div>
      <div>
        <h2>Notifications: {notifications}</h2>
        <button onClick={() => setNotifications(notifications + 1)}>
          Add Notification
        </button>
        <button onClick={() => setNotifications(0)}>
          Clear Notifications
        </button>
      </div>
    </>
  );
}

export default App
