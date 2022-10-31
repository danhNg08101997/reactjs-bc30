import { NavLink, Outlet } from "react-router-dom";

//component
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            React Class Component
          </NavLink>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-success text-white nav-link" : "nav-link"
                  }
                  style={({ isActive }) =>
                    isActive ? { borderRadius: "5px" } : {}
                  }
                  to="/home"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-success text-white nav-link" : "nav-link"
                  }
                  style={({ isActive }) =>
                    isActive ? { borderRadius: "5px" } : {}
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-success text-white nav-link" : "nav-link"
                  }
                  style={({ isActive }) =>
                    isActive ? { borderRadius: "5px" } : {}
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-success text-white nav-link" : "nav-link"
                  }
                  style={({ isActive }) =>
                    isActive ? { borderRadius: "5px" } : {}
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-success text-white nav-link" : "nav-link"
                  }
                  style={({ isActive }) =>
                    isActive ? { borderRadius: "5px" } : {}
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-success text-white nav-link" : "nav-link"
                  }
                  style={({ isActive }) =>
                    isActive ? { borderRadius: "5px" } : {}
                  }
                  to="/reactform"
                >
                  
                  ReactForm
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <a className="dropdown-item" href="#">Action 1</a>
          <a className="dropdown-item" href="#">Action 2</a>
        </div>
      </li> */}
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer className="bg-primary text-white display-5 fw-regular text-center">
        Footer
      </footer>
    </div>
  );
}

export default App;
