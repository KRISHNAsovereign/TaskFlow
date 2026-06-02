import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

const Register = () => {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', data);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) { alert('Registration Failed'); }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form onSubmit={handle}>
        <input type="text" placeholder="Name" onChange={e => setData({...data, name: e.target.value})} required />
        <input type="email" placeholder="Email" onChange={e => setData({...data, email: e.target.value})} required />
        <input type="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})} required />
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
};

export default Register;