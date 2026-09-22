import { useState } from 'react';
import styles from './register.module.css'; 

import { Link } from 'react-router'; 


export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, email, password, agreeTerms });
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        

        <div className={styles.signupHeader}>
          <h2>Create account</h2>
          <p>Get started with your free account today</p>
        </div>

  
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          
        
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
          </div>

        
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
            <label className={styles.termsCheckbox}>
              <input
                id="agreeTerms"
                type="checkbox"
                required
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <span>
                I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
              </span>
            </label>
          </div>

    
          <button type="submit" className={styles.submitBtn}>
            Sign up
          </button>
        </form>

    
        <div className={styles.signupFooter}>
          <p>
            Already have an account? <Link to="../login">Sign in</Link>
          </p>
        </div>
        
      </div>
    </div>
  );
}