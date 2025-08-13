import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://YOUR_RENDER_BACKEND_URL/") // Replace with your backend URL
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend is Live!</h1>
      <p>Message from Backend: <strong>{message}</strong></p>
    </div>
  );
}

export default App;
