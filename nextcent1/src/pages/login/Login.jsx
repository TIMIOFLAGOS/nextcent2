import { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password, rememberMe });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
  
        <div className={styles.loginHeader}>
          <h2>Welcome back</h2>
          <p>Please sign in to your account</p>
        </div>

   
        <form className={styles.loginForm} onSubmit={handleSubmit}>
        
          <div className={styles.formGroup}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

        
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div className={styles.formOptions}>
            <label className={styles.rememberMe}>
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <Link to="../forgot-password" className={styles.forgotPassword}>
              Forgot your password?
            </Link>
          </div>

   
          <Link to="../dashboard" type="submit" className={styles.submitBtn}>
            Sign in
          </Link>
        </form>
      </div>
    </div>
  );
}