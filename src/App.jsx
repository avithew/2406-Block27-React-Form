import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
      <Authenticate setToken={setToken} token={token} />
      <SignUpForm setToken={setToken} token={token} />
    </div>
  );
}

export default App;
