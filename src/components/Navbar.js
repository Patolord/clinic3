import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
//styles
import "./Navbar.css";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user, role } = useAuthContext();

  console.log(user);
  return (
    <div className="navbar">
      <ul>
        <>
          <li className="logo">
            <img src={Logo} alt="loho" />
            {user && role && <p>{user?.displayName}</p>}
          </li>

          {!user && (
            <li>
              <Link to="/login">Entrar</Link>
            </li>
          )}

          {user && role === "admin" && (
            <li>
              <Link to="/fichas">Fichas</Link>
            </li>
          )}
        </>

        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Sair
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                saindo...
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
