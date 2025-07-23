// import React, { useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import { register } from '../../features/auth/authSlice';

// const RegisterForm = () => {
//   const dispatch = useAppDispatch();
//   const {loading, error } = useAppSelector((state) => state.auth);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email || !password) return;

//     await dispatch(register({ email, password }));
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <h2>Register</h2>

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
//         {loading ? 'Registering...' : 'Register'}
//       </button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </form>
//   );
// };

// export default RegisterForm;




import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { register } from '../../features/auth/authSlice';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    await dispatch(register({ email, password }));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleRegister} className="auth-form">
        <h2>Register</h2>

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
          {loading ? 'Registering...' : 'Register'}
        </button>

        {error && <p className="form-error">{error}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
