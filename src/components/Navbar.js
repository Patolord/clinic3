import { Link } from "react-router-dom";

//styles
import "./Navbar.css";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="loho" />{" "}
        </li>

        <li>
          <Link to="/login">Entrar</Link>
        </li>

        <li>
          <Link to="/signup">Cadastrar</Link>
        </li>

        <li>
          <button className="btn">Sair</button>
        </li>
      </ul>
    </div>
  );
}
