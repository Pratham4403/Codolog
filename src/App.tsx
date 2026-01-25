import { useState, useEffect } from 'react'
import './App.css'

type NavigatorInfo = {
  userAgent: string;
  online: string;
  language: string;
  platform: string;
  cookies: string;
};

function App() {
  // useState implementation
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // useEffect implementation
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    if (notifications > 0) {
      document.title = `(${notifications}) New Notifications`;
    } else {
      document.title = "No New Notifications";
    }
  }, [notifications]);

  // Event listeners
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleMouseEnter = () => {
    setMessage("Mouse entered the box!");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert("Enter key pressed!");
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Form submitted by ${name}`);
  };

  //Navigator in react
   const [info, setInfo] = useState<NavigatorInfo>({
    userAgent: "",
    online: "",
    language: "",
    platform: "",
    cookies: "",
  });

  useEffect(() => {
    setInfo({
      userAgent: navigator.userAgent,
      online: navigator.onLine ? "Online" : "Offline",
      language: navigator.language,
      platform: navigator.platform,
      cookies: navigator.cookieEnabled ? "Enabled" : "Disabled",
    });
  }, []);


  return (
    <>
      <div>
        <h2>👍 Likes: {likes} <br /> 👎 Dislikes: {dislikes}</h2>
        <button onClick={() => setLikes(likes + 1)}>Like</button>
        <button onClick={() => setDislikes(dislikes + 1)}>Dislike</button>
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

      <div>
        <h2>React Event Listeners</h2>
        <button onClick={handleClick}>
          Clicked {count} times
        </button>
        <br /><br />
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <br /><br />
        <div
          style={{ width: "200px", height: "100px", border: "1px solid black" }}
          onMouseEnter={handleMouseEnter}
        >
          Hover over me
        </div>
        <p>{message}</p>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div style={{ padding: "20px" }}>
        <h2>Navigator Interface Example</h2>

        <p><b>User Agent:</b> {info.userAgent}</p>
        <p><b>Online Status:</b> {info.online}</p>
        <p><b>Language:</b> {info.language}</p>
        <p><b>Platform:</b> {info.platform}</p>
        <p><b>Cookies Enabled:</b> {info.cookies}</p>
      </div>
    </>
  );
}

export default App;
