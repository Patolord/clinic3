import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

// styles
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="intro">
      <div className="left"></div>
      <div className="right">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Entrar</h2>
          <label>
            <span>Email:</span>
            <input required type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </label>
          <label>
            <span>Senha:</span>
            <input required type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </label>
          {!isPending && <button className="btn">Entrar</button>}
          {isPending && (
            <button className="btn" disabled>
              entrando...
            </button>
          )}
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}
