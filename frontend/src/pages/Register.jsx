import { useCallback } from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
      if (formData.password !== formData.password2) {
        console.log("Passwords do not match");
      } else {
        console.log(formData);
      }
    },
    [formData]
  );

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={handleSumbit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
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
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={formData.password2}
              placeholder="Confirm password"
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

export default Register;
