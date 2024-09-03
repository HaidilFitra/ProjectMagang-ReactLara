import { useRef } from "react";
import axios from "axios";

const LoginModal = ({ onLogin }) => {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const handleLogin = () => {
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    axios
      .post("http://localhost:8000/api/v1/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("Authorization", response.data.token);
        onLogin();
        document.getElementById("loginModal").click();
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Login
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="input-email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="input-email"
                  aria-describedby="emailHelp"
                  ref={inputEmail}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="input-password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="input-password"
                  ref={inputPassword}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
