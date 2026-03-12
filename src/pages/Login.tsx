import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); 
  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <div className="logo">MM</div>
          <h1>Margin Monitor</h1>
        </div>

        <h2>Sign in</h2>
        <p className="subtitle">Access your risk monitoring dashboard</p>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button className="login-button" 
         onClick={() => navigate("/dashboard")}>
          Sign in
        </button>

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