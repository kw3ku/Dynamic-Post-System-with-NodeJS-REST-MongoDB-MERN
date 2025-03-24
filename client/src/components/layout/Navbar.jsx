import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

export default function NavBar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">Simple DSP with MongoDB</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/posts/new" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
              Create Post
            </Link>
            {!isAuthenticated ? (
              <>
                <Link to="/signup" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
                  Signup
                </Link>
                <Link to="/login" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
                  Profile
                </Link>
                <button onClick={logout} className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 transition">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}