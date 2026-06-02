import { useState, useEffect } from 'react';
import api from '../services/api';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks').then(res => setTasks(res.data));
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <h1>Dashboard</h1>
        <div className="stats-grid">
          <div className="card"><h3>Total</h3><p>{tasks.length}</p></div>
          <div className="card"><h3>Pending</h3><p>{tasks.filter(t => t.status !== 'Completed').length}</p></div>
          <div className="card"><h3>Done</h3><p>{tasks.filter(t => t.status === 'Completed').length}</p></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;