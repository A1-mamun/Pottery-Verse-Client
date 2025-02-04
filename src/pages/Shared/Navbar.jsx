import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  console.log(theme);
  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-green-600 font-semibold" : " "
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/all-item"
        className={({ isActive }) =>
          isActive ? "text-green-600 font-semibold" : " "
        }
      >
        All Art & craft Items
      </NavLink>

      <NavLink
        to="/add-item"
        className={({ isActive }) =>
          isActive ? "text-green-600 font-semibold" : " "
        }
      >
        Add Craft Item
      </NavLink>

      <NavLink
        to="/my-item"
        className={({ isActive }) =>
          isActive ? "text-green-600 font-semibold" : " "
        }
      >
        My Art&Craft List
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-100 shadow-lg fixed top-0 w-full z-10">
      <div className="navbar container mx-auto items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost gap-0 text-3xl ml-[-10px] text-black dark:text-gray-400">
            Pottery<span className="text-green-600">Verse</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 ">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <label className="cursor-pointer grid place-items-center mr-4">
            <input
              onChange={handleThemeToggle}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {user && (
            <div className=" tooltip mr-4" data-tip={user.displayName}>
              <img
                className="btn btn-sm md:btn-md btn-circle"
                alt="Profile picture"
                src={user.photoURL}
              />
            </div>
          )}
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-sm md:btn-md btn-success"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-sm md:btn-md btn-success ">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-sm md:btn-md btn-accent  ml-2">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
