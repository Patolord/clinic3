import { NavLink } from "react-router-dom";

// styles & images
import "./Sidebar.css";
import Logo from "../assets/logo.png";
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Sidebar() {
  const { user } = useAuthContext();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <img className="logo" src={Logo} alt="logo" />

          <p>
            Olá{" "}
            {user &&
              user.displayName.charAt(0).toUpperCase() +
                user.displayName.slice(1).toLowerCase()}
          </p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Pacientes</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/form">
                <img src={AddIcon} alt="add project icon" />
                <span>Novo Paciente</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
