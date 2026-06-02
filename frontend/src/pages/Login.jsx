import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', data);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) { alert('Login Failed'); }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handle}>
        <input type="email" placeholder="Email" onChange={e => setData({...data, email: e.target.value})} required />
        <input type="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})} required />
        <button type="submit">Sign In</button>
      </form>
      <Link to="/register">Create account</Link>
    </div>
  );
};

export default Login;