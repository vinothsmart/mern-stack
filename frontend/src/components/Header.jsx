import { logout, reset } from "../features/auth/authSlice";
import { useCallback } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = useCallback(() => {
    dispatch(logout());
    dispatch(reset());
    navigation.push("/");
  }, [dispatch, navigation]);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">My Blog</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
