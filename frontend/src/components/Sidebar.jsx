import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => { localStorage.clear(); navigate('/login'); };

  return (
    <div className="sidebar">
      <h3>TaskFlow AI</h3>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/tasks">My Tasks</Link>
        <Link to="/planner">AI Planner</Link>
        <button onClick={logout} style={{marginTop: '2rem', background: '#334155'}}>Logout</button>
      </nav>
    </div>
  );
};

export default Sidebar;