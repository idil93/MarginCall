import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); 
  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <div className="logo">MM</div>
          <h1>MarginCall</h1>
        </div>

        <h2>Sign In</h2>
        <p className="subtitle">Welcome</p>

        <div className="form-group">
          <label>E-mail</label>
          <input type="email" placeholder="Enter Your E-mail" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter Your Password" />
        </div>

        <div className="auth-buttons">

  <button
    className="login-button"
    onClick={() => navigate("/dashboard")}
  >
    Sign in
  </button>

  <button
    className="register-button"
    onClick={() => navigate("/register")}
  >
    Register
  </button>

</div>

    <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-buttons">
          <button className="social-button">
            <span className="icon">G</span>
            Google
          </button>

          <button className="social-button">
            <span className="icon"></span>
            Apple
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;