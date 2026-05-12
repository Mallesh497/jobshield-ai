import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-gray-900 border-b border-gray-800">

      <Link
        to="/"
        className="text-2xl font-bold text-white"
      >
        JobShield AI
      </Link>

      <div className="flex gap-6 items-center text-gray-300">

        <Link
          to="/"
          className="hover:text-white"
        >
          Home
        </Link>

        <Link
          to="/post-job"
          className="hover:text-white"
        >
          Post Job
        </Link>

        {!token ? (
          <>
            <Link
              to="/login"
              className="hover:text-white"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="hover:text-white"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-400 text-white"
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;