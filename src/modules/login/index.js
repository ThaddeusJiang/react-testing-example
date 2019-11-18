import React, { useState } from "react";
import { navigate } from "@reach/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        onClick={() => {
          if (username === "jifa" && password === "password") {
            navigate("/");
          }
        }}
      >
        Login
      </button>
    </div>
  );
}
