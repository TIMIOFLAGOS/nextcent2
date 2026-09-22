import { useState } from "react";
import styles from "./ForgotPassword.module.css";
import { Link } from "react-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log(`Reset link requested for: ${email}`);
    setIsSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {!isSubmitted ? (
          <>
            <h2 className={styles.title}>Forgot Password?</h2>
            <p className={styles.subtitle}>
              Enter your email address below and we'll send you a link to reset
              your password.
            </p>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={`${styles.input} ${error ? styles.inputError : ""}`}
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <span className={styles.errorMessage}>{error}</span>}
              </div>

              <button type="submit" className={styles.button}>
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h2 className={styles.title}>Check your email</h2>
            <p className={styles.subtitle}>
              We have sent a password reset link to <strong>{email}</strong>.
            </p>

            <Link
              to="/login"
              className={styles.secondaryButton}
              style={{
                textDecoration: "none",
                display: "block",
                textAlign: "center",
              }}
            >
              Back to Sign In
            </Link>
          </div>
        )}

        {!isSubmitted && (
          <div className={styles.footer}>
            <Link to="/login" className={styles.backLink}>
              ← Back to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
