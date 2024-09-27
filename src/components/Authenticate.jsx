import { useState } from "react";

function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState();
  async function handleClick() {
    try {
      const f = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: `GET`,
          headers: {
            "Content-Type": `application/json`,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await f.json();
      setSuccessMessage(data.message);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}

export default Authenticate;
