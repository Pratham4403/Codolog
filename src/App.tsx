import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div>
      <h2>👍 Likes: {likes} <br/>👎 Dislikes: {dislikes}</h2>

      <button onClick={() => setLikes(likes + 1)}>
        Like
      </button>
      <button onClick={() => setDislikes(dislikes + 1)}>
        Dislike
      </button>
    </div>
  );
}

export default App
