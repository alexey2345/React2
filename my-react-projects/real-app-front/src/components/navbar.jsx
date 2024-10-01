import { Link, NavLink } from "react-router-dom";
import Logo from "./logo";
import { useAuth } from "../contexts/auth.context"; // Import the Auth context


function NavBar(props) {
  const { user, logout } = useAuth(); // Get user and logout function from Auth context

  return (
    <nav
      className="navbar navbar-expand-sm navbar-light bg-primary shadow-sm"
      aria-label="Fifth navbar example"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
          
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link text-light"
                style={{ fontSize: "1.5rem" }}
              >
                About
              </NavLink>
            </li>

          </ul>



          
          <input type="search" className="form-control form-control-dark text-bg-light" style={{width:"200px"}} placeholder="Search..." aria-label="Search" onChange={(e) => props.setSearch(e.target.value)}/>


          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {user ? (
              <>
            <li className="nav-item">
                  <NavLink
                    to="/favorites"
                    className="nav-link text-light"
                    style={{ fontSize: "1.5rem" }}
                  >
                    
                    Favorites
                  </NavLink>
                </li>
                {/* New Card Button */}
                <li className="nav-item">
                  <NavLink
                    to="/new-card"
                    className="nav-link text-light"
                    style={{ fontSize: "1.5rem" }}
                  >
                    
                    New Card
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link                     className="nav-link text-light"
                    style={{ fontSize: "1.5rem" }} to="/my-cards">My Cards</Link>
                </li>

                {/* Sign Out Button */}
                <li className="nav-item">
                  <button
                    onClick={logout}
                    className="nav-link btn text-light"
                    style={{ fontSize: "1.5rem" }}
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/sign-in"
                    className="nav-link text-light"
                    style={{ fontSize: "1.5rem" }}
                  >
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/sign-up"
                    className="nav-link text-light"
                    style={{ fontSize: "1.5rem" }}
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
