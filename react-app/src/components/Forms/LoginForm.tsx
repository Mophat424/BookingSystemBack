// import React, { useState, useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import { login } from '../../features/auth/authSlice';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const { loading, error, user } = useAppSelector((state) => state.auth);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email || !password) return;

//     await dispatch(login({ email, password }));
//   };

//   useEffect(() => {
//     if (user?.role === 'admin') {
//       navigate('/dashboard/admin');
//     } else if (user?.role === 'user') {
//       navigate('/dashboard/user');
//     }
//   }, [user, navigate]);

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />

//       <button type="submit" disabled={loading}>
//         {loading ? 'Logging in...' : 'Login'}
//       </button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </form>
//   );
// };

// export default LoginForm;



import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    await dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (user?.role === 'admin') {
      navigate('/dashboard/admin');
    } else if (user?.role === 'user') {
      navigate('/dashboard/user');
    }
  }, [user, navigate]);

  return (
    <div className="form-container">
      <form onSubmit={handleLogin} className="auth-form">
        <h2>Login</h2>

        <input
          className="form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="auth-button" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {error && <p className="form-error">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
