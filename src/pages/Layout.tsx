import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Hem</NavLink>
              </li>
              <li>
                <NavLink to={"/memory"}>Memory</NavLink>
              </li>
              <li>
                <NavLink to={"/tictactoe"}>Tre i rad</NavLink>
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