import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  
    return (
      <>
        <header>
          <nav>
            <div className="menu-icon" onClick={toggleMenu}>
              <img src="/house.png" alt="Meny" />
            </div>
            <ul className={menuOpen ? 'active' : ''}>
              <li>
                <NavLink to={"/"} onClick={closeMenu}>Hem</NavLink>
              </li>
              <li>
                <NavLink to={"/memory"} onClick={closeMenu}>Memory</NavLink>
              </li>
              <li>
                <NavLink to={"/tictactoe"} onClick={closeMenu}>Tre i rad</NavLink>
              </li>
              <li>
                <NavLink to={"/musicpage"} onClick={closeMenu}>Julmusik</NavLink>
              </li>
              <li>
                <NavLink to={"/coloring"} onClick={closeMenu}>Målarbilder</NavLink>
              </li>
            </ul>
  
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </>
    );
  };