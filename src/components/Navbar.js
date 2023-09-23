import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

//styles
import "./Navbar.css";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        {!user && (
          <>
            <li className="logo">
              <img src={Logo} alt="loho" />
            </li>

            <li>
              <Link to="/login">Entrar</Link>
            </li>

            <li>
              <Link to="/signup">Cadastrar</Link>
            </li>
          </>
        )}
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
