import { useState, useCallback } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });

  const handleChange = useCallback((e) => {
    setFromData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSumbit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData);
    },
    [formData]
  );

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <section className="form">
        <form onSubmit={handleSumbit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
