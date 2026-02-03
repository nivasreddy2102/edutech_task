import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("No account found. Please register first.");
      return;
    }

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (email !== savedUser.email) {
      setError("Email not found.");
      return;
    }

    if (password !== savedUser.password) {
      setError("Incorrect password.");
      return;
    }

    // Login success
    navigate("/account");
  };

  return (
    <div className="container">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {error && <p className="error-text">{error}</p>}

      <form onSubmit={handleSubmit}>
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text="Login" />
      </form>
    </div>
  );
};

export default Login;
