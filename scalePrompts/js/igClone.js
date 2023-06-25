// Import the necessary libraries
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// Define the App component
const App = () => {
  // State variables
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  // Effect to fetch posts from the server
  useEffect(() => {
    axios.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  // Function to handle the sign in event
  const handleSignIn = (event) => {
    const { email, password } = event.target.elements;

    axios
      .post("/signin", { email, password })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to handle the sign out event
  const handleSignOut = () => {
    axios.post("/signout").then((response) => {
      setUser(null);
    });
  };

  // Render the posts
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <img src="{post.imageUrl}" />
          <h2>{post.username}</h2>
          <p>{post.caption}</p>
        </div>
      ))}

      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Sign In" />
        </form>
      </div>

      <div>
        <h2>Sign Out</h2>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

// Render the App component
ReactDOM.render(<App />, document.getElementById("root"));
